<template>
  <div class="login-box">
    <div class = "top">
      <i class = "fa fa-angle-left"
        @click = 'back'
      ></i>
      <router-link to = '/login'>
        <span class = "top-r">
        去登录
        <i class = "fa fa-angle-right"></i>
      </span>
      </router-link>    
    </div>
    <div class = "title">注册</div>
    <div class = "login-form">
      <form action="">
        <input 
          type="text"
          placeholder="请输入账号"
          v-model="user.username"
        >
        <input 
          type="password"
          placeholder="请输入密码"
          v-model="user.password"
        >
      </form>
    </div>
    <div class = "agree">
      <input type="checkbox">
      同意
      <a href="">顺丰优选用户协议</a>
    </div>
    <input 
      type="button"
      class = "button" 
      value = "注册"
      @click="register(user)"
      >
      <Footer></Footer>
  </div>
</template>

<script>
import { mapActions} from "vuex";
import Footer from '../common/Footer'
export default {
 name: 'register',
 components:{
   Footer
 },
 data(){
   return{
     user:{
       username: "",
       password: ""
     }
   }
 },
 methods:{
   ...mapActions(["register"]),
   back(){
    this.$router.go(-1)
   }
 }
}
</script>

<style scoped lang = 'scss'>
.top{
  height:.8106rem;
  line-height:.8106rem;
  position:relative;
  .fa-angle-left{
    font-size:.30rem;
    position: absolute;
    left:.25023rem;
    top:.29527rem;
  }
  .top-r{
    font-size:.14rem;
    font-weight: 500;
    float:right;
    margin-right:.15013rem;
    color:#000;
  }
}
.title{
    font-size:.2rem;
    padding:0 .23894rem;
  }
.login-form{
  padding:.11094rem .23894rem .18774rem .23894rem;
  form{
    font-size:.14rem;
    width:3.1929rem;
    input{
      border:0;
      border-bottom:.01rem solid #e6e6e6;
      height:.512rem;
      width:3.1929rem;
    }
  }
}
.agree{
  font-size:.14rem;
  padding:0 .23894rem;
  span{
    color:green;
  }
  a{
    color:#000;
  }
}
.button{
  width:3.1928rem;
  height:.4804rem;
  background:#6aecad;
  font-size:.16rem;
  border:0;
  position:absolute;
  left:.23894rem;
  margin-top:.2rem;
}
  
</style>
