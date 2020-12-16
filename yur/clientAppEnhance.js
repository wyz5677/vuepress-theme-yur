import Badge from "./components/global/Badge";

import "./styles/index.less";

const clientAppEnhance = ({ app }) => {
  app.component("Badge", Badge);
};

export default clientAppEnhance;
