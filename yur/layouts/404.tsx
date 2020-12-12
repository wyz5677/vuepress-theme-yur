import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { useRouteLocale, useThemeLocaleData } from "@vuepress/client";
import type { DefaultThemeOptions } from "../types";

export default defineComponent({
  name: "404",
  setup() {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData<DefaultThemeOptions>();
    const messages = themeLocale.value.notFound ?? ["Not Found"];
    const getMsg = (): string =>
      messages[Math.floor(Math.random() * messages.length)];
    const homeLink = themeLocale.value.home ?? routeLocale.value;
    const homeText = themeLocale.value.backToHome ?? "Back to home";
    return {
      getMsg,
      homeLink,
      homeText,
    };
  },
  render() {
    return (
      <div class="theme-container">
        <div class="theme-default-content">
          <h1>404</h1>
          <blockquote>{this.getMsg()}</blockquote>
          <RouterLink to={this.homeLink}>{this.homeText}</RouterLink>
        </div>
      </div>
    );
  },
});
