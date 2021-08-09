const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./src/index.js",
    "./src/controllers/html-templates/animateHTML.js",
    "./src/services/deleteConversation.js",
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    fallback: {
      util: false,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/views/index.html",
    }),
  ],
};
