<template>
  <div id="msg">
    {{ msg }}
    <!-- <p>{{ txt }}</p> -->
  </div>
</template>

<script>
// import txt from "../../mytest.txt";
export default {
  name: "demo",
  data() {
    return {
      msg: "111"
    };
  },
  created() {
    console.log(this.msg);
    this.$nextTick(() => {
      console.log(document.getElementById("msg").innerHTML);
    });
    this.msg = "update1";
  },
  mounted() {
    console.log(this.msg);
    this.$nextTick(() => {
      console.log(document.getElementById("msg").innerHTML);
    });
    this.msg = "update2";
  }
};
</script>
