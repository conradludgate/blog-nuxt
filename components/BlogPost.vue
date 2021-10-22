<script lang="ts">
import { PropType } from "@vue/runtime-core";
import humanDate from "~~/libs/date";

export default markRaw(defineComponent({
  props: {
    title: String,
    date: String,
    tags: Array as PropType<string[]>,
  },
  data() {
    return {
      humanDate: humanDate(this.date!)
    }
  }
}));
</script>

<template>
  <div class="post">
    <h1>{{ title }}</h1>
    <time>{{ humanDate }}</time>
    <slot />
    <footer>
      <NuxtLink
        v-for="tag in tags"
        :key="tag"
        :to="`/tags/${tag}`"
      >
        #{{tag}}
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.post{
	max-width: 80ch;
	width: 100%;
}

.post time {
	color: #ababab;
}

footer {
	margin-top: 1.5em;
	border-top: 1px solid #d2d2d2;
	padding: 1.5em 0;
}

footer > a {
	margin-left: 0.75em;
	display: inline;
	color: #ababab;
	text-decoration: none;
}

footer > a:hover {
	color: #909090;
}
</style>
