<template lang="pug">
  div
    el-upload(action="" drag :before-upload="beforeUpload")
</template>

<script>
export default {
  methods: {
    beforeUpload(file) {
      console.log(file);
    }
  }
};
</script>
