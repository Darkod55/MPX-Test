/**
 * About page content — passed as props into theme section components.
 */
import showcase from "../assets/mpx/metapixels-webpages-showcase.png";
import teamPhoto from "../assets/mpx/team-photo.jpg";
import {
	aboutIntro as aboutIntroData,
	aboutVisible as aboutVisibleData,
} from "../data/about";

export const aboutMeta = {
	title: "At MetaPixels It’s All About the Team",
	description:
		"MetaPixels is a digital marketing agency, in Maidstone, Kent. We do in branding, web design, web development, SEO, social and content marketing.",
};

export const aboutHero = {
	variant: "page" as const,
	background: "primary" as const,
	label: "About",
	title: "All about MetaPixels.",
	highlight: "MetaPixels.",
	subtitle: "The agency, the team and our mission.",
	image: showcase,
	imageAlt: "A screenshot of a group of client websites",
	imagePosition: "center",
	imageFilter: "none" as const,
	divider: true,
	dividerTo: "white" as const,
};

export { aboutIntroData as aboutIntro };

export const aboutVisible = {
	...aboutVisibleData,
	image: teamPhoto,
	imageAlt: aboutVisibleData.image.alt,
	imagePosition: aboutVisibleData.image.position,
};
