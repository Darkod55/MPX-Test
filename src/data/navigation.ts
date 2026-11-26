export type NavItem = {
	label: string;
	href: string;
};

export type SocialLink = {
	label: string;
	href: string;
	icon: "linkedin" | "x" | "instagram" | "facebook";
};

/** Header / mobile panel menu — matches the live Meta Pixels header. */
export const mainNav: NavItem[] = [
	{ label: "About", href: "/all-about-metapixels" },
	{ label: "Services", href: "/services" },
	{ label: "Contact", href: "/contact" },
];

/**
 * Footer quick links from the live site.
 * The visible footer did not link the privacy policy; it is listed under legal.
 */
export const footerNav: NavItem[] = [
	{ label: "About MetaPixels", href: "/all-about-metapixels" },
	{ label: "Explore Our Services", href: "/services" },
	{ label: "Make Contact with Us", href: "/contact" },
	{ label: "Get a Performance Audit", href: "/performance-audit" },
];

/** Header primary CTA */
export const headerCta: NavItem = {
	label: "Get started",
	href: "/contact",
};

/** Preheader on every page. */
export const auditBarLink: NavItem = {
	label: "Book your audit now",
	href: "/performance-audit",
};

/**
 * Profiles from the live JSON-LD sameAs list.
 * The visible footer social container on the previous live site was empty.
 */
export const socialLinks: SocialLink[] = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/metapixelsmpx",
		icon: "linkedin",
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/MetaPixelsLtd",
		icon: "facebook",
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/metapixelsmpx/",
		icon: "instagram",
	},
	{
		label: "X",
		href: "https://twitter.com/MetaPixelsMPX",
		icon: "x",
	},
];

export const legalLinks: NavItem[] = [
	{ label: "Privacy Policy", href: "/privacy-policy" },
	{ label: "Sitemap", href: "/sitemap.xml" },
];
