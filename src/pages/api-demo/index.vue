<template>
  <div>
    <p @click="add1">{{ obj.count }}</p>
    <p @click="add2">{{ count2 }}</p>
    <p @click="add3">{{ count3 }}</p>
    <button @click="stopEffect">stop watch and watchEffect</button>
  </div>
</template>

<script>
import apiObj from "./api";
import { watchEffect, watch } from "@vue/composition-api";
export default {
  props: {
    name: {
      type: String,
      default: "zhangs"
    }
  },
  setup(props, context) {
    console.log(arguments);
    console.log(props.name);
    const { obj: obj, add: add1 } = apiObj.reactiveApi();
    const { count: count2, add: add2 } = apiObj.refApi();
    const { count: count3, add: add3 } = apiObj.toRefsApi();

    const stop = watchEffect(() => {
      console.log(count3.value);
    });
    const stopWatch = watch(
      () => count2.value,
      newVal => {
        console.log(newVal);
      }
    );
    const stopMulWatch = watch(
      [count2, count3],
      ([count2, count3], [precount2, precount3]) => {
        console.log(
          `MulWatch: [${count2}, ${count3}]  , [${precount2},${precount3}]`
        );
      }
    );
    function stopEffect() {
      stop();
      stopWatch();
      stopMulWatch();
    }
    return {
      obj,
      add1,
      // ===
      count2,
      add2,
      // ===
      count3,
      add3,
      stopEffect
    };
  }
};
</script>
