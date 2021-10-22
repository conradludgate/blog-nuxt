<script lang="ts">
export default markRaw(defineComponent({
  props: {
    title: String,
  }
}));
</script>

<template>
  <p>{{ title }}</p>
  <slot />
</template>
