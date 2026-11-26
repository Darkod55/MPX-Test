/**
 * Services — nav index and full ServiceBlock entries.
 * Anchor ids match the live Meta Pixels services page.
 */

import type { ImageMetadata } from "astro";

export type ServiceNavItem = {
	id: string;
	title: string;
};

/** Quick-links / homepage pill labels + stable anchor ids. */
export const serviceIndex: readonly ServiceNavItem[] = [
	{ id: "service-web-development", title: "Web Development" },
	{ id: "service-web-design", title: "Web Design" },
	{ id: "service-branding-design", title: "Branding & Design" },
	{ id: "service-search-engine-optimisation", title: "Search Engine Optimisation" },
	{ id: "service-paid-search-advertising-management", title: "Paid Search Advertising & Management" },
	{ id: "service-social-media-marketing-management", title: "Social Media Marketing & Management" },
	{ id: "service-content-marketing-management", title: "Content Marketing & Management" },
	{ id: "service-data-analysis-reporting", title: "Data Analysis & Reporting" },
	{ id: "service-digital-auditing-services", title: "Digital Auditing Services" },
	{ id: "service-hosting-maintenance", title: "Hosting & Maintenance" },
] as const;

/** Full service section — drives ServiceBlock. */
export type ServiceItem = {
	id: string;
	number: string;
	title: string;
	tagline: string;
	lead: string;
	body: string[];
	included?: string[];
	cta: { label: string; href: string };
	ctaVariant?: "primary" | "light";
	tone: "grey" | "white" | "royal" | "navy";
	reverse: boolean;
	slant: "up" | "down";
	bands?: "none" | "right" | "left";
	listColumns?: 1 | 2;
	image?: ImageMetadata;
	imageAlt?: string;
	imagePosition?: string;
	imageCorners?: "tl-br" | "tl-bl";
};

const contact = "/contact";

export const services: ServiceItem[] = [
	{
		id: "service-web-development",
		number: "01",
		title: "Web development",
		tagline: "Websites and web apps, done well",
		lead: "We build and maintain secure websites and web applications that are created to serve your needs.",
		body: [
			"Whether it's a corporate website, often built in WordPress, or a completely custom business application, we've got it covered.",
		],
		included: [
			"Custom web application development",
			"Laravel web development",
			"WordPress plugin development",
			"WordPress theme development",
			"Wix and Squarespace website support",
			"Microsite and email templating",
			"Cross-browser friendly",
		],
		cta: { label: "Discuss your project", href: contact },
		tone: "grey",
		reverse: false,
		slant: "up",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-web-design",
		number: "02",
		title: "Web design",
		tagline: "Web design to make you shine",
		lead: "Your website is your chance to create the right impression. Don't settle for bland or gimmicky.",
		body: [
			"We design stunning, brand-focused websites that will help you stand out from the competition and increase your brand's credibility.",
		],
		included: [
			"Mobile-first web design",
			"Mobile, tablet, laptop and desktop design",
			"Fully brand-focused design",
			"Wireframes and interactive prototype",
			"Insights and user experience driven design",
		],
		cta: { label: "Ready to shine online?", href: contact },
		tone: "white",
		reverse: true,
		slant: "down",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-branding-design",
		number: "03",
		title: "Branding and design",
		tagline: "Branding and design that makes a difference",
		lead: "Intelligent branding and beautiful design will get your company noticed and remembered.",
		body: [
			"We're passionate about creating the right identity for you to make the biggest impact. From logo concept development to full brand roll-out, we'll work collaboratively to get it spot on.",
		],
		included: [
			"Creating brand identities",
			"Full branding, rebranding and design",
			"Lite branding and design refresh",
			"Marketing materials design: email, mail, social assets",
			"Print and packaging design",
		],
		cta: { label: "Engage with our creative team", href: contact },
		tone: "navy",
		reverse: false,
		slant: "up",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-search-engine-optimisation",
		number: "04",
		title: "Search engine optimisation",
		tagline: "Climb the ranks with effective SEO",
		lead: "Your website needs to be seen for your business to thrive.",
		body: [
			"We facilitate optimum visibility of your website, by staying up to date with the latest trends and best practices in SEO. We deploy a broad range of SEO techniques across your website and all related on-site and off-site content.",
		],
		included: [
			"Enhancing site discovery for search bot crawling, indexing and ranking",
			"Supporting with well-written, informative and relevant content",
			"Applying expert knowledge of keywords using effective tools and techniques",
			"Acquiring high quality backlinks to enhance credibility",
			"Enhancing local SEO: localised keywords and search engine local services",
			"Applying technical SEO: website speed, loading time and mobile-friendliness",
		],
		cta: { label: "Be seen and grow through SEO", href: contact },
		tone: "grey",
		reverse: true,
		slant: "down",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-paid-search-advertising-management",
		number: "05",
		title: "Paid search advertising and management",
		tagline: "Drive traffic with Bing and Google Ads",
		lead: "Looking to maximise your ROI? Want to take your PPC to the next level? Not sure what ROI or PPC stand for?",
		body: [
			"We'll advise on and support you with paid search advertising as a valuable tool to grow your business.",
		],
		included: [
			"Support with keywords to determine where your ads appear in the search results",
			"Writing clear, concise and persuasive ad copy",
			"Guidance on monthly budgets for pay-per-click advertising",
			"Monitoring paid search advertising results to maximise your return on investment",
		],
		cta: { label: "Power up with paid ads", href: contact },
		tone: "white",
		reverse: false,
		slant: "up",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-social-media-marketing-management",
		number: "06",
		title: "Social media marketing and management",
		tagline: "Grow through social media",
		lead: "Boost your business and build relationships with your customers through clever social media marketing.",
		body: [
			"We'll work with you to plan, create and publish perfectly-pitched content to your target audience.",
		],
		included: [
			"Developing short-term, medium-term and long-term social media strategies",
			"Creating and sharing engaging, visually appealing, informative content",
			"Engaging with followers to build rapport",
			"Running paid social media ads to reach wider audiences",
			"Using social media analytics to improve strategy and campaigns over time",
		],
		cta: { label: "Let's share social strategies", href: contact },
		tone: "grey",
		reverse: true,
		slant: "down",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-content-marketing-management",
		number: "07",
		title: "Content marketing and management",
		tagline: "Wide-reaching quality content pillars",
		lead: "Our content marketing and management services include developing, writing, editing, promoting and monitoring custom, search-engine-friendly content to increase your company's revenue.",
		body: [],
		included: [
			"Promotional and educational content: blog posts, articles and white papers",
			"Social media content: carousels, infographics, videos",
			"Intent content: research, support, advice and creation",
			"Monitoring of content performance trends",
			"Appropriate use of AI for planning and research",
			"Live chat (conversational pillar)",
		],
		cta: { label: "Expand and drive your content", href: contact },
		tone: "white",
		reverse: false,
		slant: "up",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-data-analysis-reporting",
		number: "08",
		title: "Data analysis and reporting",
		tagline: "Using results to get results",
		lead: "Our thorough analysis and regular reporting on a range of data allow you to make informed decisions about future marketing and development efforts.",
		body: [
			"We use the best tools for the job, depending on the specific data set and the questions that need to be answered.",
		],
		included: [
			"Collecting, cleaning and analysing data",
			"Identifying trends and patterns",
			"Using findings to make decisions, identify opportunities and solve problems",
			"Tracking progress and measuring the effectiveness of campaigns and launches",
			"Presenting results so they are easy to understand and actionable",
		],
		cta: { label: "Access our data-driven services", href: contact },
		tone: "navy",
		reverse: true,
		slant: "down",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-digital-auditing-services",
		number: "09",
		title: "Digital auditing services",
		tagline: "A digital audit to understand where you are",
		lead: "A digital audit is a valuable investment. We'll help you grow your business by capturing data and offering valuable insights, such as conversion rates, your site's SEO and user experience, and marketing results.",
		body: [],
		included: [
			"Website: design, content, functionality and performance",
			"Social media accounts",
			"Email campaigns: open rates, click-through rates, conversion rates",
			"Paid advertising: social media and search engines",
			"Search engine optimisation",
		],
		cta: { label: "Get your digital audit", href: contact },
		tone: "grey",
		reverse: false,
		slant: "up",
		bands: "none",
		listColumns: 1,
	},
	{
		id: "service-hosting-maintenance",
		number: "10",
		title: "Hosting and maintenance",
		tagline: "Your website, hosted, maintained, enhanced",
		lead: "Benefit from ongoing support. We'll look after your site, implement updates and proactively make improvements.",
		body: [
			"Technology doesn't stop progressing and neither will your site under our watch.",
		],
		included: [
			"Content updates: planned and as required",
			"Bugs swiftly detected and fixed",
			"Regular security updates",
			"Website traffic monitoring and error detection",
			"Regular backups to prevent data loss",
			"On-demand backups before updates",
			"On-site SEO checks",
		],
		cta: { label: "Care for your website", href: contact },
		tone: "white",
		reverse: true,
		slant: "down",
		bands: "none",
		listColumns: 1,
	},
];
