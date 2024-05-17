<script lang="ts">
import { Component, h } from "vue";
import BaseLink from "@/components/BaseLink.vue";
import { PropType } from "vue";
import { allowedButtonVariants } from "@/helpers";
import { ContextualButtonVariant } from "@/@types/variants";

export default {
  props: {
    variant: {
      type: String as PropType<ContextualButtonVariant>,
      validator: (val: ContextualButtonVariant) =>
        allowedButtonVariants.includes(val),
      default: "secondary" satisfies ContextualButtonVariant,
    },
  },
  setup(props, { slots, attrs }) {
    const tag: string | Component = attrs.href ? BaseLink : "button";

    const classes = props.variant.split("-");

    return () =>
      h(
        tag,
        {
          class: ["button", ...classes],
          type: "button",
        },
        slots
      );
  },
};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  border-radius: 4px;
  padding: 1rem 2rem;
  color: #fff;
  background-color: hsl(var(--hue), var(--saturation), var(--lightness));
  border: 2px solid hsl(var(--hue), var(--saturation), var(--lightness));
  cursor: pointer;
}

.button:active {
  --lightness: 69%;
}

.button.outline {
  color: hsl(var(--hue), var(--saturation), var(--lightness));
  background-color: #fff;
}

.button:disabled,
.button[disabled],
.button.outline:disabled,
.button.outline[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

@media (hover: hover) {
  .button:hover {
    --lightness: 30%;
  }
}
</style>
