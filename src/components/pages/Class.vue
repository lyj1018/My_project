<template>
  <div class="detail-box">
    <Header></Header>
    <div class = "detail">
      <div class = "detail-l fl">
        <div class = "detail-list"
          v-for = '(list,index) in lists'
          :key = 'list.id'
          @click = 'listactive(list.id)'
          v-on:click = "addClass(index)" v-bind:class="{ on:index==onclass}"
        >
          <div class = "list-title">{{list.title}}</div>
        </div>
      </div>
      <div id = "list" class = "detail-r fl"  v-if = 'listOn == 1'>
        <div class = "detail-r-t">
          <img src="https://ps.sfimg.cn/mapp/resource/3d/3ded926c524a01489c4ed5343167eb48.jpg" alt="">
        </div>
        <div class = "detail-r-title">—— 肉类海鲜 ——</div>
        <div class = "detail-list">
          <ul>
            <li
              v-for = 'item in items'
              :key = 'item.id'
            >
              <div class = "detail-pic">
                <img :src="item.img" alt="">
              </div>
              <div class = "detail-name">{{item.name}}</div>
            </li>
          </ul>
        </div>
      </div>


       <div id = "list" class = "detail-r fl" v-if = 'listOn == 2'>
        <div class = "detail-r-t">
          <img src="https://ps.sfimg.cn/mapp/resource/13/13567fdf8433272d6a1c7d246024f37e.jpg" alt="">
        </div>
        <div class = "detail-r-title">—— 果蔬蛋品 ——</div>
        <div class = "detail-list">
          <ul>
            <li
              v-for = 'menu in menus'
              :key = 'menu.id'
            >
              <div class = "detail-pic">
                <img :src="menu.img" alt="">
              </div>
              <div class = "detail-name">{{menu.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from '../common/Header'
import Footer from '../common/Footer'
export default {
 name: 'Detail',
 components:{
   Header,Footer
 },
 data(){
   return{
     onclass: 0,
     listOn: 1,
     lists:[
       {
         id:1,
         title:'肉类海鲜'
       },
       {
         id:2,
         title:'果蔬蛋品'
       },
       {
         id:3,
         title:'素食冷藏'
       },
       {
         id:4,
         title:'酒水饮料'
       },
       {
         id:5,
         title:'休闲糖巧'
       },
       {
         id:6,
         title:'粮油干货'
       },
       {
         id:7,
         title:'冲调茶饮'
       },
       {
         id:8,
         title:'美妆个护'
       },
       {
         id:9,
         title:'母婴用品'
       },
       {
         id:10,
         title:'营养保健'
       },
       {
         id:11,
         title:'家居用品'
       },
       {
         id:12,
         title:'进口食品'
       }
     ],
     items:[
       {
         id:1,
         img:'https://ps.sfimg.cn/mapp/resource/e7/e754cd306e7a81758015665c2cd4d6da.png',
         name:'礼盒'
       },
       {
         id:2,
         img:'https://ps.sfimg.cn/mapp/resource/fa/fa0afd32afd2f296f64d88336fea6603.png',
         name:'牛肉'
       },
       {
         id:3,
         img:'https://ps.sfimg.cn/mapp/resource/b8/b8b5b2d9d2dac3edc4f1d49ff42d62a9.png',
         name:'羊肉'
       },
       {
         id:4,
         img:'https://ps.sfimg.cn/mapp/resource/52/521f2ea311f1876635dc52a8787a6c18.png',
         name:'家禽'
       },
       {
         id:5,
         img:'https://ps.sfimg.cn/mapp/resource/72/72ed70bc88e82af0eacfa0922686f6f5.png',
         name:'虾'
       },
       {
         id:6,
         img:'https://ps.sfimg.cn/mapp/resource/66/66da27bfb54dc0e4723730a0ebfccdcc.png',
         name:'鱼'
       },
       {
         id:7,
         img:'https://ps.sfimg.cn/mapp/resource/73/73c269850f9ef2ab3dcf67e99a7200d5.png',
         name:'加工类'
       },
       {
         id:8,
         img:'https://ps.sfimg.cn/mapp/resource/7b/7b2bf419595f55894c0c032f43870c6d.png',
         name:'大闸蟹'
       }
     ],
     menus:[
       {
         id:1,
         img:'https://ps.sfimg.cn/mapp/resource/08/08763fe302a495e62c77b225fc765d1d.png',
         name:'柑橘橙柚'
       },
       {
         id:2,
         img:'https://ps.sfimg.cn/mapp/resource/a8/a80a4a858b1567678e93b7085f55ca87.png',
         name:'蛋类'
       },
       {
         id:3,
         img:'https://ps.sfimg.cn/mapp/resource/a7/a7e7d9877fcc19003ffd791d5e393ae0.png',
         name:'菜品'
       },
       {
         id:4,
         img:'https://ps.sfimg.cn/mapp/resource/7f/7f7c9c574e1843572dcb6bcca1d4a7ea.png',
         name:'坚果类'
       },
       {
         id:5,
         img:'https://ps.sfimg.cn/mapp/resource/e2/e23d9c3f898dddffe8511e1d9373b970.png',
         name:'车厘子'
       },
       {
         id:6,
         img:'https://ps.sfimg.cn/mapp/resource/db/dba0e76910c5f3888fd8c5d3626e5d9f.png',
         name:'苹果/梨'
       },
       {
         id:7,
         img:'https://ps.sfimg.cn/mapp/resource/da/dad2f9437d8564b8cebd7b7071a3ed2b.png',
         name:'莓类'
       },
       {
         id:8,
         img:'https://ps.sfimg.cn/mapp/resource/ae/ae84016d30dac3964085627991a4529b.png',
         name:'热带水果'
       }
     ]
   }
 },
 methods:{
   addClass(index){
     this.onclass = index;
     
   },
   listactive(id){
      this.listOn = id;
   }
 }
}
</script>

<style scoped lang = "scss">
  .detail{
    margin-top:.495rem;
  }
  .detail-l{
    width:.70063rem;
    background:#f9f9f9;
  }
  .detail-list{
    font-size:.16rem;
    height:.7135rem;
  }
  .list-title{
    padding:.15013rem .19018rem;

  }
  .on{
    background:#fff;
  }
  .fl{
    float:left;
  }
  .detail-r{
    font-size:.14rem;
    width:3.05rem;
    .detail-r-t{
      margin-top:.12011rem;
      margin-left:.17rem;
      width:2.7rem;
      img{
        width:2.7rem;
        height:1.0008rem;
      }
    }
    .detail-r-title{
      text-align: center;
      margin-top:.18016rem;
      color:#999999;
    }
    .detail-pic{
      padding: 0 .2202rem 0 .24021rem;
      img{
        width:.5504rem;
        height:.5504rem;
      }      
    }
    .detail-name{
      font-size:.12rem;
      text-align: center;
      color:#7e7e7e;
      margin:.05006rem 2.003px 0 0;
      padding:0 .05006rem;
    }
    .detail-list{
      width:3.0527rem;
      ul{
        li{
          float:left;
          margin:.15013rem 0 .2202rem 0;

        }
      }
    }
  }
</style>
