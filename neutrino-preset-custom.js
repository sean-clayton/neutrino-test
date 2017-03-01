const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({ config }) => {
  const rule = config.module.rule("css");

  ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
    .map(({ loader, options }, index) => rule.loader(index, loader, options));

  config.plugin("extract-css").use(ExtractTextPlugin, "[name].css");
};
