import type { LocaleData, ThemeConfig } from "@vuepress/core";
import type { NavbarConfig, SidebarConfig } from "./nav";

export interface DefaultThemeOptions
  extends ThemeConfig<DefaultThemeLocaleData> {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: {
    /**
     * Enable @vuepress/plugin-active-header-links or not
     */
    activeHeaderLinks?: boolean;

    /**
     * Enable @vuepress/plugin-debug or not
     */
    debug?: boolean;

    /**
     * Enable @vuepress/plugin-container or not
     */
    container?: {
      tip?: boolean;
      warning?: boolean;
      danger?: boolean;
      details?: boolean;
    };

    /**
     * Enable @vuepress/plugin-git or not
     */
    git?: boolean;
  };
}

export interface DefaultThemeLocaleData extends LocaleData {
  /**
   * Home path of current locale
   *
   * Used as the link of back-to-home and navbar logo
   */
  home?: string;

  /**
   * Navbar config
   *
   * Set to `false` to disable navbar in current locale
   */
  navbar?: false | NavbarConfig;

  /**
   * Navbar logo config
   *
   * Logo to display in navbar
   */
  logo?: null | string;

  /**
   * Navbar repository config
   *
   * Used for the repository link of navbar
   */
  repo?: null | string;

  /**
   * Navbar repository config
   *
   * Used for the repository text of navbar
   */
  repoLabel?: string;

  /**
   * Navbar language selection config
   *
   * Text of the language selection dropdown
   */
  selectLanguageText?: string;

  /**
   * Navbar language selection config
   *
   * Aria label of of the language selection dropdown
   */
  selectLanguageAriaLabel?: string;

  /**
   * Navbar language selection config
   *
   * Language name of current locale
   *
   * Displayed inside the language selection dropdown
   */
  selectLanguageName?: string;

  /**
   * Sidebar config
   *
   * Set to `false` to disable sidebar in current locale
   */
  sidebar?: "auto" | false | SidebarConfig;

  /**
   * Page meta - edit lint config
   *
   * Whether to show "Edit this page" or not
   */
  editLink?: boolean;

  /**
   * Page meta - edit lint config
   *
   * The text to replace the default "Edit this page"
   */
  editLinkText?: string;

  /**
   * Page meta - edit lint config
   *
   * Pattern of edit link
   *
   * @example ':repo/edit/:branch/:path'
   */
  editLinkPattern?: string;

  /**
   * Page meta - edit lint config
   *
   * Use `repo` config by default
   *
   * Set this config if your docs is placed in a different repo
   */
  docsRepo?: string;

  /**
   * Page meta - edit lint config
   *
   * Set this config if the branch of your docs is not 'master'
   */
  docsBranch?: string;

  /**
   * Page meta - edit lint config
   *
   * Set this config if your docs is placed in sub dir of your `docsRepo`
   */
  docsDir?: string;

  /**
   * Page meta - last updated config
   *
   * Whether to show "Last Updated" or not
   */
  lastUpdated?: boolean;

  /**
   * Page meta - last updated config
   *
   * The text to replace the default "Last Updated"
   */
  lastUpdatedText?: string;

  /**
   * Page meta - contributors config
   *
   * Whether to show "Contributors" or not
   */
  contributors?: boolean;

  /**
   * Page meta - contributors config
   *
   * The text to replace the default "Contributors"
   */
  contributorsText?: string;

  /**
   * Custom block config
   *
   * Default title of TIP custom block
   */
  tip?: string;

  /**
   * Custom block config
   *
   * Default title of WARNING custom block
   */
  warning?: string;

  /**
   * Custom block config
   *
   * Default title of DANGER custom block
   */
  danger?: string;

  /**
   * 404 page config
   *
   * Not Found messages for 404 page
   */
  notFound?: string[];

  /**
   * 404 page config
   *
   * Text of back-to-home link in 404 page
   */
  backToHome?: string;

  /**
   * sr-only message in `<OutboundLink>`
   */
  openInNewWindow?: string;
}
