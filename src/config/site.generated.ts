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
				label: "How do I use the Trade Terminal?",
				href: "/trade-terminal/",
			},
			{
				label: "How do I use the Shift Scheduler?",
				href: "/shift-scheduler/",
			},
			{
				label: "How do I fix crashes, low FPS, or missing tools?",
				href: "/troubleshooting/",
			},
			{
				label: "How do I use the Panel Rack?",
				href: "/panel-rack/",
			},
			{
				label: "How do I reach a x300 combo?",
				href: "/x300-combo/",
			},
		],
		startHere: [
			{
				title: "How to Use 3 Fuses in Project P.I.T.T. — Fuse Box & UP?",
				description: "How to use three Fuses in the upper/catwalk Fuse Box, recover a missing Fuse in the current version, and continue to the 200kg progression.",
				href: "/up-achievement-fuses/",
				image: "gameplay/fuses.jpg",
				label: "Find the 3 Fuses",
				badge: "Start here",
			},
			{
				title: "How to Reach 200kg in Project P.I.T.T. — Best Heavy Items & What to Do Next",
				description: "How to reach 200kg with stable heavy objects, why weight matters more than object count, and what to do next at the Percentage Pipe.",
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
			{
				title: "How to Automate Phase 4 in Project P.I.T.T.",
				description: "Phase 4 automation hub for reliable lanes, panels, movers, Shift Scheduler timing, Trade Terminal cleanup, Panel Rack flow, and x300 preparation.",
				href: "/automation/",
				image: "gameplay/automation.jpg",
				label: "Build reliable automation",
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
		{
			id: "trade-terminal",
			slug: "trade-terminal",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-trade-terminal", "project-pitt-trading-terminal", "project-pitt-how-to-use-trade-terminal", "project-pitt-clear-items", "project-pitt-remove-items", "project-pitt-cash-registers-piling-up"],
			relations: [
				{
					pageId: "automation",
					type: "related",
				},
				{
					pageId: "x300-combo",
					type: "related",
				},
			],
			sources: [
				{
					type: "steam",
					title: "Project P.I.T.T. Steam Community — Update 1.0.5",
					url: "https://steamcommunity.com/app/4026250/",
				},
				{
					type: "steam",
					title: "Steam Community discussion — Cash Register pileup and Trading Terminal",
					url: "https://steamcommunity.com/app/4026250/discussions/0/587309530805892814",
				},
			],
			evidence: [
			],
		},
		{
			id: "shift-scheduler",
			slug: "shift-scheduler",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-shift-scheduler", "project-pitt-how-to-use-shift-scheduler", "project-pitt-timed-batch-automation", "project-pitt-shift-scheduler-not-working", "project-pitt-scheduler-remote", "project-pitt-scheduler-timer", "project-pitt-manual-duck-crank-scheduler"],
			relations: [
				{
					pageId: "automation",
					type: "related",
				},
				{
					pageId: "x300-combo",
					type: "next-step",
				},
				{
					pageId: "trade-terminal",
					type: "related",
				},
				{
					pageId: "panel-rack",
					type: "related",
				},
			],
			sources: [
				{
					type: "steam",
					title: "Steam Community discussion — Shift Scheduler, Manual Duck Crank, Remote",
					url: "https://steamcommunity.com/app/4026250/discussions/0/587309829717073562/",
				},
				{
					type: "steam",
					title: "Steam Community developer Update 1.0.6",
					url: "https://steamcommunity.com/app/4026250/",
				},
				{
					type: "other",
					title: "Project P.I.T.T. Tools & Upgrades — Cannon",
					url: "https://projectpitt.online/guides/tools-and-upgrades/",
				},
				{
					type: "other",
					title: "Project P.I.T.T. All Items and Tools List — Cannon",
					url: "https://ninewiki.com/item/project-p-i-t-t-all-items-and-tools-list/",
				},
			],
			evidence: [
			],
		},
		{
			id: "troubleshooting",
			slug: "troubleshooting",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-troubleshooting", "project-pitt-low-fps", "project-pitt-broken-save", "project-pitt-missing-tools"],
			relations: [
				{
					pageId: "automation",
					type: "related",
				},
				{
					pageId: "trade-terminal",
					type: "related",
				},
				{
					pageId: "panel-rack",
					type: "related",
				},
				{
					pageId: "up-achievement-fuses",
					type: "related",
				},
			],
			sources: [
				{
					type: "steam",
					title: "Steam Community developer FAQ and updates",
					url: "https://steamcommunity.com/app/4026250/",
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
		{
			id: "panel-rack",
			slug: "panel-rack",
			role: "core",
			assetType: "article",
			intents: ["project-pitt-panel-rack", "project-pitt-how-to-use-panel-rack", "project-pitt-panel-rack-tier-3"],
			relations: [
				{
					pageId: "automation",
					type: "related",
				},
				{
					pageId: "shift-scheduler",
					type: "related",
				},
				{
					pageId: "trade-terminal",
					type: "related",
				},
				{
					pageId: "troubleshooting",
					type: "related",
				},
				{
					pageId: "x300-combo",
					type: "next-step",
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
					title: "Steam Community developer FAQ and updates",
					url: "https://steamcommunity.com/app/4026250/",
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
					title: "How to Use 3 Fuses in Project P.I.T.T. — Fuse Box & UP?",
					description: "How to use three Fuses in the upper/catwalk Fuse Box, recover a missing Fuse in the current version, and continue to the 200kg progression.",
					eyebrow: "Hidden Progression",
					image: "gameplay/fuses.jpg",
				},
				{
					pageId: "200kg-plate",
					href: "/200kg-plate/",
					title: "How to Reach 200kg in Project P.I.T.T. — Best Heavy Items & What to Do Next",
					description: "How to reach 200kg with stable heavy objects, why weight matters more than object count, and what to do next at the Percentage Pipe.",
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
					title: "Project P.I.T.T. Achievements Guide: Complete 23-Achievement Checklist",
					description: "Project P.I.T.T. has 23 Steam achievements, with public and hidden descriptions kept separate plus timing advice for completion before the ending.",
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
					title: "How to Automate Phase 4 in Project P.I.T.T.",
					description: "Phase 4 automation hub for reliable lanes, panels, movers, Shift Scheduler timing, Trade Terminal cleanup, Panel Rack flow, and x300 preparation.",
					eyebrow: "Factory Systems",
					image: "gameplay/automation.jpg",
				},
				{
					pageId: "shift-scheduler",
					href: "/shift-scheduler/",
					title: "Project P.I.T.T. Shift Scheduler: how to use it, Duck Crank block",
					description: "Updated for 1.0.6: Use Project P.I.T.T. Shift Scheduler to schedule automatic or switchable tools; it will not act as a button for the Manual Duck Crank. Re-test old reports.",
					eyebrow: "Shift Scheduler",
				},
				{
					pageId: "trade-terminal",
					href: "/trade-terminal/",
					title: "How to Use the Trade Terminal in Project P.I.T.T.",
					description: "Updated for 1.0.5: Learn how to use the Trade Terminal, its player-tested right-side vacuum switch, and the Pause Menu → Clear Items fallback.",
					eyebrow: "Trade Terminal",
				},
				{
					pageId: "panel-rack",
					href: "/panel-rack/",
					title: "How to Use the Panel Rack in Project P.I.T.T.",
					description: "How to use the Panel Rack after recent operation changes, including current interaction prompts, panel retrieval, unlock questions, old saves, and automation flow.",
					eyebrow: "Panel Rack",
				},
				{
					pageId: "x300-combo",
					href: "/x300-combo/",
					title: "How to Get a 300 Combo in Project P.I.T.T. — x300 Achievement Guide",
					description: "How to get a 300 Combo in Project P.I.T.T. with a reliable lane, automation assistance, Shift Scheduler timing, and pre-ending completion advice.",
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
					title: "Project P.I.T.T. Achievements Guide: Complete 23-Achievement Checklist",
					description: "Project P.I.T.T. has 23 Steam achievements, with public and hidden descriptions kept separate plus timing advice for completion before the ending.",
					eyebrow: "Completion",
					image: "gameplay/achievements.jpg",
				},
				{
					pageId: "up-achievement-fuses",
					href: "/up-achievement-fuses/",
					title: "How to Use 3 Fuses in Project P.I.T.T. — Fuse Box & UP?",
					description: "How to use three Fuses in the upper/catwalk Fuse Box, recover a missing Fuse in the current version, and continue to the 200kg progression.",
					eyebrow: "Hidden Progression",
					image: "gameplay/fuses.jpg",
				},
				{
					pageId: "200kg-plate",
					href: "/200kg-plate/",
					title: "How to Reach 200kg in Project P.I.T.T. — Best Heavy Items & What to Do Next",
					description: "How to reach 200kg with stable heavy objects, why weight matters more than object count, and what to do next at the Percentage Pipe.",
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
					title: "How to Get a 300 Combo in Project P.I.T.T. — x300 Achievement Guide",
					description: "How to get a 300 Combo in Project P.I.T.T. with a reliable lane, automation assistance, Shift Scheduler timing, and pre-ending completion advice.",
					eyebrow: "Combo Milestones",
					image: "gameplay/combo.jpg",
				},
				{
					pageId: "troubleshooting",
					href: "/troubleshooting/",
					title: "How to Fix Project P.I.T.T. Crashes, Low FPS, Saves & Missing Tools",
					description: "Grouped Project P.I.T.T. troubleshooting for crashes, low FPS, mouse control, saves, lost tools, lava drops, Clear Items, and ending-save issues.",
					eyebrow: "Troubleshooting",
				},
				{
					pageId: "panel-rack",
					href: "/panel-rack/",
					title: "How to Use the Panel Rack in Project P.I.T.T.",
					description: "How to use the Panel Rack after recent operation changes, including current interaction prompts, panel retrieval, unlock questions, old saves, and automation flow.",
					eyebrow: "Panel Rack",
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
	analytics: {
		enabled: true,
		provider: "vercel",
		trackOutbound: false,
	},
	monetization: {
		enabled: true,
		affiliate: {
			enabled: false,
			disclosure: true,
		},
		ads: {
			enabled: true,
		},
	},
	social: {
		defaultImage: {
			asset: "social/project-pitt.jpg",
			alt: "Project P.I.T.T. official key art for social previews",
		},
	},
};
