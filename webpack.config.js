const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: "./src/electron.js", //should be react.tsx
    target: "electron-renderer",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: __dirname + "/dist",
      filename: "electron.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  },
];
