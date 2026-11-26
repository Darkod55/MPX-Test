export const notFound = {
	label: "Error 404",
	title: "This page doesn't {exist}",
	lead: "The page you're looking for may have moved, been renamed or never existed.",
	body: "Check the address for typos, or use one of the links below to get back on track.",
	primaryCta: { label: "Back to homepage", href: "/" },
	secondaryCta: { label: "Contact us", href: "/contact" },
	linksTitle: "Where would you {like to go?}",
	linksIntro:
		"These pages are a good place to start. If you still can't find what you need, get in touch and we'll point you in the right direction.",
	links: [
		{
			text: "Our services",
			description: "Branding, web design, development, SEO and marketing.",
			href: "/services",
		},
		{
			text: "About MetaPixels",
			description: "The agency, the team and our mission.",
			href: "/all-about-metapixels",
		},
		{
			text: "Contact us",
			description: "Tell us what you need and we'll help.",
			href: "/contact",
		},
	],
} as const;
