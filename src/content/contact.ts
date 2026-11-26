/**
 * Contact page content — passed as props into theme section components.
 */
import brandCard from "../assets/mpx/mpx-brand-card.png";

export const contactMeta = {
	title: "Contact Us - MetaPixels, the Marketing Agency in Kent.",
	description:
		"Let's discuss how you can grow your business using our digital marketing services. Get in touch and we'll help your business thrive.",
};

export const contactHero = {
	variant: "page" as const,
	background: "primary" as const,
	label: "Contact",
	title: "Get in touch.",
	highlight: "touch.",
	subtitle: "Need to discuss your website, brand or marketing?",
	image: brandCard,
	imageAlt: "MetaPixels brand card",
	imagePosition: "center",
	imageFilter: "none" as const,
	divider: true,
	dividerTo: "gray" as const,
};

export const contactReasons = [
	"You're looking for help with search engine optimisation (SEO).",
	"You're looking for design or technical help with your website.",
	"You need a new website or web application.",
	"You're looking for help with paid advertising.",
	"You need a clear sales and/or marketing strategy.",
	"To support (or be) your sales and/or marketing team.",
	"You're looking for help with rebranding.",
	"Your social media isn't working as well as it could be.",
];
