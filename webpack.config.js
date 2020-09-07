const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.ts"],
  },
  mode: "development",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
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
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd", // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    library: "lodash-mock",
  },
  plugins: [new HtmlWebpackPlugin({}), new CleanWebpackPlugin()],
};
