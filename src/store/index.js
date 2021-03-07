import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  flag: 1
}
const mutations = {
  add(state, payload) {
    state.flag++
  }
}

export default new Vuex.Store({
  state,
  mutations
})