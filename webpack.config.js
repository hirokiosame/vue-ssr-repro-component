const WebpackConfig = module.exports = {

	context: __dirname + '/src',

	target: 'node',

	entry: {
		'TestComponent': './TestComponent.vue',
	},

	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
		libraryTarget: 'commonjs2',
	},

	module: {
		rules: [
			{
				test: /\.vue$/i,
				loader: 'vue-loader',
			},
		],
	},
};
