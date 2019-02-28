<template>
  <div class="detail-box">
    <div class = "toolbar" style="position:fixed">
      <div class ="top-bar">
        <i class = "fa fa-angle-left"
          @click = 'back'
        ></i>
        <div class = "top-tabs">
          <span class = "te">商品</span>
          <span class = "detail">详情</span>
          <span>评价</span>
        </div>
      </div>
    </div>
    <div class = "banner">
      <img :src="item.img" alt="">
    </div>
    <div class = "pro-info">
      <div class = "pro-info-content">
        <div class = "pro-price">
          <span class = "price">￥{{item.price}}</span>
          <span>{{item.gg}}</span>
        </div>
        <div>
          <div class = "pro-self">
            <span class = "zy">自营</span>
          </div>
          <div class = "pro-title">
            <div class = "p-tit">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class = "pro-user">
        <div class = "pro-num">{{item.content}}</div>
        <div class = "pro-text">用户评价</div>
        <div class = "pro-btn">查看</div>
      </div>
    </div>
    <div class = "pro-place border">
      <div>
        <span class = "pro-place-label">产地</span>
        <span>
          <img :src="item.countryImg" class = "gq"  alt="">
          {{item.country}}
        </span>
      </div>
      <div>
        <span class = "pro-place-label">品牌</span>
        <span>{{item.label}}</span>
      </div>
    </div>
    <div class = "pro-info-num border">
      <span class = "label">数量</span>
      <van-stepper v-model="value" />
    </div>
    <div class = "deliver border">
      <span class = "label fl">配送</span>
      <div class = "fl">
        <span class = "fl">至&nbsp;</span>
        <span class = "address om">北京北京东城区</span>
        <i class = "fa fa-angle-right"></i>
      </div>
    </div>
    <div class = "recommand">
      <div class = "title">同类推荐</div>
      <div class = "sp">
        <ul>
          <li 
            v-for = 'list in dataList'
            :key = 'list.productId'
          >
            <img :src="list.imageUrls[0]" alt="">
            <div class = "sp-info om">{{list.productName}}</div>
            <div class = "sp-price">
              <span>￥{{list.activityPrice}}0</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn
      icon="chat-o"
      text="客服"
      @click="onClickMiniBtn"
        />
        <router-link to = '/shopcar'>
          <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          @click="onClickMiniBtn"
        />
        </router-link>
        
        <van-goods-action-big-btn
          text="加入购物车"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="onClickBigBtn"
        />
    </van-goods-action>
  </div>
</template>

<script>
import { Stepper } from 'vant';
import axios from 'axios'
import qs from 'qs'
import {
  GoodsAction,
  Toast,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';


export default {
 name: 'Detail',
 props:['id'],
 data(){
   return{
     value:1,
     dataList:[],
     item:[]
   }
 },
 created(){
   //跨域
        axios.post('/sf/newproduct/samecateproducts/',qs.stringify({
            productId: 295963,
            brandId: 12917,
            categoryId: 8135
        })).then( res => this.dataList = res.data.data.sameproducts
        ).catch( error => console.log( error )),

      this.$http
         .get('/static/data/index.json')
         .then(
             res=>{
                 let id = this.$route.params.id
                 this.item = res.data[id-1]
             }
         )
         .catch(error => console.log(error))
 },

methods: {
    onClickMiniBtn() {
      Toast('加入成功');
    },
    onClickBigBtn() {
      Toast('加入成功');
    },
    back(){
    this.$router.go(-1)
     }
  }
}
</script>

<style scoped lang = 'scss'>
.top-bar{
  font-size:.18rem;
  padding:.07007rem 0;
  width:3.75rem;
  background:#fff;
  .fa-angle-left{
    font-size:.24rem;
    float:left;
    margin-left:.3rem;
  }
  .top-tabs{
    text-align: center;
    font-size:.14rem;
    .detail{
      margin:0 .38035rem;
    }
  }
}
.te{
  font-weight: bold;
}
.banner{
  img{
    width:3.75rem;
    height:3.75rem;
  }
  
}
.pro-info{
  padding:.08009rem 0;
  overflow: hidden;
  border-bottom: .01rem dashed #e5e5e5;
  .pro-info-content{
    float:left;
    padding-left:.16015rem;
    box-sizing: border-box;
    border-right:.005rem dashed #e5e5e5;
    font-size:.16rem;
    width:3.0527rem;
    .pro-price{
      color:#666;
      margin:.06005rem 0 .03003rem 0;
      position:relative;
      .price{
        font-size:.24rem;
        color:#dd0000;
        margin-right:.04004rem;
        font-weight: bold;
      }
    }
    .pro-self{
      float:left;
      overflow: hidden;
      margin:.03003rem .04004rem 0 0;
      .zy{
        font-size:.12rem;
        float:left;
        width:.26021rem;
        height:.1501rem;
        line-height:.1501rem;
        text-align: center;
        border:.005rem solid #000;
        
      }
    }
  }
  .pro-user{
    float:right;
    margin:.08009rem 0;
    width:.70063rem;
    height:100%;
    text-align: center;
    box-sizing: border-box;
    .pro-num{
      font-size:.14rem;
      color:#76ac01;
      margin-bottom:.02003rem;
    }
    .pro-text{
      font-size:.1rem;
      color:#76ac02;
      margin-bottom:.06rem;
    }
    .pro-btn{
      width:.33021rem;
      height:.1601rem;
      line-height:.1601rem;
      box-sizing: border-box;
      border:.005rem solid #999;
      font-size:.1rem;
      color:#333;
      text-align: center;
      margin:0 auto;
    }
  }
}
.border{
   border-bottom:.01rem solid #eee;
}
.pro-place{
  padding:0 .16015rem;
  height:.49042rem;
  line-height:.49042rem;
  font-size: .16rem;
  overflow: hidden;
  div{
    float:left;
  }
  .pro-place-label{
    color:#666;
    font-weight: bold;
    margin-right:.07007rem;
  }
  .gq{
      width:.1501rem;
      height:.1501rem;
      margin:0 .06005rem -0.02501rem 0;
    }
}
.pro-place div:first-child{
  text-align: left;
  width:36%;
}
.pro-info-num{
  padding:0 .16015rem;
  height:.49042rem;
  line-height:.49042rem;
  font-size:.16rem;
  position:relative;
  .label{
    float:left;
    margin-right:.10509rem;
    font-weight: bold;
    color:#666;
  }
}
.fl{
  float:left;
}
.deliver{
  font-size:.16rem;
  padding:.12011rem .16015rem;
  overflow: hidden;
  .label{
    float:left;
    margin-right:.10509rem;
    color:#666;
    font-weight: bold;
  }
  .address{
    float:left;
    width:2.7124rem;
  }
  .fa-angle-right{
    font-size:.16rem;
    margin-bottom:-0.03003rem;
    color:#e5e5e5;
  }
}
.recommand{
  padding-left:.16015rem;
  margin-bottom:.5rem;
  .title{
    height:.49042rem;
    line-height:.49042rem;
    font-size:.18rem;
    color:#666;
    font-weight: bold;
  }
  .sp{
    ul{
      overflow: hidden;
      li{
        width:1rem;
        height:1.21073rem;
        position: relative;
        margin-right:.18016rem;
        float: left;
        img{
          width:.86073rem;
          height:.86073rem;
          position:absolute;
        }
        .sp-info{
          font-size:.12rem;
          margin-top:.02503rem;
          position:absolute;
          top:.8rem;
          left:.08rem;
          width:.84rem;
        }
        .sp-price{
          margin-top:.02503rem;
          height:.16rem;
          position:absolute;
          top:1rem;
          left:.18rem;
          span{
            color:#dd0000;
            font-size:.12rem;
            position:absolute;
          }
        }
      }
    }
  }
}
.om{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
