const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const mode = process.env.NODE_ENV === "prod" ? "production" : "development";
module.exports = {
  entry: {
    app: ["./src/index.ts"],
  },
  mode,
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "index.js",
    globalObject: "this", // 兼容node和浏览器运行，避免window is not undefined情况
    path: path.resolve(__dirname, "lib"),
    libraryTarget: "umd", // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    library: "zyj-utils",
  },
};
