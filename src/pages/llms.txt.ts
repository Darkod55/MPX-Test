import type { APIRoute } from "astro";
import { absoluteUrl, resolveSiteOrigin } from "../utils/seo";
import { serviceIndex } from "../data/services";
import { organization } from "../data/organization";

export const prerender = false;

export const GET: APIRoute = async ({ site, url, request }) => {
	const origin = resolveSiteOrigin({
		configured: site,
		requestOrigin: url.origin,
		headers: request.headers,
	});

	const home = absoluteUrl("/", origin);
	const about = absoluteUrl("/all-about-metapixels", origin);
	const services = absoluteUrl("/services", origin);
	const contact = absoluteUrl("/contact", origin);
	const audit = absoluteUrl("/performance-audit", origin);
	const sitemap = absoluteUrl("/sitemap.xml", origin);

	const serviceLines = serviceIndex
		.map((item) => `- [${item.title}](${services}#${item.id})`)
		.join("\n");

	const body = `# MetaPixels

> We build brands, marketing campaigns and search-optimised websites that help grow your business.

MetaPixels is a UK digital agency for branding, web design, web development, SEO, social and content marketing. Offices in Maidstone, Kent and Skopje.

## Key pages

- [Home](${home}): Agency overview
- [About](${about}): The team and how we work
- [Services](${services}): Digital services
- [Contact](${contact}): Enquiry form and offices
- [Performance audit](${audit}): Free website performance audit
- [Sitemap](${sitemap}): Machine-readable list of public URLs

## Services

${serviceLines}

## Contact

Email: ${organization.email}
Phone: ${organization.phone}
Website: ${home}
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
