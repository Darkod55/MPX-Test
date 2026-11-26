import { serviceIndex, type ServiceNavItem } from "./services";

export type Belief = {
	number: string;
	title: string;
	lead?: string;
	body: string[];
};

/** Homepage “Why choose us” points. `{word}` = highlight. */
export const beliefs: Belief[] = [
	{
		number: "01",
		title: "A friendly, {personal} service",
		body: [
			"We'll always take the time to listen to your needs and answer your questions.",
		],
	},
	{
		number: "02",
		title: "A dedicated {in-house} team",
		body: [
			"We are experienced professionals with a range of skills to grow your business.",
		],
	},
	{
		number: "03",
		title: "A wide range of {services}",
		body: [
			"Whether it's a budget-sensitive website refresh or a full marketing service, we've got you covered.",
		],
	},
	{
		number: "04",
		title: "A {collaborative} approach",
		body: [
			"We work with you on the deliverables, from branding and design preferences to website functionality and marketing campaigns.",
		],
	},
	{
		number: "05",
		title: "A pricing system {for you}",
		body: [
			"We offer a variety of pricing options to fit your budget, rather than a one-size-fits-all approach.",
		],
	},
];

export type HowWeHelpService = ServiceNavItem | string | { label: string; href?: string };

export const howWeHelp = {
	title: "Our digital {services}",
	intro:
		"End-to-end digital solutions across technology, design and marketing.",
	steps: ["Branding", "Websites", "Marketing"],
	outro:
		"From a budget-sensitive website refresh to a full marketing service, the same team can take the work on.",
	cta: { label: "Explore our services", href: "/services" },
	servicesLabel: "Our services include",
	services: [...serviceIndex] satisfies HowWeHelpService[],
};

export const moreThanAnAgency = {
	title: "What can we do {for you?}",
	lead: "As strategic thinkers, creative designers and logical problem-solvers, we support a diverse range of valued clients from many industries.",
	body: "Would your business benefit from better search engine ranking? Or perhaps you need support with your social media management? Are your content pillars working hard enough for you?",
	image: {
		alt: "MetaPixels client website mockup JA Brooks",
		position: "center",
	},
};

export const homeCta = {
	id: "get-in-touch",
	title: "Get in touch to set up a video call or face-to-face meeting.",
	tagline: "Arrange a meeting.",
	paragraphs: [
		"Arrange a meeting to discuss the details of your project. Together, we'll create the perfect strategy for your business.",
	],
	card: {
		text: "Tell us about the project and {we'll take it from there.}",
		cta: { label: "Arrange a meeting", href: "/contact" },
	},
};
