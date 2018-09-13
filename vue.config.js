const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
	webpackDashboard = require('webpack-dashboard/plugin');

// vue.config.js
module.exports = {
	configureWebpack: {
		plugins: [
			new webpackDashboard(), // Adding webpack-dashboard plugin. Add 
			new BundleAnalyzerPlugin({
				openAnalyzer: false
			})
		]
	}
}