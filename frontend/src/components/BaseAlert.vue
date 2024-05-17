<script lang="ts">
import { PropType } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseIconClose from "@/components/BaseIconClose.vue";
import { allowedAlertVariants } from "@/helpers";
import { ContextualAlertVariant } from "@/@types/variants";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    variant: {
      type: String as PropType<ContextualAlertVariant>,
      validator: (val: ContextualAlertVariant) =>
        allowedAlertVariants.includes(val),
      required: true,
    },
  },
  emits: ["remove"],
  components: { BaseButton, BaseIcon, BaseIconClose },
  computed: {
    classes() {
      return [this.variant];
    },
  },
  methods: {
    remove() {
      this.$emit("remove", this.id);
    },
  },
};
</script>

<template>
  <div class="alert" :class="classes">
    <slot></slot>
    <BaseButton @click="remove" :variant="variant" class="close">
      <BaseIcon>
        <BaseIconClose />
      </BaseIcon>
    </BaseButton>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid
    hsl(var(--hue), var(--saturation), calc(var(--lightness) - 15%));
  border-radius: 0.25rem;
  background-color: hsl(var(--hue), var(--saturation), var(--lightness));
  color: #fff;
}

.close {
  color: hsl(var(--hue), var(--saturation), calc(var(--lightness) - 20%));
}
</style>
