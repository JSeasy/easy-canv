const path = require("path");
module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "easy-canvas.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ["ts-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/, //排除 node_modules 目录
      },
    ],
  },
};
