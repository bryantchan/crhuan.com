module.exports = {
	siteMetadata: {
		description: "Personal page of Ronghuan Chen",
		locale: "en",
		title: "Ronghuan Chen",
	},
	plugins: [
		{
			resolve: "@wkocjan/gatsby-theme-intro",
			options: {
				basePath: "/",
				contentPath: "content/",
				showThemeLogo: false,
				theme: "classic",
			},
		},
	],
};
