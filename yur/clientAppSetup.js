import { provide } from "vue";
import { resolveSidebarItems, sidebarItemsSymbol } from "./composables";

const clientAppSetup = () => {
  // we need to access sidebar items in multiple components
  // so we make it global computed
  const sidebarItems = resolveSidebarItems();
  provide(sidebarItemsSymbol, sidebarItems);
};

export default clientAppSetup;
