/**
 * Resolve options for @vuepress/plugin-git
 */
export const resolveGitPluginOptions = (options) => {
  if ((options.themePlugins ? options.themePlugins.git : undefined) === false) {
    return false;
  }

  const enableUpdatedTime = options.lastUpdated !== false;
  const enableContributors = options.contributors !== false;

  if (!enableUpdatedTime && !enableContributors) {
    return false;
  }

  return {
    updatedTime: enableUpdatedTime,
    contributors: enableContributors,
  };
};
