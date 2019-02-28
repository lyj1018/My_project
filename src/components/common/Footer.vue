<template>
  <div class="footer-box">
    <router-link 
      v-for = 'list in lists'
      :key = 'list.id'
      :to = 'list.path'
      active-class="active"
      >
      <span ><van-icon :name="list.name" />{{list.title}}</span>
    </router-link>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
 name: 'Footer',
 data(){
   return{
     lists:[
       {
         id: 1,
         name:'wap-home',
         title:'首页',
         path:'home'
       },
       {
         id: 2,
         name:'apps-o',
         title:'分类',
         path: '/class'
       },
       {
         id: 3,
         name:'shopping-cart-o',
         title:'购物车',
         path:'/shopcar'
       },
       {
         id: 4,
         name:'user-o',
         title:'我的优选',
         path:'/register'
       }
     ]
   }
 }
}
</script>

<style scoped lang = "scss">
  .footer-box{
    overflow: hidden;
    position:fixed;
    bottom:0;
    left:0;
    width:3.75rem;
    background:#fff;
    border-top:.01rem solid #727272;
    span{
      font-size:.12rem;
      display:block;
      padding:.07007rem 0;
      float:left;
      width:25%;
      height:.38854rem;
      text-align: center;
      color:#000;
      .van-icon{
        font-size:.24rem;
        display:block;
      }
    }
    a.active span{
      color:green;
    }
  }
</style>
