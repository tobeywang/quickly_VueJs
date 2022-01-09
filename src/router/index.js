import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import Members from '@/components/Members'
// bootstrap  and bootstrap-vaue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// get api data
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/h2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/users',
      name: 'Members',
      component: Members
    }
  ]
})
