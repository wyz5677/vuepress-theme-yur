export default function Mixin(Vue) {
  Vue.mixin({
    computed: {
      $lang() {
        // ssr
        return this.$themeConfig.lang || "en";
      },
      $title() {
        // ssr
        return this.$l("title");
      },
      $description() {
        // ssr
        return this.$l("description");
      }
    },
    methods: {}
  });
}
