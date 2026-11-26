/**
 * Contact page content — passed as props into theme section components.
 */
import showcase from "../assets/mpx/metapixels-webpages-showcase.png";

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
	image: showcase,
	imageAlt: "A showcase of MetaPixels client web pages",
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

export const contactFaqs = [
	{
		question: "What exactly does MetaPixels do?",
		answer:
			"MetaPixels is a full-service digital agency. We provide branding and rebranding, design and web design, web development, WordPress and plugin development, hosting and site management, API integration, search engine optimisation, content marketing, digital auditing, paid search and social ads, and social media management.",
	},
	{
		question: "Does MetaPixels work with any business?",
		answer:
			"Yes, we work with any business that is serious about investing in their company and understands that they have to invest in the digital presence to get the right returns from it.",
	},
	{
		question: "Are there businesses MetaPixels doesn't work with?",
		answer:
			"Yes. We are not a charity. It is not viable for us to work with companies that expect our time and expertise without having the marketing budget to support it.",
	},
	{
		question: "Can MetaPixels work in other languages and timezones?",
		answer:
			"Yes. We can work in any timezones, but there are some challenges, such as limited contact and small windows where the working days overlap.",
	},
] as const;
