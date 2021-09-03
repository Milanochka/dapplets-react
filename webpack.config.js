const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: '/(node_modules|bower_components)/',
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    })
  ]
};