<script lang="ts">
import { h } from "vue";

export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => h("h" + props.level, null, slots.default?.());
  },
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff;
  margin: 0;
  padding: 1rem 2rem;
  text-align: left;
  background-color: aqua;
}
</style>
