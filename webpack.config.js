const pkg = require("./package.json")
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
    path: path.resolve(__dirname, "./public/"),
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
    new workboxPlugin.GenerateSW({
      cacheId: `nellow-${pkg.version}`,
      clientsClaim: true,
      skipWaiting: false,
      swDest: __dirname + "/public/sw.js",
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://cloud.google.com"),
          handler: "cacheFirst",
          options: {
            cacheName: "google-cloud-image",
            expiration: {
              maxAgeSeconds: 60 * 5
            }
          }
        },
        {
          urlPattern: new RegExp("https://use.fontawesome.com"),
          handler: "cacheFirst",
          options: {
            cacheName: "font-awesome",
            expiration: {
              maxAgeSeconds: 60 * 5
            }
          }
        },
        {
          urlPattern: /icon-.*/,
          handler: "cacheFirst",
          options: {
            cacheName: "nellow-icons",
            expiration: {
              maxAgeSeconds: 60 * 5
            }
          }
        },
        {
          urlPattern: /\.css$/,
          handler: "cacheFirst",
          options: {
            cacheName: "css-cache",
            expiration: {
              maxAgeSeconds: 60 * 5
            }
          }
        }
      ]
    }),
    new CleanPlugin([
      "public/precache-manifest.*",
      "public/sw.js",
      "public/bundle.js"
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
