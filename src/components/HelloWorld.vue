<template>
  <div>
    {{ msg }}
    <button class="btn" @click="click"></button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: 1
    };
  },
  methods: {
    debounce(fn, wait = 100) {
      let timeout;
      return function() {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          fn.apply(this, arguments);
        }, wait);
      };
    },
    click() {
      this.debounce(() => {
        this.msg++;
      }, 2000)();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  width: 100px;
  height: 20px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
