import type { ClientAppEnhance } from "@vuepress/client";
import Badge from "./components/global/Badge";

import "./styles/index.less";

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.component("Badge", Badge);
};

export default clientAppEnhance;
