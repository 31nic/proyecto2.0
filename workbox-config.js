module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,webp,png,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};