/**
 * Blog archive page content. The Meta Pixels site has no posts.
 * The route stays so the blog feature still builds.
 */
import showcase from "../assets/mpx/metapixels-webpages-showcase.png";

export const blogMeta = {
	title: "Blog - MetaPixels",
	description: "MetaPixels does not publish a blog. Explore our services and work instead.",
};

export const blogHero = {
	variant: "page" as const,
	background: "primary" as const,
	label: "Blog",
	title: "No articles yet",
	highlight: "yet",
	subtitle:
		"This site does not have blog posts. Have a look at our services, work, or get in touch.",
	image: showcase,
	imageAlt: "A showcase of MetaPixels client web pages",
	imagePosition: "center",
	divider: true,
	dividerTo: "white" as const,
	minHeight: "560px",
};

export const blogNewsletter = {
	title: "Talk to the team instead",
	body: "There is no newsletter on this site yet. Send a message and one of the team will be in touch.",
	emailLabel: "Email address",
	placeholder: "you@company.com",
	submitLabel: "Contact us",
};
