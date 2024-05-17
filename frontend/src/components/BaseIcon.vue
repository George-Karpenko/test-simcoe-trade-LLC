<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    default: "box",
  },
  width: {
    type: [Number, String],
    default: 18,
  },
  height: {
    type: [Number, String],
    default: 18,
  },
  iconColor: {
    type: String,
    default: "currentColor",
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    :fill="iconColor"
    viewBox="0 0 24 24"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <slot></slot>
  </svg>
</template>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
