<script setup lang="ts">
import { Item, Field } from "@/@types";
import { PropType } from "vue";

defineProps({
  items: {
    type: Object as PropType<Item[]>,
    required: true,
  },
  fields: {
    type: Object as PropType<Field[]>,
    required: true,
  },
  keyItemName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <table class="table">
    <thead>
      <tr class="table__row table__row--header">
        <template v-for="field in fields">
          <th
            v-if="typeof field.label === 'string'"
            class="table__cell table__cell--header"
          >
            <p>
              {{ field.label }}
            </p>
          </th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="item[keyItemName] ?? index"
        class="table__row"
      >
        <template v-for="field in fields">
          <td v-if="typeof field.label === 'string'" class="table__cell">
            <slot
              :name="field.key"
              :value="item[field.key]"
              :item="item"
              :index="index"
            >
              {{ item[field.key] }}
            </slot>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  height: 100%;
}

.table__cell {
  padding: 0.5rem 1rem;
}

.table__row {
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
}

.table__cell p {
  margin: 0;
}
.table__cell {
  text-align: left;
  padding: 1em 2em;
}
</style>
