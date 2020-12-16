import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { useRouteLocale, useThemeLocaleData } from "@vuepress/client";

export default defineComponent({
  name: "404",
  setup() {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = themeLocale.value.notFound
      ? themeLocale.value.notFound
      : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = themeLocale.value.home
      ? themeLocale.value.home
      : routeLocale.value;
    const homeText = themeLocale.value.backToHome
      ? themeLocale.value.backToHome
      : "Back to home";
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
