/**
 * Canonical org identity for JSON-LD / NAP consistency.
 * Address matches the Google Business Profile (UK only).
 */
export const organization = {
	name: "MetaPixels",
	legalName: "MetaPixels Ltd",
	companyNumber: "14338633",
	email: "info@metapixels.co.uk",
	phone: "+44 333 360 8302",
	phoneHref: "tel:+443333608302",
	/** Google Business Profile — Innovation Centre, Maidstone. */
	address: {
		streetAddress: "Innovation Centre, Gidds Pond Way",
		addressLocality: "Maidstone",
		addressRegion: "Kent",
		postalCode: "ME14 5FY",
		addressCountry: "GB",
	},
	/**
	 * Official profiles from the live Organization schema.
	 */
	sameAs: [
		"https://www.facebook.com/MetaPixelsLtd",
		"https://twitter.com/MetaPixelsMPX",
		"https://www.linkedin.com/company/metapixelsmpx",
		"https://www.instagram.com/metapixelsmpx/",
	],
} as const;
