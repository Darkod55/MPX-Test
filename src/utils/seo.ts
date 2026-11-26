import { organization } from "../data/organization";
import { serviceIndex, services } from "../data/services";
import { team, type TeamMember } from "../data/team";
import type { CaseStudy } from "../data/work";

export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export type PageSeo = {
	title: string;
	description: string;
	/** Path only, e.g. "/" or "/about" — resolved against site origin */
	canonicalPath?: string;
	/** Absolute or site-root path for social share image */
	ogImage?: string;
	ogImageAlt?: string;
	/** openGraph type — default "website" */
	ogType?: "website" | "article";
	robots?: string;
	jsonLd?: JsonLd;
};

export type BreadcrumbItem = {
	name: string;
	/** Path or absolute URL; omit for the current (final) crumb if desired */
	path?: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

export type WebPageType =
	| "WebPage"
	| "AboutPage"
	| "ContactPage"
	| "CollectionPage"
	| "ProfilePage"
	| "FAQPage";

const BRAND = organization.name;

/** Default Open Graph / Twitter share image. */
export const DEFAULT_OG_IMAGE = "/metapixels-social-card.jpg";
export const DEFAULT_OG_IMAGE_ALT =
	"MetaPixels brand logo with a background displaying mockups of websites.";
export const DEFAULT_OG_IMAGE_WIDTH = 2400;
export const DEFAULT_OG_IMAGE_HEIGHT = 1260;

/** Site launch / first publish date for marketing pages without their own chronology. */
export const SITE_LAUNCH_DATE = "2026-11-07";

/** Schema.org-friendly date (YYYY-MM-DD or full ISO). */
export function toSchemaDate(value: string | Date): string {
	if (value instanceof Date) return value.toISOString();
	return value;
}

/** Absolute URL from a path or absolute href. */
export function absoluteUrl(pathOrUrl: string, origin: string): string {
	if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
	const base = origin.endsWith("/") ? origin.slice(0, -1) : origin;
	const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
	return `${base}${path}`;
}

export function organizationId(origin: string): string {
	return `${origin}/#organization`;
}

export function personId(origin: string, slug: string): string {
	return `${origin}/all-about-metapixels#${slug}`;
}

/** Loopback / internal hosts must never appear in canonical, OG, or JSON-LD. */
export function isPrivateOrigin(originOrHost: string): boolean {
	try {
		const url = originOrHost.includes("://")
			? new URL(originOrHost)
			: new URL(`http://${originOrHost}`);
		const host = url.hostname.toLowerCase();
		return (
			host === "localhost" ||
			host === "127.0.0.1" ||
			host === "0.0.0.0" ||
			host === "::1" ||
			host.endsWith(".local")
		);
	} catch {
		return /localhost|127\.0\.0\.1/i.test(originOrHost);
	}
}

/**
 * Public site origin for SEO URLs.
 * Prefer SITE_URL / Astro.site, then forwarded Host — never localhost behind Nginx.
 */
export function resolveSiteOrigin(opts: {
	configured?: string | URL | null;
	requestOrigin: string;
	headers?: Headers;
}): string {
	const candidates: string[] = [];

	const envConfigured =
		(typeof process !== "undefined" &&
			(process.env.SITE_URL ||
				process.env.PUBLIC_SITE_URL ||
				process.env.EMDASH_SITE_URL)) ||
		undefined;

	if (opts.configured) {
		candidates.push(
			typeof opts.configured === "string"
				? opts.configured
				: opts.configured.origin,
		);
	}
	if (envConfigured) candidates.push(envConfigured);

	const xfHost = opts.headers?.get("x-forwarded-host")?.split(",")[0]?.trim();
	const host = opts.headers?.get("host")?.split(",")[0]?.trim();
	const xfProto =
		opts.headers?.get("x-forwarded-proto")?.split(",")[0]?.trim() || "https";

	if (xfHost) candidates.push(`${xfProto}://${xfHost}`);
	if (host) candidates.push(`${xfProto}://${host}`);
	candidates.push(opts.requestOrigin);

	for (const candidate of candidates) {
		if (!candidate) continue;
		try {
			const origin = new URL(candidate).origin;
			if (!isPrivateOrigin(origin)) return origin;
		} catch {
			/* skip invalid */
		}
	}

	return opts.requestOrigin;
}

export function documentTitle(pageTitle: string, brand = BRAND): string {
	const trimmed = pageTitle.trim();
	if (!trimmed) return brand;
	if (trimmed.toLowerCase().includes("metapixels")) return trimmed;
	return `${trimmed} — ${brand}`;
}

/** Safe JSON-LD for a script tag (escapes `<` so content can’t break out). */
export function serializeJsonLd(data: JsonLd): string {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd(origin: string) {
	const orgId = organizationId(origin);
	const logoUrl = absoluteUrl("/logo-icon.png", origin);
	const shareImage = absoluteUrl(DEFAULT_OG_IMAGE, origin);

	return {
		"@type": ["Organization", "ProfessionalService"],
		"@id": orgId,
		name: organization.name,
		legalName: organization.legalName,
		url: origin,
		logo: {
			"@type": "ImageObject",
			"@id": `${origin}/#logo`,
			url: logoUrl,
			contentUrl: logoUrl,
			caption: organization.name,
		},
		image: {
			"@type": "ImageObject",
			url: shareImage,
			width: DEFAULT_OG_IMAGE_WIDTH,
			height: DEFAULT_OG_IMAGE_HEIGHT,
			caption: DEFAULT_OG_IMAGE_ALT,
		},
		email: organization.email,
		telephone: organization.phone,
		description:
			"We build brands, marketing campaigns and search-optimised websites that help grow your business.",
		areaServed: {
			"@type": "Country",
			name: "United Kingdom",
		},
		address: {
			"@type": "PostalAddress",
			...organization.address,
		},
		...(organization.companyNumber
			? {
					identifier: {
						"@type": "PropertyValue",
						name: "Company Number",
						value: organization.companyNumber,
						propertyID: "Companies House",
					},
				}
			: {}),
		sameAs: [...organization.sameAs],
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "customer support",
				email: organization.email,
				telephone: organization.phone,
				areaServed: "GB",
				availableLanguage: ["English"],
				url: absoluteUrl("/contact", origin),
			},
		],
		knowsAbout: [
			"Branding",
			"Web design",
			"Web development",
			"Search engine optimisation",
			"Content marketing",
			"Social media marketing",
			"Paid search advertising",
			"Digital auditing",
			"Hosting and maintenance",
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			"@id": `${origin}/services#service-list`,
			name: "Digital marketing services",
			url: absoluteUrl("/services", origin),
		},
	};
}

/** BreadcrumbList for the current page path. */
export function breadcrumbListJsonLd(
	origin: string,
	items: BreadcrumbItem[],
) {
	return {
		"@type": "BreadcrumbList",
		"@id": `${absoluteUrl(items.at(-1)?.path ?? "/", origin)}#breadcrumb`,
		itemListElement: items.map((item, index) => {
			const entry: Record<string, unknown> = {
				"@type": "ListItem",
				position: index + 1,
				name: item.name,
			};
			if (item.path) {
				entry.item = absoluteUrl(item.path, origin);
			}
			return entry;
		}),
	};
}

/** Person node for a team member (About page + Article authors). */
export function personJsonLd(
	origin: string,
	member: TeamMember,
	opts: { imageUrl?: string } = {},
) {
	const url = absoluteUrl(`/all-about-metapixels#${member.slug}`, origin);
	return {
		"@type": "Person",
		"@id": personId(origin, member.slug),
		name: member.name,
		jobTitle: member.role,
		description: member.bio,
		url,
		worksFor: { "@id": organizationId(origin) },
		...(opts.imageUrl
			? {
					image: {
						"@type": "ImageObject",
						url: opts.imageUrl,
					},
				}
			: {}),
	};
}

/** All visible team members as Person nodes. */
export function teamPersonJsonLdNodes(origin: string): Record<string, unknown>[] {
	return team
		.filter((member) => !member.hidden)
		.map((member) => personJsonLd(origin, member));
}

/** One Service node per offering on /services. */
export function serviceJsonLdNodes(origin: string): Record<string, unknown>[] {
	const byId = new Map(services.map((service) => [service.id, service]));

	return serviceIndex.map((nav) => {
		const full = byId.get(nav.id);
		const url = absoluteUrl(`/services#${nav.id}`, origin);
		return {
			"@type": "Service",
			"@id": `${origin}/services#${nav.id}`,
			name: full?.title ?? nav.title,
			description: full?.lead ?? full?.tagline ?? nav.title,
			url,
			provider: { "@id": organizationId(origin) },
			areaServed: {
				"@type": "Country",
				name: "United Kingdom",
			},
			serviceType: nav.title,
			...(full?.included?.length
				? {
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: `${full.title} inclusions`,
							itemListElement: full.included.map((item, index) => ({
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: item,
								},
								position: index + 1,
							})),
						},
					}
				: {}),
		};
	});
}

/** ItemList wrapping all services (handy for the services page graph). */
export function servicesItemListJsonLd(origin: string) {
	const nodes = serviceJsonLdNodes(origin);
	return {
		"@type": "ItemList",
		"@id": `${origin}/services#service-list`,
		name: "Digital marketing services",
		numberOfItems: nodes.length,
		itemListElement: nodes.map((node, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: { "@id": node["@id"] },
		})),
	};
}

/** Free performance-audit Service + Offer. */
export function performanceAuditServiceJsonLd(origin: string) {
	const url = absoluteUrl("/performance-audit", origin);
	return {
		"@type": "Service",
		"@id": `${url}#service`,
		name: "Website performance audit",
		description:
			"Free website performance audit covering speed, SEO and AI visibility, with a clear plan for improvement.",
		url,
		provider: { "@id": organizationId(origin) },
		areaServed: {
			"@type": "Country",
			name: "United Kingdom",
		},
		serviceType: "Digital auditing",
		offers: {
			"@type": "Offer",
			"@id": `${url}#offer`,
			url,
			price: 0,
			priceCurrency: "GBP",
			availability: "https://schema.org/InStock",
			category: "Free consultation",
		},
	};
}

/** CreativeWork nodes + ItemList for the work / case-study archive. */
export function workCaseStudyJsonLdNodes(
	origin: string,
	studies: CaseStudy[],
): Record<string, unknown>[] {
	return studies.map((study) => {
		const url = absoluteUrl(`/work#${study.id}`, origin);
		return {
			"@type": "CreativeWork",
			"@id": `${origin}/work#${study.id}`,
			name: study.title,
			description: study.summary,
			url,
			creator: { "@id": organizationId(origin) },
			about: study.businessType,
			genre: study.websiteType,
			keywords: study.services.map((item) => item.label).join(", "),
			...(study.siteHref
				? {
						sameAs: study.siteHref,
					}
				: {}),
		};
	});
}

export function workItemListJsonLd(
	origin: string,
	studies: CaseStudy[],
) {
	const nodes = workCaseStudyJsonLdNodes(origin, studies);
	return {
		"@type": "ItemList",
		"@id": `${origin}/work#case-study-list`,
		name: "Client work and case studies",
		numberOfItems: nodes.length,
		itemListElement: nodes.map((node, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: { "@id": node["@id"] },
		})),
	};
}

export type BlogPostingInput = {
	path: string;
	title: string;
	description: string;
	datePublished: string | Date;
	dateModified?: string | Date;
	authorSlug: string;
	authorName: string;
	authorRole?: string;
	category?: string;
	tags?: string[];
	imageUrl: string;
	wordCount?: number;
};

/** BlogPosting (+ author Person) for an article page. */
export function blogPostingJsonLd(
	origin: string,
	input: BlogPostingInput,
): Record<string, unknown>[] {
	const pageUrl = absoluteUrl(input.path, origin);
	const authorSlug = input.authorSlug;
	const author = personJsonLd(
		origin,
		{
			slug: authorSlug,
			name: input.authorName,
			role: input.authorRole ?? "Author",
			bio: "",
		},
		{},
	);

	// Prefer the richer team bio when the author matches a team member.
	const member = team.find((item) => item.slug === authorSlug);
	const authorNode = member
		? personJsonLd(origin, member)
		: author;

	const posting: Record<string, unknown> = {
		"@type": "BlogPosting",
		"@id": `${pageUrl}#article`,
		headline: input.title,
		description: input.description,
		datePublished: toSchemaDate(input.datePublished),
		dateModified: toSchemaDate(
			input.dateModified ?? input.datePublished,
		),
		author: { "@id": authorNode["@id"] },
		publisher: { "@id": organizationId(origin) },
		image: {
			"@type": "ImageObject",
			url: input.imageUrl,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${pageUrl}#webpage`,
		},
		isPartOf: { "@id": `${origin}/#website` },
		inLanguage: "en-GB",
	};

	if (input.category) posting.articleSection = input.category;
	if (input.tags?.length) posting.keywords = input.tags.join(", ");
	if (input.wordCount) posting.wordCount = input.wordCount;

	return [posting, authorNode];
}

/** FAQPage for contact (and similar) FAQ sections. */
export function faqPageJsonLd(
	origin: string,
	path: string,
	faqs: FaqItem[],
) {
	const url = absoluteUrl(path, origin);
	return {
		"@type": "FAQPage",
		"@id": `${url}#faq`,
		url,
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
		isPartOf: { "@id": `${origin}/#website` },
		about: { "@id": organizationId(origin) },
		inLanguage: "en-GB",
	};
}

/** Blog archive CollectionPage ItemList of recent posts. */
export function blogItemListJsonLd(
	origin: string,
	posts: Array<{ path: string; title: string }>,
) {
	return {
		"@type": "ItemList",
		"@id": `${origin}/blog#post-list`,
		name: "MetaPixels blog articles",
		numberOfItems: posts.length,
		itemListElement: posts.map((post, index) => ({
			"@type": "ListItem",
			position: index + 1,
			url: absoluteUrl(post.path, origin),
			name: post.title,
		})),
	};
}

export function webSiteJsonLd(origin: string) {
	return {
		"@type": "WebSite",
		"@id": `${origin}/#website`,
		name: BRAND,
		url: origin,
		publisher: { "@id": organizationId(origin) },
		inLanguage: "en-GB",
		copyrightHolder: { "@id": organizationId(origin) },
	};
}

export function webPageJsonLd(opts: {
	origin: string;
	path: string;
	title: string;
	description: string;
	datePublished?: string | Date;
	dateModified?: string | Date;
	type?: WebPageType;
}) {
	const url = absoluteUrl(opts.path, opts.origin);
	const datePublished = toSchemaDate(
		opts.datePublished ?? SITE_LAUNCH_DATE,
	);
	const dateModified = toSchemaDate(
		opts.dateModified ?? opts.datePublished ?? SITE_LAUNCH_DATE,
	);
	return {
		"@type": opts.type ?? "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: opts.title,
		description: opts.description,
		datePublished,
		dateModified,
		isPartOf: { "@id": `${opts.origin}/#website` },
		about: { "@id": organizationId(opts.origin) },
		publisher: { "@id": organizationId(opts.origin) },
		inLanguage: "en-GB",
	};
}

/** Graph with Organization + WebSite + optional page nodes. */
export function buildSiteGraph(
	origin: string,
	extra: Record<string, unknown>[] = [],
) {
	return {
		"@context": "https://schema.org",
		"@graph": [organizationJsonLd(origin), webSiteJsonLd(origin), ...extra],
	};
}
