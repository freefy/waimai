// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
//注册一个全局自定义指令 `v-document-click`
Vue.directive('document-click', {
  bind(el, binding, vnode) {
    console.log('el:' + el);
    console.log('binding:' + binding);
    console.log('vnode:' + vnode);
    document.addEventListener('click', binding.value, false)
  }
}) //自定义事件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
