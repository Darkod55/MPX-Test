import type { SteppedLabelItem } from "../components/ui/SteppedLabels.astro";

export const aboutIntro = {
	statement:
		"We're a passionate digital agency, dedicated to delivering {branding, web design, web development and marketing services.}",
	disciplines: [
		{ text: "Branding", tone: "navy" },
		{ text: "Web design", tone: "red" },
		{ text: "Development", tone: "royal" },
		{ text: "SEO", tone: "navy" },
		{ text: "Marketing", tone: "red" },
	] satisfies SteppedLabelItem[],
	lead: "We're a skilled team that helps businesses thrive. With diverse expertise, we handle projects of any size.",
	body: [
		"Our aim is to build client relationships, understand your business, and tailor branding, websites, SEO and marketing campaigns to your needs.",
		"MetaPixels is a UK-based digital agency for branding, websites, marketing and design.",
	],
	cta: { label: "Check our work", href: "/work" },
};

export const aboutVisible = {
	title: "We're a bit {fussy} about how things are done",
	lead: "Since the early days of Merv's career, he's always been obsessed with trying to find the best approach to everything he and the team offers.",
	body: [
		"This, coupled with his client-first attitude towards running a business, are MetaPixels' key selling points.",
		"We work with results driven organisations where digital experience is business critical.",
	],
	cta: { label: "Contact us", href: "/contact" },
	image: {
		alt: "MetaPixels core team, Merv, Dafi, Pene, Simona and Darko",
		position: "center",
	},
};

export const aboutCta = {
	id: "work-with-us",
	title: "Interested in engaging with us?",
	titleSize: "md" as const,
	tagline: "See what we can do for your business.",
	paragraphs: [
		"Whether it's assistance with your website, brand, socials, or better understanding your data, we're confident there'll be ways we can improve your business.",
		"We're here, ready to help you grow your business.",
	],
	card: {
		text: "If you want to talk it through, {get in touch.}",
		cta: { label: "Contact us", href: "/contact" },
	},
};

export const whyUs = {
	title: "Why {choose} us?",
	intro:
		"Choosing the right web design agency can be a daunting process. Every business will benefit from a great brand, an amazing website, solid content pillars and effective marketing.",
	listIntro: "We've worked hard to cover these bases:",
	reasons: [
		"Friendly, personal service.",
		"Dedicated in-house team.",
		"Prices to suit your budget.",
		"A wide range of services.",
		"You have complete control.",
	],
	cta: { label: "Work with us", href: "/contact" },
};
