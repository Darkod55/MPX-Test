import { organization } from "../data/organization";
import { serviceIndex, services } from "../data/services";

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
	const orgId = `${origin}/#organization`;
	return {
		"@type": "Organization",
		"@id": orgId,
		name: organization.name,
		legalName: organization.legalName,
		url: origin,
		logo: absoluteUrl("/logo-icon.png", origin),
		email: organization.email,
		telephone: organization.phone,
		description:
			"We build brands, marketing campaigns and search-optimised websites that help grow your business.",
		areaServed: "GB",
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
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer support",
			email: organization.email,
			telephone: organization.phone,
			areaServed: "GB",
			availableLanguage: ["English"],
		},
		knowsAbout: [
			"Branding",
			"Web design",
			"Web development",
			"Search engine optimisation",
			"Content marketing",
			"Social media marketing",
			"Paid search advertising",
		],
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
			provider: { "@id": `${origin}/#organization` },
			areaServed: "GB",
			serviceType: nav.title,
		};
	});
}

/** ItemList wrapping all services (handy for the services page graph). */
export function servicesItemListJsonLd(origin: string) {
	const nodes = serviceJsonLdNodes(origin);
	return {
		"@type": "ItemList",
		"@id": `${origin}/services#service-list`,
		name: "Marketing services",
		numberOfItems: nodes.length,
		itemListElement: nodes.map((node, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: { "@id": node["@id"] },
		})),
	};
}

export function webSiteJsonLd(origin: string) {
	return {
		"@type": "WebSite",
		"@id": `${origin}/#website`,
		name: BRAND,
		url: origin,
		publisher: { "@id": `${origin}/#organization` },
		inLanguage: "en-GB",
	};
}

export function webPageJsonLd(opts: {
	origin: string;
	path: string;
	title: string;
	description: string;
	datePublished?: string | Date;
	dateModified?: string | Date;
}) {
	const url = absoluteUrl(opts.path, opts.origin);
	const datePublished = toSchemaDate(
		opts.datePublished ?? SITE_LAUNCH_DATE,
	);
	const dateModified = toSchemaDate(
		opts.dateModified ?? opts.datePublished ?? SITE_LAUNCH_DATE,
	);
	return {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: opts.title,
		description: opts.description,
		datePublished,
		dateModified,
		isPartOf: { "@id": `${opts.origin}/#website` },
		about: { "@id": `${opts.origin}/#organization` },
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
