<template>
  <div class="row"><slot></slot></div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.row + .row {
  margin-top: 1rem;
}
</style>
