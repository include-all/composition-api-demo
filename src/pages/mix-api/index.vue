<template>
  <div class="counter">
    <p>Message: {{ msg }}</p>
    <el-button @click="changeMessage">changeMessage</el-button>
    <p>count:{{ count }}</p>
    <el-button @click="getMsg">this.count = this.msg</el-button>
    <p></p>
    <el-button @click="setMsg"
      >this.msg = Math.floor(Math.random() * 100)</el-button
    >
    <p></p>
    <el-button @click="methodUseChangeMessage"
      >methodUseChangeMessage：this.changeMessage()</el-button
    >
    <p></p>
    <el-button type="" @click="addTestName">{{ testName }}</el-button>
  </div>
</template>
<script>
import { ref, computed, watch } from "@vue/composition-api";
import { message } from "./message";
export default {
  setup(props, context) {
    let { msg, changeMessage } = message({ msg: "init" });
    let testName = ref(0);
    const addTestName = () => {
      testName.value++;
      console.log(context);
      // context.parent.setMsg();
    };
    return {
      msg,
      changeMessage,
      testName,
      addTestName
    };
  },
  data() {
    return {
      count: 1
    };
  },
  // setup所返回的属性，在option api中完全可以访问
  methods: {
    getMsg() {
      console.log(this);
      console.log(this.msg);
      this.count = this.msg; //可以使用setup返回的属性，可读
    },
    setMsg() {
      this.msg = Math.floor(Math.random() * 100); //可写，并且自动解套了
    },
    methodUseChangeMessage() {
      this.changeMessage(); //可以使用setup返回的方法
    }
  }
};
</script>
