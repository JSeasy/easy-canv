const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/test.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "easy-canv.js",
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/, //排除 node_modules 目录
      },
      {
        test: /\.ts?$/,
        use: ["ts-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
