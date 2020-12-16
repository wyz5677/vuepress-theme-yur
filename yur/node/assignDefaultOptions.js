const defaultLocaleData = {
  // navbar
  navbar: [],
  logo: null,
  repo: null,
  repoLabel: "",
  selectLanguageText: "Languages",
  selectLanguageAriaLabel: "Select language",

  // sidebar
  sidebar: "auto",

  // page meta
  editLink: true,
  editLinkText: "Edit this page",
  lastUpdated: true,
  lastUpdatedText: "Last Updated",
  contributors: true,
  contributorsText: "Contributors",

  // custom block
  tip: "TIP",
  warning: "WARNING",
  danger: "WARNING",

  // 404 page messages
  notFound: [
    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`,
  ],
  backToHome: "Take me home",

  // `<OutboundLink>` sr-only
  openInNewWindow: "open in new window",
};

/**
 * Assign default options to `themeConfig`
 */
export const assignDefaultOptions = (options) => {
  Object.assign(options, {
    ...defaultLocaleData,
    ...options,
  });
};
