<template>
  <div class="button-toolbar">
    <slot></slot>
  </div>
</template>

<style scoped>
.button-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
