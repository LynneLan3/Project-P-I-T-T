/**
 * This file is generated from site-spec.yaml.
 * Do not edit directly.
 * Run npm run site:generate instead.
 */
import type { GameConfig } from './game-types';

export const siteConfig: GameConfig = {
	name: "Project P.I.T.T.",
	shortName: "Project P.I.T.T.",
	title: "Project P.I.T.T. Guide",
	description: "Answer-first Project P.I.T.T. guides for achievements, fuses, the 200kg plate, automation, combos, and other full-release problems.",
	tagline: "Get unstuck. Feed the Maw.",
	siteUrl: "https://project-p-i-t-t.example",
	siteMode: "standalone",
	hubPath: "/",
	hubTitle: "Project P.I.T.T. Guide",
	locale: "en",
	releaseStatus: "released",
	releaseDate: "2026-08-19",
	developer: "Froke",
	publisher: "Pretty Soon",
	platforms: ["PC (Steam)"],
	accentColor: "#f0b45a",
	accentForeground: "#1a1108",
	heroAlt: "Project P.I.T.T.",
	heroPosition: "center",
	disclaimer: "Unofficial fan site. This site is not affiliated with Froke or Pretty Soon.",
	portal: {
		primaryCta: {
			label: "Start with Hidden Progression",
			href: "/up-achievement-fuses/",
		},
		secondaryCta: {
			label: "Browse all guides",
			href: "#browse-guides",
		},
		statusItems: [
			{
				label: "Released",
				value: "August 19, 2026",
			},
			{
				label: "Platform",
				value: "PC (Steam)",
			},
			{
				label: "Focus",
				value: "Answer-first guides",
			},
		],
		popularQuestions: [
			{
				label: "How do I complete the UP? achievement?",
				href: "/up-achievement-fuses/",
			},
			{
				label: "How do I get 200 kg onto the plate?",
				href: "/200kg-plate/",
			},
			{
				label: "How do panels work in Project P.I.T.T.?",
				href: "/automation/",
			},
			{
				label: "How do I automate production?",
				href: "/automation/",
			},
			{
				label: "How do I reach a x300 combo?",
				href: "/x300-combo/",
			},
		],
		startHere: [
			{
				title: "How to Get the UP? Achievement and Place the Fuses",
				description: "A careful guide to the three-fuse box, the UP? achievement, and what to check when a fuse or the next gate appears stuck.",
				href: "/up-achievement-fuses/",
				label: "Hidden progression",
				badge: "Start here",
			},
			{
				title: "Project P.I.T.T. 200kg Plate Guide",
				description: "What the 200kg plate does, what can be used as weight, and what to check when the pipe or gate does not advance.",
				href: "/200kg-plate/",
				label: "Progression gate",
			},
			{
				title: "Project P.I.T.T. Automation: Panels, Fans, and Routing",
				description: "How to make panels, fans, magnets, pistons, and launchers behave like a reliable production lane without prescribing one best build.",
				href: "/automation/",
				label: "Factory systems",
			},
			{
				title: "Project P.I.T.T. Achievements",
				description: "All 23 Project P.I.T.T. Steam achievements, with public descriptions separated from hidden requirements.",
				href: "/achievements/",
				label: "Completion",
			},
		],
		showRecentlyUpdated: true,
		maxRecent: 3,
	},
	categories: [
		{
			id: "achievements",
			label: "Achievements",
			description: "Steam achievement requirements, public descriptions, and evidence boundaries.",
			icon: "trophy",
			order: 1,
		},
		{
			id: "progression-secrets",
			label: "Progression & Secrets",
			description: "The fuse, weight, gate, and other progression problems that stop a run.",
			icon: "key",
			order: 2,
		},
		{
			id: "automation",
			label: "Automation",
			description: "Panels, tools, routing, jams, and combo-ready factory habits.",
			icon: "puzzle",
			order: 3,
		},
	],
	pages: [
		{
			id: "achievements",
			slug: "achievements",
			role: "core",
			assetType: "checklist",
			intents: ["project-pitt-achievements", "steam-achievements", "100-percent-completion"],
			relations: [
				{
					pageId: "up-achievement-fuses",
					type: "next-step",
				},
				{
					pageId: "200kg-plate",
					type: "next-step",
				},
				{
					pageId: "x300-combo",
					type: "next-step",
				},
			],
			sources: [
				{
					type: "official",
					title: "Project P.I.T.T. Steam store page",
					url: "https://store.steampowered.com/app/4026250/Project_PITT/",
				},
				{
					type: "steam",
					title: "Steam Community achievement stats",
					url: "https://steamcommunity.com/stats/4026250/achievements/",
				},
				{
					type: "other",
					title: "Exophase achievement index",
					url: "https://www.exophase.com/game/project-p-i-t-t-steam/achievements/",
				},
			],
			evidence: [
			],
		},
		{
			id: "up-achievement-fuses",
			slug: "up-achievement-fuses",
			role: "core",
			assetType: "checklist",
			intents: ["project-pitt-up-achievement", "project-pitt-fuses", "find-and-place-all-fuses"],
			relations: [
				{
					pageId: "200kg-plate",
					type: "next-step",
				},
				{
					pageId: "achievements",
					type: "related",
				},
			],
			sources: [
				{
					type: "steam",
					title: "Steam Community discussion — fuse box and three sockets",
					url: "https://steamcommunity.com/app/4026250/discussions/0/571541826108933756/",
				},
				{
					type: "steam",
					title: "Steam Community developer FAQ and fixes",
					url: "https://steamcommunity.com/app/4026250/",
				},
				{
					type: "other",
					title: "Exophase achievement index — UP?",
					url: "https://www.exophase.com/game/project-p-i-t-t-steam/achievements/",
				},
			],
			evidence: [
			],
		},
		{
			id: "200kg-plate",
			slug: "200kg-plate",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-200kg-plate", "project-pitt-heavy-achievement", "project-pitt-pipe-gate"],
			relations: [
				{
					pageId: "automation",
					type: "next-step",
				},
				{
					pageId: "achievements",
					type: "related",
				},
			],
			sources: [
				{
					type: "steam",
					title: "Steam Community discussion — 200kg pad and pipe confusion",
					url: "https://steamcommunity.com/app/4026250/discussions/0/562534659773264624/",
				},
				{
					type: "other",
					title: "Exophase achievement index — HEAVY? and OPEN?",
					url: "https://www.exophase.com/game/project-p-i-t-t-steam/achievements/",
				},
				{
					type: "official",
					title: "Project P.I.T.T. Steam store page",
					url: "https://store.steampowered.com/app/4026250/Project_PITT/",
				},
			],
			evidence: [
			],
		},
		{
			id: "automation",
			slug: "automation",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-automation", "project-pitt-how-panels-work", "project-pitt-fans-magnets-pistons-launchers"],
			relations: [
				{
					pageId: "x300-combo",
					type: "next-step",
				},
				{
					pageId: "200kg-plate",
					type: "related",
				},
				{
					pageId: "achievements",
					type: "related",
				},
			],
			sources: [
				{
					type: "steam",
					title: "Steam Community automation discussion",
					url: "https://steamcommunity.com/app/4026250/discussions/0/572666820169834610/",
				},
				{
					type: "steam",
					title: "Steam Community developer FAQ",
					url: "https://steamcommunity.com/app/4026250/",
				},
				{
					type: "official",
					title: "Project P.I.T.T. Steam store page",
					url: "https://store.steampowered.com/app/4026250/Project_PITT/",
				},
			],
			evidence: [
			],
		},
		{
			id: "x300-combo",
			slug: "x300-combo",
			role: "core",
			assetType: "checklist",
			intents: ["project-pitt-x300-combo", "project-pitt-mega-achievement", "project-pitt-combo-guide"],
			relations: [
				{
					pageId: "automation",
					type: "related",
				},
				{
					pageId: "achievements",
					type: "related",
				},
			],
			sources: [
				{
					type: "official",
					title: "Project P.I.T.T. Steam store page",
					url: "https://store.steampowered.com/app/4026250/Project_PITT/",
				},
				{
					type: "other",
					title: "Exophase achievement index — combo milestones",
					url: "https://www.exophase.com/game/project-p-i-t-t-steam/achievements/",
				},
				{
					type: "steam",
					title: "Steam Community automation discussion",
					url: "https://steamcommunity.com/app/4026250/discussions/0/572666820169834610/",
				},
			],
			evidence: [
			],
		},
	],
	routes: [
		{
			id: "hidden-progression",
			eyebrow: "Progression Route",
			title: "Complete Hidden Progression",
			description: "Follow the fuse box, weight gate, and achievement handoffs in the order players usually need them.",
			href: "/routes/hidden-progression/",
			pages: [
				{
					pageId: "up-achievement-fuses",
					href: "/up-achievement-fuses/",
					title: "How to Get the UP? Achievement and Place the Fuses",
					description: "A careful guide to the three-fuse box, the UP? achievement, and what to check when a fuse or the next gate appears stuck.",
					eyebrow: "Hidden Progression",
				},
				{
					pageId: "200kg-plate",
					href: "/200kg-plate/",
					title: "Project P.I.T.T. 200kg Plate Guide",
					description: "What the 200kg plate does, what can be used as weight, and what to check when the pipe or gate does not advance.",
					eyebrow: "Progression Gate",
				},
				{
					pageId: "achievements",
					href: "/achievements/",
					title: "Project P.I.T.T. Achievements",
					description: "All 23 Project P.I.T.T. Steam achievements, with public descriptions separated from hidden requirements.",
					eyebrow: "Completion",
				},
			],
			fastAnswers: [
				{
					question: "What should I do after the fuses?",
					answer: "Check the 200kg plate and treat the later pipe as a separate gate.",
					pageId: "200kg-plate",
					href: "/200kg-plate/",
				},
				{
					question: "Where are all the achievement requirements?",
					answer: "Use the 23-achievement checklist, with hidden descriptions clearly marked.",
					pageId: "achievements",
					href: "/achievements/",
				},
			],
		},
		{
			id: "factory-optimization",
			eyebrow: "Factory Route",
			title: "Build Reliable Automation",
			description: "Start with a controllable lane, then use it to protect long combo attempts.",
			href: "/routes/factory-optimization/",
			pages: [
				{
					pageId: "automation",
					href: "/automation/",
					title: "Project P.I.T.T. Automation: Panels, Fans, and Routing",
					description: "How to make panels, fans, magnets, pistons, and launchers behave like a reliable production lane without prescribing one best build.",
					eyebrow: "Factory Systems",
				},
				{
					pageId: "x300-combo",
					href: "/x300-combo/",
					title: "How to Reach the x300 Combo in Project P.I.T.T.",
					description: "What MORE!, EXTRA!, and MEGA! mean, plus practical ways to keep a combo alive while automation is running.",
					eyebrow: "Combo Milestones",
				},
			],
			fastAnswers: [
				{
					question: "How should I start automating?",
					answer: "Test one product through one short, visible lane before scaling it.",
					pageId: "automation",
					href: "/automation/",
				},
				{
					question: "Why does my combo keep breaking?",
					answer: "Find the first jam or missed receiver, then simplify the lane before adding throughput.",
					pageId: "x300-combo",
					href: "/x300-combo/",
				},
			],
		},
		{
			id: "completion",
			eyebrow: "Completion Route",
			title: "Work Toward 100%",
			description: "A compact completion path through the four V1 problem pages.",
			href: "/routes/completion/",
			pages: [
				{
					pageId: "achievements",
					href: "/achievements/",
					title: "Project P.I.T.T. Achievements",
					description: "All 23 Project P.I.T.T. Steam achievements, with public descriptions separated from hidden requirements.",
					eyebrow: "Completion",
				},
				{
					pageId: "up-achievement-fuses",
					href: "/up-achievement-fuses/",
					title: "How to Get the UP? Achievement and Place the Fuses",
					description: "A careful guide to the three-fuse box, the UP? achievement, and what to check when a fuse or the next gate appears stuck.",
					eyebrow: "Hidden Progression",
				},
				{
					pageId: "200kg-plate",
					href: "/200kg-plate/",
					title: "Project P.I.T.T. 200kg Plate Guide",
					description: "What the 200kg plate does, what can be used as weight, and what to check when the pipe or gate does not advance.",
					eyebrow: "Progression Gate",
				},
				{
					pageId: "x300-combo",
					href: "/x300-combo/",
					title: "How to Reach the x300 Combo in Project P.I.T.T.",
					description: "What MORE!, EXTRA!, and MEGA! mean, plus practical ways to keep a combo alive while automation is running.",
					eyebrow: "Combo Milestones",
				},
			],
		},
	],
	trust: {
		enabled: true,
		pages: {
			about: {
				enabled: true,
				slug: "about",
				path: "/about/",
				title: "About",
				robots: "index,follow",
			},
			editorialMethod: {
				enabled: true,
				slug: "editorial-method",
				path: "/editorial-method/",
				title: "Editorial Method",
				robots: "index,follow",
			},
			privacy: {
				enabled: true,
				slug: "privacy",
				path: "/privacy/",
				title: "Privacy",
				robots: "noindex,follow",
			},
		},
	},
};
