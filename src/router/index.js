import Vue from 'vue'
import Router from 'vue-router'


import Detail from '../components/pages/Detail.vue'
import ShopCar from '../components/pages/ShopCar.vue'
import Register from '../components/pages/Register.vue'
import Login from '../components/pages/Login.vue'
import Mine from '../components/pages/Mine.vue'
import Home from '../components/pages/Home.vue'
import Find from '../components/pages/Find.vue'
import Class from '../components/pages/Class.vue'
import List from '../components/pages/List'
import Item from '../components/pages/Item'
import Htqq from '../components/pages/Htqq'


Vue.use(Router)

let options = {
  mode:'history',
  base: process.env.BASE_URL,
  routes:[
      {
          path: '/',
          component: Home,
          name: 'home'
      },
      {
        path: '/Home',
        component: Home,
        name: 'home'
    },
      {
        path: '/Detail/:id',
        component: Detail,
        name: 'detail'
     },
     {
        path: '/ShopCar',
        component: ShopCar,
        name: 'shopcar'
     },
     {
        path: '/Register',
        component: Register,
        name: 'register'
     },
     {
        path: '/Login',
        component: Login,
        name: 'login'
     },
     {
        path: '/Mine',
        component: Mine,
        name: 'mine'
     },
     {
      path: '/Class',
      component: Class,
      name: 'class'
      },
      {
         path: '/Find',
         component: Find,
         name: 'find'
      },
      {
         path: '/List',
         component: List,
         name: 'list'
      },
      {
         path: '/Item',
         component: Item,
         name: 'item'
      },
      {
         path: '/Htqq',
         component: Htqq,
         name: 'htqq'
      }
  ]
}
let router = new Router(options)
export default router