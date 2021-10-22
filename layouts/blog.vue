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
  <header>
    <NuxtLink to="/">Conrad Ludgate</NuxtLink>
  </header>
  <div class="blog">
    <slot />
  </div>
</template>

<style scoped>
.blog {
	margin: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
}

header {
	height: 5em;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em;
}

header > a {
	font-family: noto serif, segoe ui, helvetica neue, Helvetica, Roboto, FreeSans, serif;
	font-size: 1.5em;
	text-decoration: none;
	margin-top: 0.75em;
}
</style>
