<script lang="ts">
import BlogPostVue from "~~/components/BlogPost.vue";
export default {
  provide(): object {
    return {
      $mdxComponents: {
        wrapper: BlogPostVue,
        h1: "h2",
      },
    };
  },
};
</script>

<template>
  foo
  <slot />
</template>
