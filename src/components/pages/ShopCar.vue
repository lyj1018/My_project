<template>
  <div class="shopcar-box">
    <div class = "shopcar-top">
      <i class = "fa fa-angle-left"
          @click = 'back'
        ></i>
      <div class = "shopcar-title">购物车</div>
    </div>
    <div class = "main" v-if = 'cars.length == 0'>
      <div class = "main-car">
        <img src="https://is.sfimg.cn/webapp/images/webapp2.0/model/ht/cart-none.png" alt="">
      </div>
      <div class = "main-title">
        购物车无商品
      </div>
      <div class = "shopcar-foot">
        <div class = "go">
          <router-link to= '/home'>去逛逛</router-link>
        </div>
      </div>
    </div>
    <div  class = "cars" v-if = 'cars.length != 0'>
      <div class = "pro-car">
        <div class = "car-title">
          <span class = "checked" >
            <van-icon name="checked" class = "check" />
          </span>
          <span class = "pro-name">优选普通商品</span>
        </div>
      </div>
      <div class="warehouse-body">
          <div class="cartitem"
            v-for = 'car in cars'
            :key = 'car.productId'
          >
            <div class="cartitem-left">
              <span class = "checked" >
            <van-icon name="checked" class = "check" />
          </span>
            </div>
            <div class="cartitem-right">
              <div class="cartitem-image">
                <img alt :src="car.imageUrl">
              </div>
              <div class="cartitem-detail">
                <a class="cartitem-title-wrapper" href="#">
                  <div class="cartitem-title"> {{car.productName}}                   
                  </div>
                </a>

                <div class="cartitem-lo">
                  <div class="cartitem-info">
                    <div class="cartitem-price">
                      <span>￥{{ car.activityPrice}}</span>
                    </div>
                  </div>
                  <div class="cartitem-ops">
                    <div class="numberinput">
                      <div class="numberinput-minus numberinput-disabled" @click = 'reduceCar(car)'>
                        <div class="numberinput-minus-hotarea"></div>
                      </div>
                      <div class="numberinput-value">{{car.num}}</div>
                      <div class="numberinput-plus" @click = 'addCar(car)'>
                        <div class="numberinput-plus-hotarea"></div>
                      </div>
                    </div>
                    <div class="cartitem-del-wrapper">
                      <div class="cartitem-del"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    <footer >
      <div class="billbar">
        <div class="billbar-left">
          <span class = "checked" >
            <van-icon name="checked" class = "check" />
          </span>
        </div>
        <div class="billbar-center">
          <div class="billbar-price">
            <div class="billbar-price-label">
              总价
              <span>（不含运费）</span>：
            </div>
            <div class="billbar-price-value">￥{{total.Price}}</div>
          </div>
        </div>
        <div class="billbar-right">
          <div class="billbar-button">
            结算
            
          </div>
        </div>
      </div>
    </footer>
    </div> 
  </div>
</template>

<script>
import {mapActions, mapGetters,mapState} from 'vuex'
import { Icon } from 'vant'
export default {
 name: 'ShopCar',
 data(){
   return{}
 },
  created() {
    console.log(this.cars);
  },
  methods: {
    ...mapActions(["addCar", "reduceCar"]),
    back(){
    this.$router.go(-1)
     }
  },
 computed: {
    ...mapGetters(["total"]),
    ...mapState({
      cars: state => state.cars
    })
  }
}
</script>

<style scoped lang = 'scss'>
.shopcar-top{
  height:.45rem;
  border-bottom:.01rem solid #dcdcdc;
  .shopcar-title{
    font-size:.18rem;
    text-align: center;
    line-height:.45rem;
  }
}
.shopcar-box{
  width:3.75rem;
}
.main{
  background:#efefef;
  height:3.9rem;
  .main-car{
    text-align: center;
    img{
      width:.6005rem;
      height:.5504rem;
      margin-top:.65059rem;
      margin-bottom:.52rem;
    }
  }
  .main-title{
    font-size:.16rem;
    color:#969696;
    text-align: center;
  }
  .go{
    font-size:.18rem;
    width:1.261rem;
    height:.3703rem;
    border:.01rem solid #69af00;
    text-align: center;
    line-height:.3703rem; 
    background:#fff;
    margin-left:.75rem;
    a{
      color:#69af00;
    }
  }
  .shopcar-foot{
    padding:.31028rem .50046rem;
  }
}
.checked{
  font-size:.1706rem;
  float:left;
  margin-top:.1024rem;
}
.pro-name{
  font-size:.14rem;
  padding:.1024rem 0 0 .1152rem;
  float:left;
}
.car-title{
  height:.38396rem;
  padding:0 .1024rem;
  border-bottom:.04rem solid #f0f2f6;
}
 .warehouse-body {
        .cartitem {
          display: flex;
          color: #333;
          font-size: 0.12rem;
          padding: 0.1rem 0 0;
          background-color: #fff;
          border-bottom: 1px solid #f0f0f0;
          .cartitem-left {
            display: flex;
            width: 0.3798rem;
            height: 0.7998rem;
            justify-content: center;
            align-items: center;
          }
          .cartitem-right {
            display: flex;
            width: 3.37rem;
            padding-bottom: 0.1rem;
            .cartitem-image {
              position: relative;
              width: 0.7998rem;
              height: 0.7998rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .cartitem-detail {
              display: flex;
              width: 2.57rem;
              flex-direction: column;
              padding: 0 0.075rem;
              .cartitem-title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color:#000;
                .tag {
                  display: inline-block;
                  margin-right: 0.02rem;
                  border: 1px solid #ff8587;
                  color: #ff8587;
                }
              }
              .cartitem-lo {
                display: flex;
                justify-content: space-between;
                margin-top: 0.09rem;
                .cartitem-info {
                  height: 0.5398rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  margin-right: 0.05rem;
                  .cartitem-price {
                    display: flex;
                    align-items: flex-end;
                    line-height: 1;
                    font-weight: 700;
                    font-size: 0.13rem;
                    margin-top: 0.5rem;
                    color:#e31436;
                  }
                }
                .cartitem-ops {
                  display: flex;
                  flex-direction: column;
                  .numberinput {
                    display: inline-block;
                    border: 1px solid #aaa;
                    border-radius: 2px;
                    overflow: hidden;
                    display: flex;
                    .numberinput-minus {
                      width: 0.24rem;
                      height: 0.25rem;
                      position: relative;
                      border-right: 1px solid #aaa;
                    }
                    .numberinput-minus:before {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate3d(-50%, -50%, 0);
                      content: "";
                      display: block;
                      width: 0.1rem;
                      height: 0.02rem;
                      background-color: #666;
                    }
                    .numberinput-value {
                      min-width: 0.4rem;
                      line-height: 0.25rem;
                      text-align: center;
                      font-weight: 700;
                    }
                    .numberinput-plus {
                      width: 0.24rem;
                      height: 0.25rem;
                      position: relative;
                      border-left: 1px solid #aaa;
                    }
                    .numberinput-plus:before {
                      width: 0.1rem;
                      height: 0.02rem;
                    }
                    .numberinput-plus:after {
                      width: 0.02rem;
                      height: 0.1rem;
                    }
                    .numberinput-plus:before,
                    .numberinput-plus:after {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate3d(-50%, -50%, 0);
                      content: "";
                      display: block;
                      background-color: #666;
                    }
                    .numberinput-disabled:before {
                      background-color: #ccc !important;
                    }
                  }
                  .cartitem-del-wrapper {
                    display: flex;
                    flex: 1;
                    justify-content: flex-end;
                    align-items: flex-end;
                    min-width: 0.929rem;
                    margin-top: 0.05rem;
                    .cartitem-del {
                      width: 0.145rem;
                      height: 0.165rem;
                      background-image: url(/static/img/del-icon.png);
                      background-repeat: no-repeat;
                      background-size: 100% auto;
                      background-position: 50%;
                    }
                  }
                }
              }
            }
          }
        }
      }

footer {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    width:3.75rem;
    .billbar {
      display: flex;
      height: 0.5rem;
      align-items: stretch;
      background-color: #fff;
      .billbar-left {
        display: flex;
        box-sizing: border-box;
        border-top: 1px solid #ccc;
        font-size: 0.12rem;
        align-items: center;
        padding-left: 0.1rem;
        .checkbox {
          display: flex;
          align-items: center;
          img {
            width: 0.2rem;
            height: 0.2rem;
          }
        }
      }
      .billbar-center {
        display: flex;
        box-sizing: border-box;
        border-top: 1px solid #ccc;
        flex: 1;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        padding-right: 0.1rem;
        .billbar-price {
          display: flex;
          font-size: 0.13rem;
          color: #333;
          .billbar-price-value {
            color: #e31436;
            font-weight: 700;
          }
        }
        .billbar-fee {
          display: flex;
          font-size: 0.11rem;
          color: #999;
        }
      }
      .billbar-right {
        display: flex;
        align-items: stretch;
        .billbar-button {
          background-color: #87d50d;
          padding: 0 0.25rem;
          color: #fff;
          font-size: 0.15rem;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .fa-angle-left{
    font-size:.24rem;
    float:left;
    margin-left:.3rem;
    margin-top:.1rem;
  }
  .cars{
    width:3.75rem;
  }
</style>
