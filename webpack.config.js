const path = require("path");
module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: path.resolve("public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
