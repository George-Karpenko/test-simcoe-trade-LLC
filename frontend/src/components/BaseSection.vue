<script setup lang="ts">
import BaseTitle from "@/components/BaseTitle.vue";

defineProps({
  levelTitle: {
    type: Number,
    default: 1,
  },
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <section>
    <BaseTitle :level="1" v-if="$slots.title">
      <slot name="title"></slot>
    </BaseTitle>
    <div class="content" v-bind="$attrs">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  overflow: auto;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 20px;
}

.content {
  margin: 1rem 2rem;
}
</style>
