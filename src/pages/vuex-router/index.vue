<template lang="pug">
  div
    div {{name}}
    el-button(type='' @click="add") 触发mutations
    el-button(@click="changeRouter") 跳转路由
</template>

<script>
import { ref, watch } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const name = ref(root.$store.state.flag); //初次以store中 flag赋值
    // 监听变化
    watch(
      () => root.$store.state.flag,
      newVal => {
        name.value = newVal;
      }
    );
    // 触发mutations
    const add = () => {
      root.$store.commit("add");
    };
    // 测试路由功能
    const changeRouter = () => {
      root.$router.push({
        name: "RefactorDemo"
      });
    };
    return {
      name,
      add,
      changeRouter
    };
  }
};
</script>
