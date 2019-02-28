<template>
  <div class="home-box">
    <Header></Header>
    <Nav></Nav>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for = 'item in list'
          :key = 'item.id'
        ><img v-bind:src="item.img" alt=""></van-swipe-item>
      </van-swipe>
      <div class = "label">
        <ul>
          <li
            v-for = 'items in lists'
            :key = 'items.id'
          >
            <i><img v-bind:src="items.img" alt=""></i>
            {{items.title}}
            
          </li>
        </ul>
      </div>
      <div class = "menu">
        <ul>
          <li
            v-for = 'menu in menus'
            :key = 'menu.id'
          >
            <img v-bind:src="menu.img" alt="">
            <span>{{menu.title}}</span>
          </li>
        </ul>
      </div>
      <div class = "notice">
        <div class = "notice-span">
          <b>优选快报</b>
          <span>|</span>
        </div>
        <van-swipe :autoplay="3000" vertical>
          <van-swipe-item style = "height: .35rem"
            v-for = 'notice in notices'
            :key = 'notice.id'
          >{{notice.title}}
          </van-swipe-item>  
        </van-swipe>
      </div>
      <div class = "banner">
        <img src="https://ps.sfimg.cn/mapp/resource/9e/9e23889d369b1bda3902b18e5a627566.jpg" alt="">
      </div>
      <Loading v-show = 'loading'></Loading>
      <div class = "pro-list">
        <div class = title>
          新品推荐
        </div>
        <ul>
          <li
            v-for = 'list in dataList'
            :key = 'list.productId'
          > 
            <router-link
              :to = "{ name:'detail',params:{id:list.productId}}"
            >
                <div class = "img">
                <img v-bind:src="list.imageUrl" alt="">
              </div>
            </router-link>
            <div class = "info">
              <div class = "info-label">
              </div>
              <div class = "info-name">
                {{list.productName}}
              </div>
              <div class = "info-price">￥{{list.activityPrice}}</div>
            </div>
             
            <div>
              <span ><van-icon name="shopping-cart-o"  class = "icon"
                @click = 'addCar(list), onClickBtn()'
              /></span>
            </div>
          </li>
        </ul>
      </div>
      <div class = "swiper" >
        
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              
                <img src="https://ps.sfimg.cn/mapp/resource/11/116f7b6ec60f34269219b85d324906c8.png" alt="">
              
            </van-swipe-item>
            <van-swipe-item>
              <img src="https://ps.sfimg.cn/mapp/resource/03/0394dd71826448f04d211d169500b46a.png" alt="">
            </van-swipe-item>
          </van-swipe>  
      </div>
      <div class = "pro-adv">
        <div class = "adv-l">
          <img src="https://ps.sfimg.cn/mapp/resource/61/6166a156f5b829d4157ecd9f6897e9cf.jpg" alt="">
        </div>
        <div class = "adv-r">
          <img src="https://ps.sfimg.cn/mapp/resource/33/33ab3c1934d5ad591c681c71d9c3a23f.jpg" alt="">
          <img class = "adv-r-b" src="https://ps.sfimg.cn/mapp/resource/6a/6af18dc20157fa5d2bfaba4e51c789be.jpg" alt="">
        </div>          
      </div>
      <div class = "swiper">
        <router-link to = '/list'>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="https://ps.sfimg.cn/mapp/resource/c4/c4ee3884bbf80a5eaf2de36014929250.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://ps.sfimg.cn/mapp/resource/21/21f2da3d21d965bbf10e02034c15ef20.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://ps.sfimg.cn/mapp/resource/c4/c4ee3884bbf80a5eaf2de36014929250.jpg" alt="">
          </van-swipe-item>
        </van-swipe>
        </router-link>
      </div>
      <div class = "banner">
        <img src="https://ps.sfimg.cn/mapp/resource/69/6994fdd321c3540c35da9b757a6b7f4e.jpg" alt="">
      </div>
      <div class = "item"></div>
      
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '../common/Header'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import axios from 'axios'
import qs from 'qs'
import { Swipe, SwipeItem,Icon,Toast } from 'vant';
import {mapActions,mapGetters, mapState} from 'vuex'
export default {
 name: 'Home',
 components:{
   Header,Nav,Footer
 },
 data(){
   return{
     dataList: [],
     loading: true,
     list: [
       {
         id: 1,
         img: 'https://ps.sfimg.cn/mapp/resource/bd/bd1cf14f42129641599657ad8743fb4a.jpg'
       },
        {
         id: 2,
         img: 'https://ps.sfimg.cn/mapp/resource/f6/f68f6fb05ea1def0a4d490c66dd68187.jpg'
       },
        {
         id: 3,
         img: 'https://ps.sfimg.cn/mapp/resource/0c/0cd246ddb7c76aea9151b1d6c9152eb7.jpg'
       },
        {
         id: 4,
         img: 'https://ps.sfimg.cn/mapp/resource/3c/3c65c536109d1dcbcd34efdf9280be95.jpg'
       },
       {
         id: 5,
         img: 'https://ps.sfimg.cn/mapp/resource/bb/bbd72ef6c5f5efc61df2b2265a8dea86.jpg'
       },
       {
         id: 6,
         img: 'https://ps.sfimg.cn/mapp/resource/ea/ea337972c896cd96198d69991c14567d.jpg'
       },
       {
         id: 7,
         img: 'https://ps.sfimg.cn/mapp/resource/1a/1ac001fe4c4bda3f4fa0d1a6721047ae.jpg'
       }
     ],
     lists:[
       {
         id: 1,
         img: 'https://ps.sfimg.cn/mapp/resource/df/df1492c1d9172d39ea05a3a673d27afa.png',
         title:'全球美食'
       },
       {
         id: 2,
         img: 'https://ps.sfimg.cn/mapp/resource/df/df1492c1d9172d39ea05a3a673d27afa.png',
         title:'全程品控'
       },
       {
         id: 3,
         img: 'https://ps.sfimg.cn/mapp/resource/df/df1492c1d9172d39ea05a3a673d27afa.png',
         title:'顺丰冷链'
       },
       {
         id: 4,
         img: 'https://ps.sfimg.cn/mapp/resource/df/df1492c1d9172d39ea05a3a673d27afa.png',
         title:'服务到家'
       },
     ],
     menus:[
       {
         id: 1,
         img: 'https://ps.sfimg.cn/mapp/resource/46/46a45e43b8e466ad0ff437a9fe5f0849.png',
         title: '送礼神器'
       },
       {
         id: 2,
         img: 'https://ps.sfimg.cn/mapp/resource/a1/a16bb0568627947f508141e3b5e06003.png',
         title: '全球美食'
       },
       {
         id: 3,
         img: 'https://ps.sfimg.cn/mapp/resource/ba/bab4168ac7140de20ae75afedb5eb8c8.png',
         title: '优选到家'
       },
       {
         id: 4,
         img: 'https://ps.sfimg.cn/mapp/resource/f1/f19fdc255a0fd3520f0e92c0112d6dd3.png',
         title: '优选国际'
       },
       {
         id: 5,
         img: 'https://ps.sfimg.cn/mapp/resource/70/702a84f85c0b5ab109fd3cca43d764cd.png',
         title: '新品尝鲜'
       }
     ],
     notices:[
       {
         id: 1,
         title:'关于白草莓发货时效延迟的公告'
       },
       {
         id: 2,
         title:'营业执照及食品经营许可证'
       },
       {
         id: 3,
         title:'2019年春节假期顺丰优选服务和配送公告'
       },
       {
         id: 4,
         title:'顺丰优选长期热招岗位公告'
       },
       {
         id: 5,
         title:'顺丰优选食品安全规范内容'
       }
     ]
     
   }
     
 },
created(){
   this.$http
         .get('/static/data/home.json')
         .then(
             res=>{
                 this.dataList = res.data.data.appfloor.productArray
                 this.loading = false
             }
         )
         .catch(error => console.log(error))
 },
 methods:{
    ...mapActions([ 'addCar' ]),
    onClickBtn() {
      Toast('加入成功');
    },
 },
 computed: {
    ...mapGetters([ "username"]),
    ...mapState({
      cars: state => state.cars
    })
  }
}
</script>

<style scoped lang = 'scss'>
  body{
    background:#727272;
  }
  .home-box{
    margin-top:.93rem;
    width:3.75rem;
  }
  .van-swipe-item{
    img{
      width:3.75rem;
      height:2.165rem;
    }
  }
  .van-swipe{
    height:2.165rem;
  }
  .label{
    font-size:.14rem;
    background:url(https://ps.sfimg.cn/mapp/resource/a5/a54e30362d76a9777813664f623eaecb.jpg)no-repeat;
    background-size: 100% 100%;
    height:.385rem;
    ul{
      display:flex;
      justify-content: space-around;
      line-height:.385rem;
      li{}
    }
    img{
      width:.15rem;
      height:.15rem;
    }
  }
  .menu{
    font-size:.12rem;
    height:.74rem;
    padding: .125rem 0 .29rem;
    background:url(https://ps.sfimg.cn/mapp/resource/a7/a7be88ffd679873d5fd3cad7dcb6e831.jpg)no-repeat;
    background-size:100% 100%;
    ul{
       display:flex;
      justify-content: space-around;
      li{
        width:.75rem;
        height:.73rem;
        text-align: center;
        span{
          display:block;
          width:.75rem;
          height:.13rem;
        }
      }
    }
    img{
      width:.455rem;
      height:.455rem;
    }
  }
  .notice{
    font-size:.12rem;
    padding:.06502rem .16rem;
    overflow:hidden;
    height:.22rem;
    line-height:.22rem;
    .notice-span{
      float:left;
      width:.73rem;
      height:.22rem;
      font-size:.14rem;
    }
    .van-swipe{
      height:.35rem;
      width:2.61rem;
      float:left;
      
    }
  }
  .banner{
    margin-bottom:.13rem;
    height:1.4rem;
    img{
      width:3.75rem;
      height:1.4rem;
    }
  }
  .pro-list{
    width:3.75rem;
    ul{
      width:3.5433rem;
      overflow: hidden;
      padding:0 .10509rem;
      li{
        width:1.0809rem;
        height:1.9267rem;
        float:left;
        font-size:.12rem;
        margin:0 .05006rem;
        text-align: center;
        img{
          width:1.0809rem;
          height:1.0809rem;
        }
        .info-name{
          width:1.0809rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color:#000;
        }
        .info-price{
          color: #ff8200;
        }
      }
    }
  }
  .title{
      font-size:.14rem;
      text-align: center;
      height:.5445rem;
      line-height:.5445rem;
    }
  .pro-adv{
    overflow: hidden;
    margin-top:.2rem;
    height:2.7023rem;
    .adv-l{
      float:left;
      height:2.6924rem;
      img{
        width:1.8717rem;
        height:2.6924rem;
      }
    }
    .adv-r{
      float:right;
      width:1.8717rem;
      height:2.6924rem;
      img{
        width:1.8717rem;
        height:1.3412rem;
        position:absolute;
      }
      .adv-r-b{
        margin-top:1.3412rem;
      }
    }
  }
  .swiper{
    height:1.4013rem;
    margin-bottom:.13012rem;
    .van-swipe{
      height:1.4013rem;
    }
    img{
      height:1.4013rem;
    }
  }
  .icon{
    color:#ff8200;
    margin-left:.8rem;
  }
</style>
