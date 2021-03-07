<template lang="pug">
  el-table(:data='data')
    el-table-column(
      v-for="column in config.columns"
      :label='column.label' :prop="column.prop" :key="column.prop")
</template>
<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "TestTable",
  props: {
    config: {
      type: Object,
      default() {
        return {
          columns: []
        };
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props) {
    const testData = ref(222);
    const testFunc = () => {
      console.log(testData.value);
    };
    return {
      testData,
      testFunc
    };
  }
};
</script>
