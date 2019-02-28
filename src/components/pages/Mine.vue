<template>
  <div class="mine-box">
    <div class = "mine-top">
      <div class = "mine-info">
        <div class = "mine-face fl">
          <img src="https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon1.png" alt="">
        </div>
        <div class = "mine-title fl">
          <div class = "title-t">
            <span>{{username}}</span>
          </div>
          <div class = "title-b">
            <span>普通会员</span>
            <span class = "vip">会员试用</span>
          </div>
        </div>
      </div>
      <div class = "mine-list">
      <ul>
        <li
          v-for = 'list in lists'
          :key = 'list.id'
        >
          <span>
            <strong>{{list.num}}</strong>
          </span>
          <span class = "list-name">{{list.name}}</span>
        </li>
      </ul>
    </div>
    <div class = "mine-order">
      <div class = "order-top">
        <span>我的优选订单</span>
        <span class = "setup">全部订单</span>
        <i class = "fa fa-angle-right"></i>
      </div>
      <div class = "order-list">
        <ul>
          <li
            v-for = 'list2 in lists2'
            :key = 'list2.id'
          >
            <span>
              <img :src="list2.img" alt="">
            </span>
            <span class = "title">{{list2.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class = "mine-mation">我的优选信息</div>
    <div class = "mine-myinfo">
      <ul>
        <li
          v-for = 'item in items'
          :key = 'item.id'
        >
          <span class = "myinfo-pic"><img :src="item.img" alt=""></span>
          <span>{{item.name}}</span>
          <i class = "fa fa-angle-right right"></i>
        </li>
      </ul>
    </div>
  </div>
   <Footer></Footer> 
  </div>
</template>

<script>
import Footer from '../common/Footer'
import { mapGetters, mapActions, mapState } from "vuex";
export default {
 name: 'Mine',
 components:{
   Footer
 },
 data(){
   return{
     lists:[
       {
         id:1,
         num:4,
         name:'优惠券'
       },
       {
         id:2,
         num:0,
         name:'免邮券'
       },
       {
         id:3,
         num:0.0,
         name:'优选卡'
       },
       {
         id:4,
         num:100,
         name:'优选积分'
       }
     ],
     lists2:[
       {
         id:1,
         img:'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon4.png',
         title:'待付款'
       },
       {
         id:2,
         img:'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon9.png',
         title:'配送中'
       },
       {
         id:3,
         img:'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon5.png',
         title:'待评价'
       },{
         id:4,
         img:'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon11.png',
         title:'退款/售后'
       }
     ],
     items:[
       {
         id: 1,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/usercenter_gift.png',
         name:'我的礼赠'
       },
       {
         id: 2,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon12.png',
         name:'我的地址'
       },
       {
         id: 3,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/fp.png',
         name:'补开发票'
       },
       {
         id: 4,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon15.png',
         name:'优选会员'
       },
       {
         id: 5,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon13.png',
         name:'我的门店'
       },
       {
         id: 6,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon14.png',
         name:'我的收藏'
       },
       {
         id: 7,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon8.png',
         name:'历史浏览'
       },
       {
         id: 8,
         img: 'https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon3.png',
         name:'安全中心'
       }                 
     ]
   }
   
 },
 computed: {
    ...mapGetters(["username", "total"]),
    ...mapState({
      cars: state => state.cars
    })
  },
  beforeRouteEnter: (to, from, next) => {
    let username = localStorage.getItem('username')
    if (username) {
      next()
    }else{
      next('login')
    }
  }
}
</script>

<style scoped lang = "scss">
  .mine-top{
    height:1.8715rem;
    background:url('https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/bg.png') no-repeat;
    background-size:100%;
    .mine-face{
      width:.6205rem;
      height:.6205rem;
      padding:.13012rem .16015rem 0 0;
      position:relative;
      img{
        width:.6205rem;
        height:.6205rem;
        position:absolute;
      }
    }
    .mine-info{
      padding:.35033rem .16015rem;
      min-height:.62052rem;
    }
    .mine-title{
      font-size:.24rem;
      padding:.13012rem 0;
      .title-t{
        color:#252525;
      }
      .title-b{
        font-size:.16rem;
        .vip{
          color:#b68c26;
          margin-left:.1rem;
        }
      }
    }
    .fl{
      float:left;
    }
  }
  .mine-list{
    height:.5503rem;
    padding-bottom:.1rem;
    font-size:.16rem;
    ul{
      li{
       float:left;
       width:.92083rem;
       height:.45031rem; 
       text-align: center;
       border-right:.01rem solid #d4d4d4;
      }
    }
    span{
      display:block;
    }
    .list-name{
      font-size:.14rem;
    }
    li:nth-child(4){
      border:0;
    }
  }
  .mine-order{
    padding:.23022rem .16015rem;
    height:1.28396rem;
    span{
      font-size:.16rem;
    }
    
    .setup{
      font-size:.14rem;
      right:.2rem;
    }
    .order-top{
      position: relative;
      height:.3067rem;
      overflow: hidden;
      span{
        position:absolute;
      }
      i{
        position:absolute;
        right:0;
        top:.02rem;
      }
    }
    .order-list{
      ul{
        li{
          float:left;
          width:25%;
          color:#343434;
          height:.6971rem;
          position:relative;
          
          img{
            width:.2702rem;
            height:.2702rem;
            position:absolute;
            left:.32rem;
            top:.1rem;
          }
          .title{
            font-size:.12rem;
            position:absolute;
            top:.4rem;
            left:.25rem;
          }
        }
      }
    }
  }
  .fa-angle-right{
      font-size:.14rem;
    }
  .mine-mation{
      height:.45031rem;
      background:#f9f9f9;
      line-height:.45031rem;
      font-size:.14rem;
      padding: 0 .16015rem;
    }
    .mine-myinfo{
      font-size:.14rem;
      padding: 0 .16015rem;
      margin-bottom:.5384rem;
      img{
        width:.18rem;
        height:.18rem;
      }
      ul{
        li{
          height:.57042rem;
          line-height:.57042rem;
          border-bottom:.01rem solid #ebebeb;
          position:relative;
        }
        .right{
          position:absolute;
          right:0;
          top:.2rem;
          color:#ebebeb;
        }
      }
    }
</style>
