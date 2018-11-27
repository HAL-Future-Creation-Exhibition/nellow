const webpack = require("webpack");
const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  target: 'web',
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  entry: path.resolve(__dirname, "./src/client.tsx"),
  output: {
    path: path.resolve(__dirname, "./public/js"),
    filename: "bundle.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          compilerOptions: {
            target: "es5"
          }
        }
      }
    ]
  },
  stats: "minimal",
  plugins: [
    new workboxPlugin({
      globDirectory: __dirname + "/public",
      globPatterns: [
        "js/**/*.js",
        "css/**/*.css"
      ],
      runtimeCaching: [
        {
          urlPattern: /https:\/\/s3-us-west-2.amazonaws.com\/dinner-match\/nellow\/.+\.(png|gif|jpg|jpeg|svg)$/,
          handler: 'cacheFirst',
          options: {
            cacheExpiration: {
              maxAgeSeconds: 60 * 5,
              maxEntries: 10
            }
          }
        }
      ],
      swDest: dist + '/js/sw.js',
    }),
    new CleanPlugin([
      "publis/js/*.js"
    ], {
      verbose: true
    }),
    new webpack.DefinePlugin({
      "global.GENTLY": false,
      'process.env.BROWSER_ENV': JSON.stringify(true)
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
