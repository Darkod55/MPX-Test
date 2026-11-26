/**
 * Services page content — passed as props into theme section components.
 */
import brandCard from "../assets/mpx/mpx-brand-card.png";
import { serviceIndex } from "../data/services";

export const servicesMeta = {
	title: "Branding, Web Design, SEO & Marketing Services - MetaPixels",
	description:
		"We're a web agency with a range of digital services, from branding, design and web development, to SEO, social media and content marketing.",
};

export const servicesHero = {
	variant: "page" as const,
	background: "primary" as const,
	label: "Services",
	title: "Our extensive range of digital services.",
	highlight: "digital services.",
	subtitle: "End-to-end digital solutions across technology, design and marketing.",
	image: brandCard,
	imageAlt: "MetaPixels brand card",
	imagePosition: "center",
	imageFilter: "none" as const,
	divider: true,
	dividerTo: "white" as const,
};

export const servicesOverview = {
	title: "Our extensive range of {digital services.}",
	intro:
		"End-to-end digital solutions across technology, design and marketing.",
	services: [...serviceIndex],
};

export const servicesCta = {
	title: "We're here, ready to help you grow your business.",
	paragraphs: [
		"If you are interested in learning more about our digital and design services, please contact us today.",
		"We would be happy to discuss your needs and how we can help you achieve your goals.",
	],
	cta: { label: "Get in touch", href: "/contact" },
};
