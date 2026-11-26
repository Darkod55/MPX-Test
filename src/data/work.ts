import type { ImageMetadata } from "astro";
import cyberone from "../assets/mpx/metapixels-client-website-responsive-mockup-cyber-one.png";
import homeStatements from "../assets/mpx/metapixels-client-website-responsive-mockup-home-statements.png";
import learnChess from "../assets/mpx/metapixels-client-website-responsive-mockup-learn-chess.png";
import jaBrooks from "../assets/mpx/metapixels-client-website-responsive-mockup-ja-brooks.png";
import jfAutomotive from "../assets/mpx/metapixels-client-website-responsive-mockup-jfautomotive.png";
import threeCounties from "../assets/mpx/metapixels-client-website-responsive-mockup-three-counties.png";
import whichNespresso from "../assets/mpx/metapixels-client-website-responsive-mockup-which-nesspresso.png";

export type WorkLink = { label: string; href: string };

export type CaseStudy = {
	id: string;
	title: string;
	summary: string;
	businessType: string;
	websiteType: string;
	siteLabel: string;
	siteHref: string;
	services: WorkLink[];
	body: string[];
	image: ImageMetadata;
	imageAlt: string;
	pullTitle: string;
	pullBody: string;
	outputs: string[];
};

const branding = "/services#service-branding-design";
const webDesign = "/services#service-web-design";
const webDev = "/services#service-web-development";
const social = "/services#service-social-media-marketing-management";
const content = "/services#service-content-marketing-management";
const seo = "/services#service-search-engine-optimisation";
const data = "/services#service-data-analysis-reporting";
const hosting = "/services#service-hosting-maintenance";
const audit = "/services#service-digital-auditing-services";

export const caseStudies: CaseStudy[] = [
	{
		id: "client-cyberone",
		title: "CyberOne",
		summary:
			"CyberOne is a leading cybersecurity company that offers its clients improved cyber defences, and accelerated detection and response, through award-winning solutions.",
		businessType: "Business-to-business",
		websiteType: "Corporate & LeadGen",
		siteLabel: "cyberone.security",
		siteHref: "https://cyberone.security/",
		services: [
			{ label: "Rebranding", href: branding },
			{ label: "Web Design", href: webDesign },
			{ label: "Web Development", href: webDev },
			{ label: "Paid Social Ads", href: social },
			{ label: "Email Templating", href: content },
			{ label: "Onsite SEO", href: seo },
		],
		body: [
			"This valued client approached us wanting to showcase its partnerships with leading companies, such as Microsoft, Okta and KnowBe4.",
			"The CyberOne team knew that a complete rebranding was necessary to put the company in the spotlight, enhance its visibility, and position itself as a credible competitor in the cybersecurity industry.",
			"From an initial audit to the launch of the new CyberOne brand, we provided a broad range of our brand, design and marketing services.",
		],
		image: cyberone,
		imageAlt: "A screenshot of the CyberOne website",
		pullTitle: "Unique responsive worldwide representation.",
		pullBody:
			"Learn more about how our award-winning cybersecurity services could benefit your business.",
		outputs: [
			"The rebranding was a success. The company's new brand has helped to increase its visibility, enhance its credibility, and position itself as a worthy competitor in the cybersecurity industry.",
		],
	},
	{
		id: "client-home-statements",
		title: "Home Statements",
		summary:
			"Home Statements offer products and services to improve homes, inside and out. This family-run business combines a passion for quality bespoke home improvements with the desire to provide skilled, trusted and reliable contractors.",
		businessType: "Business-to-business",
		websiteType: "Corporate & LeadGen",
		siteLabel: "homestatements.co.uk",
		siteHref: "https://homestatements.co.uk/",
		services: [
			{ label: "Branding", href: branding },
			{ label: "Web Design", href: webDesign },
			{ label: "WordPress Development", href: webDev },
			{ label: "Ongoing Onsite SEO", href: seo },
			{ label: "Data Analysis", href: data },
			{ label: "Competitor & Keyword R&D", href: data },
			{ label: "Hosting & Site Management", href: hosting },
		],
		body: [
			"As a new company, the Home Statements team required several services, including branding, web design and build, and data analysis. We host and maintain their website and provide ongoing on-site SEO, and competitor and keyword research and development services, to continually drive traffic to their site.",
			"Working closely with the Home Statements team, we've been able to cater to their specific needs and have been instrumental in getting their business off the ground.",
		],
		image: homeStatements,
		imageAlt: "A screenshot of the Home Statements website",
		pullTitle: "Make your home a statement.",
		pullBody: "Learn more about how this exciting company can help your home stand out.",
		outputs: [
			"Consistently ranking at the top of Google for many of their top keywords and an ever-growing range of products and services.",
		],
	},
	{
		id: "client-learnchess",
		title: "LearnChess",
		summary:
			"LearnChess Academy is a UK-based 24/7 live school chess training specialist. They partner with schools and parents to offer a dynamic and fun service, using the latest multi-media technology.",
		businessType: "Business-to-business",
		websiteType: "Informational & LeadGen",
		siteLabel: "learnchess.co.uk",
		siteHref: "https://learnchess.co.uk/",
		services: [
			{ label: "Rebranding", href: branding },
			{ label: "Content Writing", href: content },
			{ label: "Web Design", href: webDesign },
			{ label: "WordPress Development", href: webDev },
			{ label: "Onsite SEO", href: seo },
			{ label: "Hosting & Site Management", href: hosting },
		],
		body: [
			"LearnChess enlisted our help to reach a wider audience and generate leads. We created a new brand identity for LearnChess to increase the company's visibility and credibility. The high-quality, SEO-friendly content we created for their target audience was published on their site.",
			"We redesigned LearnChess's website to make it more user-friendly and appealing, then we optimised the site for search engines. The WordPress website we developed is easy to use and manage, and with MetaPixels hosting and managing the site, the LearnChess team can remain focused on their business.",
		],
		image: learnChess,
		imageAlt: "A screenshot of the LearnChess website",
		pullTitle: "Partnering with schools and parents.",
		pullBody:
			"Learn more about how they apply their passionate teaching techniques to children of all ages.",
		outputs: [
			"LearnChess saw a significant increase in leads. They were able to reach more potential customers and generate more sales.",
		],
	},
	{
		id: "client-ja-brooks",
		title: "JA Brooks",
		summary:
			"JA Brooks Mechanical Services delivers innovative, custom-built and efficient pipework and drainage systems for buildings and developments across a wide range of sectors.",
		businessType: "Business-to-business",
		websiteType: "Corporate & LeadGen",
		siteLabel: "ja-brooks.co.uk",
		siteHref: "https://ja-brooks.co.uk/",
		services: [
			{ label: "Rebranding", href: branding },
			{ label: "Web Design", href: webDesign },
			{ label: "Web Development", href: webDev },
			{ label: "Onsite SEO", href: seo },
			{ label: "Hosting & Site Management", href: hosting },
		],
		body: [
			"JA Brooks is a mechanical services company based in London. They have been in business for over 50 years and have a strong reputation in the industry. However, their brand and website were outdated and not reflective of their innovative approach and community ethos.",
			"After crafting their rebrand, we designed and developed a new website that focused on being functional, informative, user-friendly and easy to navigate. We also implemented onsite SEO to set the website up for better ranking opportunities.",
		],
		image: jaBrooks,
		imageAlt: "A screenshot of the JA Brooks website",
		pullTitle: "A mechanical services company with a rich history and modern ways.",
		pullBody: "Learn more about how this forward-thinking M&E company could work for you.",
		outputs: [
			"The new branding and website have exceeded expectations. They have significantly improved the company's image, giving the team a modern brand and a website that is in line with their mission.",
		],
	},
	{
		id: "client-jf-automotive",
		title: "JF Automotive",
		summary:
			"JF Automotive (JFA) is a car-tuning facility that tunes vehicles for performance gains and fuel efficiency. Their purpose-built dyno tuning facility is based in Kent.",
		businessType: "Business-to-business / Business-to-consumer",
		websiteType: "Online Store",
		siteLabel: "jfautomotive.co.uk",
		siteHref: "https://jfautomotive.co.uk/",
		services: [
			{ label: "Performance Auditing", href: audit },
			{ label: "Web Design", href: webDesign },
			{ label: "Web Development", href: webDev },
			{ label: "WordPress Development", href: webDev },
			{ label: "REST API Development", href: webDev },
		],
		body: [
			"When JFA approached us, their website was incredibly sluggish, the onsite vehicle look-up was inaccurate and slow, and some areas of the website's design were in need of improvements and updates.",
			"We conducted a website performance audit and made the necessary changes to immediately enhance user experience. We rewrote the code for many aspects of the website's logic, reducing many processes from over 30 seconds to under 3 seconds.",
			"We also built a REST API vehicle look-up service, which fetches the information from JFA's website and displays it in a widget on whitelisted third-party websites.",
		],
		image: jfAutomotive,
		imageAlt: "A screenshot of the JF Automotive website",
		pullTitle: "JFA is a leading vehicle tuning company.",
		pullBody:
			"Learn more about how JFA can help you get better performance and fuel efficiency out of your vehicle.",
		outputs: [
			"Improved critical website processes by over 1,000%.",
			"Refined shop and product pages for a much slicker user experience.",
		],
	},
	{
		id: "client-three-counties",
		title: "Three Counties",
		summary:
			"Three Counties is a double-glazing company, based in Camberley, Surrey. They've been in business since 2003 and have a strong reputation in the industry.",
		businessType: "Business-to-consumer",
		websiteType: "Corporate & LeadGen",
		siteLabel: "threecountiesltd.co.uk",
		siteHref: "https://threecountiesltd.co.uk/",
		services: [
			{ label: "Web Development", href: webDev },
			{ label: "WordPress Development", href: webDev },
			{ label: "Data Migration Development", href: webDev },
			{ label: "Web Design", href: webDesign },
			{ label: "Ongoing Onsite SEO", href: seo },
			{ label: "Content Marketing", href: content },
			{ label: "Hosting & Site Management", href: hosting },
		],
		body: [
			"Initially, we were hired to move their site and client data from one system and into two separate ones: WordPress for the site and some client data, and a CRM to manage leads, clients and orders.",
			"We created a custom export program to extract client information from their old CRM and a custom import program to import this into a new WordPress website and a separate CRM.",
			"We also rebuilt their existing website in WordPress, so that they could more efficiently manage their content and carry out ongoing onsite SEO.",
		],
		image: threeCounties,
		imageAlt: "A phone and the Three Counties website",
		pullTitle: "Three Counties for windows, doors and conservatories.",
		pullBody: "Learn more about how Three Counties can help with your glazing requirements.",
		outputs: [
			"Successfully migrated their customer and sales data, exporting from one system and importing into WordPress and a new CRM.",
			"Ongoing SEO management to keep them top of search engines for their glazing products.",
		],
	},
	{
		id: "client-which-nespresso",
		title: "Which Nespresso",
		summary:
			"Which Nespresso is a coffee machine review website that provides reviews of many coffee machines, primarily Nespresso ones, along with affiliate links to the products on Amazon stores.",
		businessType: "Business-to-consumer",
		websiteType: "Online Reviews & Affiliate Store",
		siteLabel: "whichnespresso.com",
		siteHref: "https://whichnespresso.com/",
		services: [
			{ label: "Performance Auditing", href: audit },
			{ label: "Web Design", href: webDesign },
			{ label: "Web Development", href: webDev },
			{ label: "WP Plugin Development", href: webDev },
			{ label: "API Development", href: webDev },
		],
		body: [
			"Which Nespresso needed a new easier-to-manage WordPress website, to better manage their content. They also wanted the site to include Amazon products, from Amazon stores in different countries.",
			"We built them a functional and versatile WordPress theme with a simple, modern design. For the Amazon products integration, we built a custom WordPress plugin that uses the Amazon product API to dynamically fetch products based on the geographic location of the site visitor.",
			"The plugin can pull products by ASINs or keywords, and display comparison tables, product cards, buttons and rows. We also built a short-term product cache to reduce calls to the Amazon API.",
		],
		image: whichNespresso,
		imageAlt: "A screenshot of the Which Nespresso website",
		pullTitle: "Coffee machine reviews, comparisons and guides.",
		pullBody:
			"If you're looking to purchase your next coffee machine, Which Nespresso is the place to start.",
		outputs: [
			"An easy-to-manage website that supports pulling in Amazon products from multiple Amazon stores, dynamically, to show up-to-date pricing and availability.",
		],
	},
];
