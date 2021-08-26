const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./src/index.js",
    "./src/controllers/html-templates/animateHTML.js",
    "./src/controllers/html-templates/generateEmptyTemplate.js",
    "./src/controllers/html-templates/generateHTMLController.js",
    "./src/controllers/html-templates/listHTMLElements.js",
    "./src/controllers/sentencesControllers/greetingsController.js",
    "./src/controllers/sentencesControllers/judgeTheMessageByTheSentence.js",
    "./src/controllers/sentencesControllers/readText.js",
    "./src/controllers/sentencesControllers/verifyIfThereIsAKeyValue.js",
    "./src/controllers/generateTimeController.js",
    "./src/controllers/weatherController.js",
    "./src/services/deleteConversation.js",
    "./src/services/saveConversation.js",
    "./src/utils/conversationData.js",
    "./src/utils/messageConfiguration.js",
    "./src/utils/sentences.js",
    "./src/utils/voiceConfiguration.js",
    "./src/utils/weatherConfiguration.js",
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
