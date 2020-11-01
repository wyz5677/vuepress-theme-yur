<template>
  <common>
    <home v-if="$frontmatter.home" />
    <page v-else />
  </common>
</template>

<script>
import common from "@theme/views/common";
import home from "@theme/views/home";
import page from "@theme/views/page";

export default {
  components: { common, home, page }
};
</script>
