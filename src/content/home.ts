/**
 * Home page content — passed as props into theme section components.
 */
import showcase from "../assets/mpx/metapixels-webpages-showcase.png";
import mockups from "../assets/mpx/metapixels-webpages-mockups.png";
import jaBrooks from "../assets/mpx/metapixels-client-website-mockup-ja-brooks-1.png";
import homeStatements from "../assets/mpx/metapixels-client-website-mockup-home-statements.png";
import cyberone from "../assets/mpx/metapixels-client-website-mockup-cyberone.png";
import {
	beliefs,
	homeCta,
	howWeHelp,
	moreThanAnAgency,
} from "../data/home";

export const homeMeta = {
	title: "The Marketing Agency for Growth - MetaPixels",
	description:
		"We build brands, marketing campaigns and search-optimised websites that help grow your business. Get your free website performance audit.",
	canonicalPath: "/",
	ogImage: "/metapixels-social-card.jpg",
	ogImageAlt:
		"MetaPixels brand logo with a background displaying mockups of websites.",
};

export const homeHero = {
	id: "hero",
	variant: "home" as const,
	background: "primary" as const,
	label: "MetaPixels",
	title: "The marketing agency for growth.",
	highlight: "growth.",
	subtitle:
		"We build brands, marketing campaigns and search-optimised websites, that help grow your business.",
	image: showcase,
	imageAlt: "A showcase of MetaPixels client web pages",
	imagePosition: "center",
	imageFilter: "none" as const,
	primaryCta: {
		label: "Get started",
		href: "/contact",
	},
	secondaryCta: {
		label: "Our services",
		href: "/services",
	},
	divider: true,
	dividerTo: "white" as const,
};

export const homeIntro = {
	id: "intro",
	statement: "Need help growing your business?",
	highlight: "growing your business",
	body: "Our team will create a custom plan that's tailored to your specific needs, budget and goals. We'll help you with everything from branding, website design and SEO to social media advertising and content marketing.",
	emphasis: "We know that choosing the right digital marketing agency can be a daunting process. That's where we come in.",
	showGraphic: false,
	graphicScheme: "navy" as const,
	animate: false,
};

export const homeBetterUnderstanding = {
	id: "growing",
	background: "tertiary" as const,
	textColor: "white" as const,
	divider: "slant-top" as const,
	imageSide: "right" as const,
	showSlash: true,
	title: "What can we do for you?",
	lead: "As strategic thinkers, creative designers and logical problem-solvers, we support a diverse range of valued clients from many industries.",
	cta: {
		label: "Get a free consultation",
		href: "/contact",
	},
	image: mockups,
	imageAlt: "Mockups of websites designed by MetaPixels",
	imagePosition: "center",
	imageCorners: "tl-br" as const,
	imageFilter: "none" as const,
};

export const homeBeliefs = {
	id: "why-choose-us",
	title: "Why {choose} us?",
	intro:
		"We know that choosing the right digital marketing agency can be a daunting process. That's where we come in.",
	items: beliefs,
};

export const homeHowWeHelp = {
	id: "services",
	...howWeHelp,
};

export const homeMoreThanAnAgency = {
	id: "what-we-can-do",
	title: moreThanAnAgency.title,
	lead: moreThanAnAgency.lead,
	body: moreThanAnAgency.body,
	image: jaBrooks,
	imageAlt: moreThanAnAgency.image.alt,
	imagePosition: moreThanAnAgency.image.position,
};

export const homeCtaSection = {
	...homeCta,
};

export const homeRecentWork = [
	{
		id: "client-ja-brooks",
		title: "JA Brooks",
		href: "/work#client-ja-brooks",
		image: jaBrooks,
		imageAlt: "MetaPixels client website mockup JA Brooks",
		summary:
			"Rebranding and a new website, hosted and maintained, to take JA Brooks into its next phase of growth in a competitive industry.",
	},
	{
		id: "client-home-statements",
		title: "Home Statements",
		href: "/work#client-home-statements",
		image: homeStatements,
		imageAlt: "MetaPixels client website mockup Home Statements",
		summary:
			"Branding, search engine marketing and website services to design, launch and grow the exciting Home Statements company.",
	},
	{
		id: "client-cyberone",
		title: "CyberOne",
		href: "/work#client-cyberone",
		image: cyberone,
		imageAlt: "MetaPixels client website mockup CyberOne",
		summary:
			"Rebranding overhaul, website and social advertising for this cyber security company, changing its former identity to CyberOne.",
	},
];
