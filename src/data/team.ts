export type TeamMember = {
	slug: string;
	name: string;
	role: string;
	bio: string;
	/** When true, omitted from the About team grid (entry kept for later). */
	hidden?: boolean;
};

/**
 * About page team, in the order published on /all-about-metapixels/.
 * No individual headshots were on the site. Cards use the template placeholder.
 * "Pene" appears only in the group photo filename and alt text, with no role or bio.
 */
export const team: TeamMember[] = [
	{
		slug: "merv",
		name: "Merv",
		role: "MD & Growth Strategist",
		bio: "Merv is detail-oriented and client-focused with over 20 years of business and marketing experience, deep SEO and PPC expertise, and a degree in computer science. He takes time to understand each client, then shapes practical strategies for real growth.",
	},
	{
		slug: "darko",
		name: "Darko",
		role: "Head of Development",
		bio: "Darko is a PHP, Laravel and WordPress developer with over a decade of experience building robust websites and web applications. Proactive, responsive and practical, he resolves issues quickly and creates reliable, user-friendly solutions that simply work.",
	},
	{
		slug: "dafina",
		name: "Dafina",
		role: "Head of Content",
		bio: "Dafi leads content strategy with a strong marketing background and impressive organisational skills. She keeps projects moving, brings structure to campaigns and turns ideas into clear, purposeful content. She's often sharing behind-the-scenes team moments, too.",
	},
	{
		slug: "simona",
		name: "Simona",
		role: "Head of Creative",
		bio: "Simona leads creative output. She's process driven and specialises in branding, graphic design and UI for websites and webapps. She uses Figma and Adobe tools to create polished design across social assets, iconography, brochures and full brand systems.",
	},
	{
		slug: "pavel",
		name: "Pavel",
		role: "Head of Social Media",
		bio: "Pavel manages and grows social media accounts with a clear, strategic approach. He helps businesses connect with their audience through thoughtful organic content, consistent planning and well-executed paid campaigns across the right channels.",
	},
	{
		slug: "ben",
		name: "Ben",
		role: "Filmography Partner",
		bio: "Ben creates film, photography and drone footage with a storyteller's eye. He's versatile, thoughtful and easy to work with. He asks key questions and listens carefully to what each client needs, then captures visuals that feel natural, useful and on-brand.",
	},
	{
		slug: "faye",
		name: "Faye",
		role: "Content Associate",
		bio: "Faye is a content writer and editor with over eight years of experience across web and print. She helps businesses tell their stories clearly and engagingly, shaping content around audience, tone and purpose so every message feels considered and useful.",
	},
	{
		slug: "jake",
		name: "Jake",
		role: "Designer & Illustrator",
		bio: "Jake is a graphic designer and illustrator with over a decade of experience in branding and design for web and print. With a precise eye and strong Adobe expertise, he creates visually engaging work that bring ideas to life with clarity, character and impact.",
	},
	{
		slug: "goran",
		name: "Goran",
		role: "Branding & Design",
		bio: "Goran lives and breathes branding, possibly Pantone codes too. He focuses on creating distinctive, memorable brand identities and passionately explores how AI can enhance image generation, visual experimentation and the wider creative process.",
	},
];
