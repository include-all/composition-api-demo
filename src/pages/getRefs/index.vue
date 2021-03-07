<template lang="pug">
  <div>
    <div ref="div1Refs">div1</div>
    <div ref="div2Refs">div2</div>
  </div>
</template>

<script>
import { ref, onMounted } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const div1Refs = ref();
    onMounted(() => {
      console.log(div1Refs.value);
      console.log(ctx.refs.div2Refs);
    });
    return {
      div1Refs
    };
  }
};
</script>
