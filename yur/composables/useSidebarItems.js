import { computed, inject } from "vue";
import { useRoute } from "vue-router";
import {
  usePageData,
  usePageFrontmatter,
  useThemeLocaleData,
} from "@vuepress/client";
import {
  isArray,
  isPlainObject,
  isString,
  resolveLocalePath,
} from "@vuepress/shared";
import { useNavLink } from "./useNavLink";

export const sidebarItemsSymbol = Symbol("sidebarItems");

/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};

/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export const resolveSidebarItems = () => {
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();

  // get sidebar config from frontmatter > themeConfig
  const sidebarConfig = computed(
    () => frontmatter.value.sidebar || themeLocale.value.sidebar
  );

  // resolve sidebar items according to the config
  return computed(() => {
    if (frontmatter.value.home === true || sidebarConfig.value === false) {
      return [];
    }

    if (sidebarConfig.value === "auto") {
      return resolveAutoSidebarItems();
    }

    if (isArray(sidebarConfig.value)) {
      return resolveArraySidebarItems(sidebarConfig.value);
    }

    if (isPlainObject(sidebarConfig.value)) {
      return resolveMultiSidebarItems(sidebarConfig.value);
    }

    return [];
  });
};

/**
 * Util to transform page header to sidebar item
 */
export const headerToSidebarItem = (header) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: header.children.map(headerToSidebarItem),
});

/**
 * Resolve sidebar items if the config is `auto`
 */
export const resolveAutoSidebarItems = () => {
  const page = usePageData();

  return [
    {
      isGroup: true,
      text: page.value.title,
      children: page.value.headers.map(headerToSidebarItem),
    },
  ];
};

/**
 * Resolve sidebar items if the config is an array
 */
export const resolveArraySidebarItems = (sidebarConfig) => {
  const route = useRoute();
  const page = usePageData();

  return sidebarConfig.map((item) => {
    if (isString(item)) {
      return useNavLink(item);
    }
    if (!item.isGroup) {
      return item;
    }

    return {
      ...item,
      children: item.children.map((subItem) => {
        let childItem;
        if (isString(subItem)) {
          childItem = useNavLink(subItem);
        } else {
          childItem = subItem;
        }

        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        if (childItem.link === route.path && childItem.children === undefined) {
          return {
            ...childItem,
            children: page.value.headers.map(headerToSidebarItem),
          };
        }

        return childItem;
      }),
    };
  });
};

/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export const resolveMultiSidebarItems = (sidebarConfig) => {
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = sidebarConfig[sidebarPath]
    ? sidebarConfig[sidebarPath]
    : [];

  return resolveArraySidebarItems(matchedSidebarConfig);
};
