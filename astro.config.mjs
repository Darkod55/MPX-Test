import node from "@astrojs/node";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import icon from "astro-iconset";
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";
import { rehypeWrapTables } from "./src/utils/rehype-wrap-tables.ts";
import { stripServerTiming } from "./src/integrations/strip-server-timing.ts";

export default defineConfig({
	// Absolute URLs for canonical / Open Graph when SITE_URL or PUBLIC_SITE_URL is set
	site: process.env.SITE_URL || process.env.PUBLIC_SITE_URL,
	output: "server",
	// Match internal links (/about, /blog/slug) — avoids host trailing-slash loops
	trailingSlash: "never",
	adapter: node({
		mode: "standalone",
	}),
	// Rebuild request URLs from X-Forwarded-* behind Nginx / Cloudflare
	security: {
		allowedDomains: [
			{ hostname: "mpx.darkodev.zone" },
		],
	},
	redirects: {
		"/about": "/all-about-metapixels",
	},
	markdown: {
		processor: satteri({
			hastPlugins: [rehypeWrapTables()],
		}),
	},
	image: {
		layout: "constrained",
		responsiveStyles: true,
		// Required for @astrojs/node standalone — without this, /_image 404s in production
		// and every <Image> from src/assets breaks after deploy.
		endpoint: {
			route: "/_image",
			entrypoint: "astro/assets/endpoint/node",
		},
	},
	integrations: [
		// Must run before EmDash so this middleware is outermost and can
		// strip Server-Timing after EmDash attaches it on the way out.
		stripServerTiming(),
		react(),
		mdx(),
		icon({
			// Only ship the Phosphor icons actually referenced in templates,
			// not the full @iconify-json/ph set.
			include: {
				ph: [
					"arrow-right",
					"bell-simple",
					"buildings",
					"chart-bar",
					"chat-circle",
					"check",
					"check-circle",
					"clock",
					"cloud",
					"code",
					"currency-dollar",
					"envelope",
					"file-text",
					"gauge",
					"globe",
					"heart",
					"leaf",
					"lifebuoy",
					"lightning",
					"list",
					"lock",
					"map-pin",
					"pause",
					"phone",
					"play",
					"plug",
					"plus",
					"shield-check",
					"sparkle",
					"star",
					"sun",
					"thermometer-simple",
					"trend-up",
					"users-three",
					"x",
				],
			},
		}),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
		}),
	],
	// Lexend is self-hosted in src/styles/global.css (weights 400 and 700).
	devToolbar: { enabled: false },
});
