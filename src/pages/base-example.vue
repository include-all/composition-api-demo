<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
import {
  reactive,
  computed,
  watchEffect,
  onBeforeMount,
  onMounted,
  onUpdated
} from "@vue/composition-api";

export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("update");
  },
  setup() {
    console.log("steup");
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });
    watchEffect(() => {
      console.log("watchEffect", state.count);
    });
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onUpdated(() => {
      console.log("onUpdate");
    });
    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    };
  }
};
</script>
