/**
 * Canonical org identity for JSON-LD / NAP consistency.
 * Visible contact page details win where they disagree with JSON-LD.
 * See the pull request for the email, phone, and address conflict.
 */
export const organization = {
	name: "MetaPixels",
	legalName: "MetaPixels Ltd",
	/** Not published on the extracted pages. */
	companyNumber: "",
	email: "info@metapixels.co.uk",
	phone: "+44 333 360 8302",
	phoneHref: "tel:+443333608302",
	address: {
		addressLocality: "Maidstone",
		addressRegion: "Kent",
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
