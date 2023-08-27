const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "https://www.freetogame.com",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "/api",
  //       },
  //     },
  //   },
  // },
});
