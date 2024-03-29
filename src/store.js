import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
  position: '北京'
}
const mutation = {
  setPosition(state, val) {
    state.position = val;
  }
}
const actions = {
  setPosition({
    commit
  }, val) {
    // 异步请求后盾获取当前位置数据
    commit('setPosition', val)
  }
}
export default new Vuex.Store({
  state,
  mutation,
  actions
})
