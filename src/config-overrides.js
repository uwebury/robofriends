const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = function override(config, env) {
  if (env === "production") {
    config.plugins = (config.plugins || []).concat([
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: "./src/service-worker.js",
        swDest: "service-worker.js",
      }),
    ]);
  }

  return config;
};
