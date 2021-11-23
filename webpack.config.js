const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./public/scripts/index.js",
    "./public/scripts/controllers/html-templates/animateHTML.js",
    "./public/scripts/controllers/html-templates/generateEmptyTemplate.js",
    "./public/scripts/controllers/html-templates/generateHTMLController.js",
    "./public/scripts/controllers/html-templates/listHTMLElements.js",
    "./public/scripts/controllers/sentencesControllers/greetingsController.js",
    "./public/scripts/controllers/sentencesControllers/judgeTheMessageByTheSentence.js",
    "./public/scripts/controllers/sentencesControllers/readText.js",
    "./public/scripts/controllers/sentencesControllers/verifyIfThereIsAKeyValue.js",
    "./public/scripts/controllers/generateTimeController.js",
    "./public/scripts/controllers/weatherController.js",
    "./public/scripts/services/deleteConversation.js",
    "./public/scripts/utils/conversationData.js",
    "./public/scripts/utils/messageConfiguration.js",
    "./public/scripts/utils/sentences.js",
    "./public/scripts/utils/voiceConfiguration.js",
    "./public/scripts/utils/weatherConfiguration.js",
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
      filename: "index.ejs",
      template: "src/views/index.ejs",
    }),
  ].concat(multipleHtmlPlugins),
  node: {
    __dirname: false,
  },
  target: "node",
};
