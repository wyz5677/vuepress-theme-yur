import type { Theme } from "@vuepress/core";
import { path } from "@vuepress/utils";
import {
  assignDefaultOptions,
  resolveActiveHeaderLinksPluginOptions,
  resolveContainerPluginOptions,
  resolveContainerPluginOptionsForDetails,
  resolveDebugPluginOptions,
  resolveGitPluginOptions,
} from "./node";
import type { DefaultThemeOptions } from "./types";

export * from "./node";
export * from "./types";

export const defaultTheme: Theme<DefaultThemeOptions> = (options, app, ctx) => {
  assignDefaultOptions(options);

  const { themeConfig, sourceDir } = ctx;
  const { cdn } = themeConfig;

  return {
    name: "vuepress-theme-yur",

    layouts: path.resolve(__dirname, "./layouts"),

    clientAppEnhanceFiles: path.resolve(__dirname, "./clientAppEnhance.js"),

    clientAppSetupFiles: path.resolve(__dirname, "./clientAppSetup.js"),

    alias() {
      return {
        "@us": `${sourceDir}${path.sep}.vuepress${path.sep}styles`,
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
          presets: [require.resolve("@vue/babel-preset-jsx")],
        });

      if (typeof cdn === "string" && process.env.NODE_ENV === "production") {
        config.output.publicPath(cdn);
      }
    },

    // use the relative file path to generate edit link
    extendsPageData: ({ filePathRelative }) => ({ filePathRelative }),

    plugins: [
      [
        "@vuepress/active-header-links",
        resolveActiveHeaderLinksPluginOptions(options),
      ],
      ["@vuepress/container", resolveContainerPluginOptions(options, "tip")],
      [
        "@vuepress/container",
        resolveContainerPluginOptions(options, "warning"),
      ],
      ["@vuepress/container", resolveContainerPluginOptions(options, "danger")],
      ["@vuepress/container", resolveContainerPluginOptionsForDetails(options)],
      ["@vuepress/debug", resolveDebugPluginOptions(options, app)],
      ["@vuepress/git", resolveGitPluginOptions(options)],
    ],
  };
};

export default defaultTheme;
