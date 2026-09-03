#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import YAML from 'yaml';
import { generateAutoUpdateReceipt } from './lib/auto-update-receipt.mjs';
import { runProductionPublish } from './publish-production.mjs';

function asString(value) { return value === undefined || value === null ? '' : String(value).trim(); }
function parseArgs(argv) {
  let receiptPath=''; let checkOnly=false; let skipBuild=false;
  for(let i=0;i<argv.length;i+=1){const arg=argv[i];if(arg==='--receipt'){receiptPath=argv[++i]||'';continue;}if(arg.startsWith('--receipt=')){receiptPath=arg.slice('--receipt='.length);continue;}if(arg==='--check'){checkOnly=true;continue;}if(arg==='--skip-build'){skipBuild=true;continue;}if(arg==='--help'||arg==='-h')return{help:true,receiptPath:'',checkOnly,skipBuild};throw new Error(`Unknown argument: ${arg}`);}
  return {help:false,receiptPath:receiptPath?path.resolve(receiptPath):'',checkOnly,skipBuild};
}
function gitRepositoryUrl(rootDir){const result=spawnSync('git',['remote','get-url','origin'],{cwd:rootDir,encoding:'utf8',env:{...process.env,GIT_TERMINAL_PROMPT:'0'}});if(result.status!==0)throw new Error('SITE_LAUNCH requires git origin');const remote=asString(result.stdout);const ssh=remote.match(/^git@github\.com:(.+?)(?:\.git)?$/i);if(ssh)return `https://github.com/${ssh[1].replace(/\.git$/i,'')}`;const https=remote.match(/^https:\/\/github\.com\/(.+?)(?:\.git)?$/i);if(https)return `https://github.com/${https[1].replace(/\.git$/i,'')}`;throw new Error(`SITE_LAUNCH origin must be a GitHub repository: ${remote}`);}
function launchPageCount(receipt,productionUrl){const explicit=Number(receipt.common?.launchPageCount);if(Number.isFinite(explicit)&&explicit>=0)return explicit;const paths=new Set();for(const intervention of receipt.interventions??[]){if(asString(intervention.action).toUpperCase()!=='SITE_LAUNCH')continue;for(const value of intervention.affectedUrls??[]){try{const pathname=new URL(value,productionUrl).pathname;if(pathname==='/'||pathname==='/guides/'||pathname==='/routes/'||pathname==='/robots.txt'||pathname.startsWith('/sitemap'))continue;paths.add(pathname);}catch{}}}return paths.size;}
function enrichLaunchReceipt(rootDir,receiptPath){const receipt=JSON.parse(readFileSync(receiptPath,'utf8'));const launch=Array.isArray(receipt.interventions)&&receipt.interventions.some((item)=>asString(item?.action).toUpperCase()==='SITE_LAUNCH');if(!launch)return{receipt,enriched:false};receipt.common=receipt.common||{};const required=['steamAppId','decisionId','opportunityId'];const missing=required.filter((field)=>!asString(receipt.common[field]));if(missing.length)throw new Error(`SITE_LAUNCH receipt missing required attribution: ${missing.map((x)=>`common.${x}`).join(', ')}`);const spec=YAML.parse(readFileSync(path.join(rootDir,'site-spec.yaml'),'utf8'))||{};const siteId=asString(spec.site?.id);const productionUrl=asString(spec.deployment?.productionUrl||spec.site?.siteUrl);if(!siteId||!productionUrl)throw new Error('SITE_LAUNCH requires site.id and deployment.productionUrl in site-spec.yaml');if(asString(receipt.common.siteId)&&asString(receipt.common.siteId)!==siteId)throw new Error(`SITE_LAUNCH siteId conflict: receipt=${receipt.common.siteId} site-spec=${siteId}`);receipt.common.siteId=siteId;receipt.common.repositoryUrl=gitRepositoryUrl(rootDir);receipt.common.templateVersion=asString(spec.templateVersion);receipt.common.sitemapUrl=new URL('/sitemap-index.xml',productionUrl).href;receipt.common.launchPageCount=launchPageCount(receipt,productionUrl);return{receipt,enriched:true};}
async function main(){const options=parseArgs(process.argv.slice(2));if(options.help){console.log('Usage: npm run publish:production -- [--receipt <path>] [--check] [--skip-build]');console.log('Without --receipt, ordinary updates auto-generate a receipt from site-spec.yaml and committed HEAD^..HEAD diff. SITE_LAUNCH still requires an explicit receipt.');return;}const rootDir=process.cwd();let tempDir='';try{let receipt;let source='EXPLICIT';let effectiveReceipt=options.receiptPath;if(options.receiptPath){const prepared=enrichLaunchReceipt(rootDir,options.receiptPath);receipt=prepared.receipt;if(prepared.enriched){tempDir=mkdtempSync(path.join(os.tmpdir(),'hotword-publish-receipt-'));effectiveReceipt=path.join(tempDir,'enriched-receipt.json');writeFileSync(effectiveReceipt,`${JSON.stringify(receipt,null,2)}\n`,'utf8');}}else{receipt=generateAutoUpdateReceipt(rootDir);source='AUTO_UPDATE';tempDir=mkdtempSync(path.join(os.tmpdir(),'hotword-publish-receipt-'));effectiveReceipt=path.join(tempDir,'auto-update-receipt.json');writeFileSync(effectiveReceipt,`${JSON.stringify(receipt,null,2)}\n`,'utf8');}const result=await runProductionPublish({rootDir,receiptPath:effectiveReceipt,checkOnly:options.checkOnly,skipBuild:options.skipBuild});if(source==='AUTO_UPDATE')console.log(`Receipt: AUTO_UPDATE ${receipt.common.batchId}`);process.exitCode=result.status==='PUBLISH_COMPLETE'||result.status==='CHECK_ONLY'?0:1;}finally{if(tempDir)rmSync(tempDir,{recursive:true,force:true});}}

const isDirectRun = Boolean(process.argv[1]) && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
if (isDirectRun) {
	main().catch((error) => {
		console.error(`PUBLISH FAILED: ${error.message}`);
		process.exitCode = 1;
	});
}
