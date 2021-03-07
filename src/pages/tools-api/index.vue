<template lang="pug">
  div aaa
</template>

<script>
import { ref, reactive, isRef } from "@vue/composition-api";
export default {
  setup() {
    const a = 1;
    const b = ref(2);
    const c = reactive({
      d: 3
    });
    //isRef 是否为ref对象
    console.log(isRef(a), isRef(b), isRef(c));
  }
};
</script>
