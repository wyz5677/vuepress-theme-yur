const path = require("path");

module.exports = {
  base: "/",

  evergreen: process.env.NODE_ENV !== "production",

  head: [["link", { rel: "icon", href: `/logo64.png` }]],

  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },

  theme: path.resolve(__dirname, "../../yur"),

  themeConfig: {
    logo: "/logo64.png",
  },
};
