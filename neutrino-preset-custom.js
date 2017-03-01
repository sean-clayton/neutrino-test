const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({ config }) => {
  const rule = config.module.rule("css");

  ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
    .map(({ loader, options }, i) =>
      rule.loader(`extract-css-${i}`, loader, options));

  config.plugin("extract-css").use(ExtractTextPlugin, "[name].css");
};
