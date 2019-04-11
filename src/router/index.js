import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import Index from "@/page/index"
import ChangeCity from "@/page/changeCity.vue"
import GoodList from "@/page/goodList.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'defaultPage',
    redirect: '/index',
    component: defaultPage,
    children: [{
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/changecity',
      name: 'changecity',
      component: ChangeCity
    }, {
      path: 's/:name',
      name: 'goods',
      component: GoodList
    }]
  }]
})
