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
	siteUrl: "https://project-p-i-t-t.vercel.app",
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
	heroImage: "hero/project-pitt.jpg",
	heroAlt: "Project P.I.T.T. official key art from the Steam store",
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
				label: "Why is the Percentage Pipe stuck at 0%?",
				href: "/percentage-pipe/",
			},
			{
				label: "What does END? mean?",
				href: "/secret-ending/",
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
				title: "Project P.I.T.T. Fuses Guide — Fuse Box, 3 Fuses & UP?",
				description: "A careful Project P.I.T.T. guide to the three-fuse box, the UP? progression, evidence limits on fuse locations, and the 200kg next step.",
				href: "/up-achievement-fuses/",
				image: "gameplay/fuses.jpg",
				label: "Find the 3 Fuses",
				badge: "Start here",
			},
			{
				title: "Project P.I.T.T. 200kg Scale Guide — How to Reach 200 kg & What to Do Next",
				description: "How to reach 200 kilograms on the Project P.I.T.T. scale, use stable mass, and continue into the Percentage Pipe progression.",
				href: "/200kg-plate/",
				image: "gameplay/plate.jpg",
				label: "Reach 200kg",
			},
			{
				title: "Project P.I.T.T. Percentage Pipe Guide — Why It Stays at 0%",
				description: "Why ordinary ducks leave the Project P.I.T.T. Percentage Pipe at 0%, what progression follows 200kg, and how the pipe connects to the Secret Ending route.",
				href: "/percentage-pipe/",
				label: "Percentage Pipe stuck at 0%?",
			},
			{
				title: "Project P.I.T.T. Secret Ending Guide — END?, Elevator Code & Route",
				description: "What END? means, how the Project P.I.T.T. Secret Ending route connects to the earlier progression, and why elevator codes may be save-specific.",
				href: "/secret-ending/",
				label: "Find the Secret Ending",
			},
		],
		evidence: {
			title: "See the facility in action",
			description: "Official Steam screenshots show the visual context behind these answer-first guides.",
			items: [
				{
					image: "gameplay/fuses.jpg",
					alt: "Project P.I.T.T. gameplay screenshot for the fuse-box route",
					caption: "The facility context for the fuse-box route.",
					href: "/up-achievement-fuses/",
				},
				{
					image: "gameplay/plate.jpg",
					alt: "Project P.I.T.T. gameplay screenshot for the 200kg plate guide",
					caption: "A gameplay view for the weight-gate problem.",
					href: "/200kg-plate/",
				},
				{
					image: "gameplay/automation.jpg",
					alt: "Project P.I.T.T. gameplay screenshot for automation and routing",
					caption: "Factory context for panels, movers, and routing.",
					href: "/automation/",
				},
			],
		},
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
					pageId: "percentage-pipe",
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
			intents: ["project-pitt-200kg-plate", "project-pitt-200kg", "project-pitt-200-kg", "project-pitt-200kg-scale", "project-pitt-heavy-achievement", "project-pitt-pipe-gate"],
			relations: [
				{
					pageId: "automation",
					type: "related",
				},
				{
					pageId: "percentage-pipe",
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
			id: "percentage-pipe",
			slug: "percentage-pipe",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-percentage-pipe", "project-pitt-pipe-0-percent", "project-pitt-what-to-put-in-pipe"],
			relations: [
				{
					pageId: "200kg-plate",
					type: "related",
				},
				{
					pageId: "secret-ending",
					type: "next-step",
				},
			],
			sources: [
				{
					type: "steam",
					title: "Steam Community discussion — 200kg pad and pipe progression",
					url: "https://steamcommunity.com/app/4026250/discussions/0/562534659773264624/",
				},
				{
					type: "steam",
					title: "Steam Community developer FAQ and updates",
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
			id: "secret-ending",
			slug: "secret-ending",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-secret-ending", "project-pitt-ending", "project-pitt-end-question", "project-pitt-elevator-code"],
			relations: [
				{
					pageId: "percentage-pipe",
					type: "next-step",
				},
				{
					pageId: "up-achievement-fuses",
					type: "related",
				},
				{
					pageId: "200kg-plate",
					type: "related",
				},
			],
			sources: [
				{
					type: "other",
					title: "Exophase achievement index — END? and END!",
					url: "https://www.exophase.com/game/project-p-i-t-t-steam/achievements/",
				},
				{
					type: "steam",
					title: "Steam Community discussions and full-release player reports",
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
			visual: "gameplay/fuses.jpg",
			pages: [
				{
					pageId: "up-achievement-fuses",
					href: "/up-achievement-fuses/",
					title: "Project P.I.T.T. Fuses Guide — Fuse Box, 3 Fuses & UP?",
					description: "A careful Project P.I.T.T. guide to the three-fuse box, the UP? progression, evidence limits on fuse locations, and the 200kg next step.",
					eyebrow: "Hidden Progression",
					image: "gameplay/fuses.jpg",
				},
				{
					pageId: "200kg-plate",
					href: "/200kg-plate/",
					title: "Project P.I.T.T. 200kg Scale Guide — How to Reach 200 kg & What to Do Next",
					description: "How to reach 200 kilograms on the Project P.I.T.T. scale, use stable mass, and continue into the Percentage Pipe progression.",
					eyebrow: "Progression Gate",
					image: "gameplay/plate.jpg",
				},
				{
					pageId: "percentage-pipe",
					href: "/percentage-pipe/",
					title: "Project P.I.T.T. Percentage Pipe Guide — Why It Stays at 0%",
					description: "Why ordinary ducks leave the Project P.I.T.T. Percentage Pipe at 0%, what progression follows 200kg, and how the pipe connects to the Secret Ending route.",
					eyebrow: "Percentage Pipe",
				},
				{
					pageId: "secret-ending",
					href: "/secret-ending/",
					title: "Project P.I.T.T. Secret Ending Guide — END?, Elevator Code & Route",
					description: "What END? means, how the Project P.I.T.T. Secret Ending route connects to the earlier progression, and why elevator codes may be save-specific.",
					eyebrow: "Secret Ending",
				},
				{
					pageId: "achievements",
					href: "/achievements/",
					title: "Project P.I.T.T. Achievements",
					description: "All 23 Project P.I.T.T. Steam achievements, with public descriptions separated from hidden requirements.",
					eyebrow: "Completion",
					image: "gameplay/achievements.jpg",
				},
			],
			fastAnswers: [
				{
					question: "What should I do after the fuses?",
					answer: "Check the 200kg plate, then continue into the separate Percentage Pipe progression.",
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
			visual: "gameplay/automation.jpg",
			pages: [
				{
					pageId: "automation",
					href: "/automation/",
					title: "Project P.I.T.T. Automation: Panels, Fans, and Routing",
					description: "How to make panels, fans, magnets, pistons, and launchers behave like a reliable production lane without prescribing one best build.",
					eyebrow: "Factory Systems",
					image: "gameplay/automation.jpg",
				},
				{
					pageId: "x300-combo",
					href: "/x300-combo/",
					title: "How to Reach the x300 Combo in Project P.I.T.T.",
					description: "What MORE!, EXTRA!, and MEGA! mean, plus practical ways to keep a combo alive while automation is running.",
					eyebrow: "Combo Milestones",
					image: "gameplay/combo.jpg",
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
			description: "A compact completion path through the progression questions now producing launch-window search demand.",
			href: "/routes/completion/",
			visual: "gameplay/combo.jpg",
			pages: [
				{
					pageId: "achievements",
					href: "/achievements/",
					title: "Project P.I.T.T. Achievements",
					description: "All 23 Project P.I.T.T. Steam achievements, with public descriptions separated from hidden requirements.",
					eyebrow: "Completion",
					image: "gameplay/achievements.jpg",
				},
				{
					pageId: "up-achievement-fuses",
					href: "/up-achievement-fuses/",
					title: "Project P.I.T.T. Fuses Guide — Fuse Box, 3 Fuses & UP?",
					description: "A careful Project P.I.T.T. guide to the three-fuse box, the UP? progression, evidence limits on fuse locations, and the 200kg next step.",
					eyebrow: "Hidden Progression",
					image: "gameplay/fuses.jpg",
				},
				{
					pageId: "200kg-plate",
					href: "/200kg-plate/",
					title: "Project P.I.T.T. 200kg Scale Guide — How to Reach 200 kg & What to Do Next",
					description: "How to reach 200 kilograms on the Project P.I.T.T. scale, use stable mass, and continue into the Percentage Pipe progression.",
					eyebrow: "Progression Gate",
					image: "gameplay/plate.jpg",
				},
				{
					pageId: "percentage-pipe",
					href: "/percentage-pipe/",
					title: "Project P.I.T.T. Percentage Pipe Guide — Why It Stays at 0%",
					description: "Why ordinary ducks leave the Project P.I.T.T. Percentage Pipe at 0%, what progression follows 200kg, and how the pipe connects to the Secret Ending route.",
					eyebrow: "Percentage Pipe",
				},
				{
					pageId: "secret-ending",
					href: "/secret-ending/",
					title: "Project P.I.T.T. Secret Ending Guide — END?, Elevator Code & Route",
					description: "What END? means, how the Project P.I.T.T. Secret Ending route connects to the earlier progression, and why elevator codes may be save-specific.",
					eyebrow: "Secret Ending",
				},
				{
					pageId: "x300-combo",
					href: "/x300-combo/",
					title: "How to Reach the x300 Combo in Project P.I.T.T.",
					description: "What MORE!, EXTRA!, and MEGA! mean, plus practical ways to keep a combo alive while automation is running.",
					eyebrow: "Combo Milestones",
					image: "gameplay/combo.jpg",
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
	social: {
		defaultImage: {
			asset: "social/project-pitt.jpg",
			alt: "Project P.I.T.T. official key art for social previews",
		},
	},
};
