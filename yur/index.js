const path = require("path");

module.exports = (options, ctx) => {
  const { themeConfig, sourceDir } = ctx;
  const { cdn, hostname } = themeConfig;

  const blog = {
    permalink: "/:regular",
    directories: [],
    frontmatters: [
      {
        id: "tags",
        keys: ["tags"],
        path: "/tag/",
        layout: "Tags",
        scopeLayout: "Tag"
      },
      {
        id: "categories",
        keys: ["categories"],
        path: "/categories/",
        layout: "Categories",
        scopeLayout: "Category"
      },
      {
        id: "timeline",
        keys: ["timeline"],
        path: "/timeline/",
        layout: "Timeline",
        scopeLayout: "Timeline"
      }
    ]
  };
  if (hostname) {
    blog.sitemap = {
      hostname
    };
  }

  return {
    name: "vuepress-theme-yur",
    enhanceAppFiles: [path.resolve(__dirname, "enhanceApp.js")],
    alias() {
      return {
        "@us": `${sourceDir}${path.sep}.vuepress${path.sep}styles`
      };
    },
    chainWebpack(config) {
      config.module
        .rule("less")
        .oneOf("normal")
        .use("less-loader")
        .options({ javascriptEnabled: true })
        .end()
        .end()
        .oneOf("modules")
        .use("less-loader")
        .options({ javascriptEnabled: true });

      config.module
        .rule("js")
        .test(/\.js$/)
        .use("babel-loader")
        .loader("babel-loader")
        .options({
          babelrc: false,
          configFile: false,
          presets: [require.resolve("@vue/babel-preset-jsx")]
        });

      if (typeof cdn === "string" && process.env.NODE_ENV === "production") {
        config.output.publicPath(cdn);
      }
    },
    plugins: [
      ["@vuepress/blog", blog],
      [
        "container",
        {
          type: "primary",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "primaryLong",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "success",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "successLong",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "tip",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "tipLong",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "warning",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "warningLong",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "error",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "errorLong",
          defaultTitle: ""
        }
      ]
    ],
    extendPageData($page) {
      // const { _filePath, _computed, _content, _strippedContent, key, frontmatter, regularPath, path } = $page
      const { _content, _strippedContent } = $page;

      if (_strippedContent && _content) {
        $page.wordCount = _content.length;
      }
    }
  };
};
