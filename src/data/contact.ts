export const contactPanel = {
	title: "Our {offices}",
	intro:
		"Start your journey towards accelerated business growth here. Simply fill in this form and one of our team will be in touch within 24 hours.",
	details: [
		{
			icon: "email" as const,
			label: "Email",
			value: "info@metapixels.co.uk",
			href: "mailto:info@metapixels.co.uk",
		},
		{
			icon: "phone" as const,
			label: "Phone",
			value: "+44 333 360 8302",
			href: "tel:+443333608302",
		},
		{
			icon: "location" as const,
			label: "UK Offices",
			value: ["Maidstone, Kent", "UK"],
		},
		{
			icon: "location" as const,
			label: "European Offices",
			value: ["Skopje", "NMK"],
		},
	],
};

export const contactForm = {
	title: "Make an {enquiry}",
	intro: "Simply fill in this form and one of our team will be in touch within 24 hours.",
	services: [] as string[],
	privacyHref: "/privacy-policy",
	submitLabel: "Submit",
	messageLabel: "How can we help?",
	messageRequired: false,
	successTitle: "Thank you for contacting us.",
	successBody: "One of the team will be in touch shortly.",
};

export const auditForm = {
	title: "Get your free {audit}",
	intro: "Simply fill in the form and get your free audit! Spam and bots will be automatically deleted.",
	services: [] as string[],
	privacyHref: "/privacy-policy",
	submitLabel: "Submit",
	messageLabel: "Provide any information that can help us with the audit",
	messageRequired: false,
	successTitle: "Thank you.",
	successBody:
		"Your request for a website audit has been sent. One of the team will get back to you within one working day. Please call us on 01622 371188 if you have any questions.",
};
