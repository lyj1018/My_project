<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

import Header from './components/common/Header'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Detail from './components/pages/Detail'
import ShopCar from './components/pages/ShopCar'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Mine from './components/pages/Mine'
import List from './components/pages/List'
import Item from './components/pages/Item'
import Htqq from './components/pages/Htqq'
export default {
  name: 'App',
  components:{
    Footer
  },
  created(){
    this.initUser()
    this.initUsername()
    this.initCar()
  },
  methods:{
    ...mapActions(['initUser','initUsername','initCar'])
  }
}
</script>

<style>

</style>
