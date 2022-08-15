const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: `./src/index.js`,
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js",
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						// translates CSS into CommonJS modules
						loader: "css-loader",
					},
					{
						// Run postcss actions
						loader: "postcss-loader",
						options: {
							// `postcssOptions` is needed for postcss 8.x;
							// if you use postcss 7.x skip the key
							postcssOptions: {
								// postcss plugins, can be exported to postcss.config.js
								plugins: function () {
									return [require("autoprefixer")];
								},
							},
						},
					},
					{
						// compiles Sass to CSS
						loader: "sass-loader",
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css",
		}),
		// html-webpack-pluginの設定
		new HtmlWebpackPlugin({
			// 対象のテンプレートを設定
			template: `${__dirname}/public/index.html`,
			// 書き出し先
			filename: `${__dirname}/dist/index.html`,
			// ビルドしたjsファイルを読み込む場所。デフォルトはhead
			inject: "body",
		}),
	],
	// source-map方式でないと、CSSの元ソースが追跡できないため
	devtool: "source-map",
};
