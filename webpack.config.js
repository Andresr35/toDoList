const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // 2. Inject styles into DOM
          "css-loader", // 1. Turns css into commonjs
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "fonts",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title:'To Do List',
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  //   optimization:{
  //     runtimeChunk:'single',
  //   },
};
