import type { ClientAppEnhance } from "@vuepress/client";
import Badge from "./components/global/Badge.vue";
import CodeGroup from "./components/global/CodeGroup.vue";
import CodeGroupItem from "./components/global/CodeGroupItem.vue";
import OutboundLink from "./components/global/OutboundLink.vue";

import "./styles/index.less";

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.component("Badge", Badge);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);

  // unregister the built-in `<OutboundLink>` to avoid warning
  delete app._context.components.OutboundLink;
  // override the built-in `<OutboundLink>`
  app.component("OutboundLink", OutboundLink);
};

export default clientAppEnhance;
