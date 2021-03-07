import { ref, reactive, toRefs, watchEffect } from '@vue/composition-api'

const apiObj = {
  reactiveApi() {
    const obj = reactive({
      count: 1
    })
    function add() {
      obj.count++
    }
    return {
      obj,
      add
    }
  },
  toRefsApi() {
    const obj = reactive({
      count: 1
    })
    function add() {
      obj.count++
    }
    return {
      ...toRefs(obj),
      add
    }
  },
  refApi() {
    const count = ref(1);
    function add() {
      count.value++
    }
    // watchEffect(() => {
    //   console.log('watchEffect', count.value)
    // })
    return {
      count,
      add
    }
  }
}

export default apiObj