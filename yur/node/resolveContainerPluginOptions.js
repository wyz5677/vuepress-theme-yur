/**
 * Resolve options for @vuepress/plugin-container
 *
 * For custom blocks default title
 */
export const resolveContainerPluginOptions = (options, type) => {
  if (
    ((options.themePlugins ? options.themePlugins.container : undefined)
      ? (options.themePlugins ? options.themePlugins.container : undefined)[
          type
        ]
      : undefined) === false
  ) {
    return false;
  }

  const locales = Object.entries(options.locales || {}).reduce(
    (result, [key, value]) => {
      const defaultInfo = value ? value[type] : undefined;
      if (defaultInfo) {
        result[key] = {
          defaultInfo,
        };
      }
      return result;
    },
    {}
  );

  return {
    type,
    locales,
  };
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For details block
 */
export const resolveContainerPluginOptionsForDetails = (options) => {
  if (
    ((options.themePlugins ? options.themePlugins.container : undefined)
      ? (options.themePlugins ? options.themePlugins.container : undefined)
          .details
      : undefined) === false
  ) {
    return false;
  }

  return {
    type: "details",
    before: (info) =>
      `<details class="custom-block details">${
        info ? `<summary>${info}</summary>` : ""
      }\n`,
    after: () => "</details>\n",
  };
};
