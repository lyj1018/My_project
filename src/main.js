// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.devtools = true

//自定义插件
import Loading from './components/Loading'
Vue.use(Loading)

import './utils/rem'
import '../public/icon/css/font-awesome.css'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import axios from 'axios'
Vue.prototype.$http = axios


//全局注册vuex
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
