/**
 * Resolve options for @vuepress/plugin-debug
 */
export const resolveDebugPluginOptions = (options, app) => {
  if (
    (options.themePlugins ? options.themePlugins.debug : undefined) !==
    undefined
  ) {
    return options.themePlugins.debug;
  }

  return app.env.isDev;
};
