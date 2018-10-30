module.exports = {
  entry: "./src/index.js",
	output: {
		path: __dirname + "/extension",
		filename: "bundle.js"
	},
  devServer: {
        contentBase: __dirname + "/extension/",
        inline: true,
        host: '0.0.0.0',
        port: 3000,
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
