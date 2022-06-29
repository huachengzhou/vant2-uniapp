"use strict";
const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
const name = "vant-uniapp";
 
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
        "@i": resolve("src/api"),
        "@c": resolve("src/components"),
        "@a": resolve("src/assets"),
        "@s": resolve("src/styles"),
        "@u": resolve("src/utils"),
        "@v": resolve("src/pages"),
      },
    },
  },
};