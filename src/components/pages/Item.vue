<template>
    <div class = "item-box">
        <Header></Header>
        <Nav></Nav>
        <div class = "item-top">
            <img src="https://ps.sfimg.cn/mapp/resource/84/84f7b0d22dda478a5e29fe6bc16bb043.jpg" alt="">
        </div>
        <Loading v-show = 'loading'></Loading>
        <div class = "list">
            <ul>
                <li
                    v-for = 'list in dataList'
                    :key = 'list.productId'
                >
                    <div class = "list-img">
                        <img :src="list.imageUrl" alt="">
                    </div>
                    <div class = "list-info">
                        <div class = "list-name">
                            <span class = "zy">自营</span>
                            {{list.productName}}
                        </div>
                        <div class = "list-label"></div>
                        <div class = "list-price">
                            <span>￥{{list.activityPrice01}}</span>
                            <span>{{list.activityPrice02}}</span>
                        </div>
                        <van-icon name="add-o" class = "icon"/>
                    </div>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../common/Header'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import { Icon } from 'vant';
import axios from 'axios'
import qs from 'qs'
export default {
    name: 'item',
    components:{
        Header,Nav,Footer
    },
    data(){
        return{
            dataList:[],
            loading: true,
        }
    },
    created(){
        axios.post('/sf/getHomeTabDetail',qs.stringify({
            pageNo: 1,
            pageSize: 15,
            appModelId: 63
        })).then( res =>{
            this.dataList = res.data.data.appModelPage.appModel.appModelProductResource
            this.loading = false
        }) .catch(error => console.log(error))
    }
}
</script>

<style lang="scss" scoped>
.item-box{
    margin-top:.935rem;
    .item-top{
        img{
            width:3.75rem;
            height:2.1669rem;
        }
    }
    .list{
        ul{
            margin-bottom:.5385rem;
            li{
                overflow: hidden;
                padding:.14014rem 0;
                margin:0 .16015rem;
                border-bottom:.01rem solid #eee;
                .list-img{
                    float:left;
                    width:1.0805rem;
                    height:1.0805rem;
                    img{
                        width:1.0805rem;
                        height:1.0805rem;
                    }
                }
                .list-info{
                    float:left;
                    margin-left:.11011rem;
                    width:2.2411rem;
                    position: relative;
                    .list-name{
                        font-size:.14rem;
                        margin-top:.0205rem;
                        .zy{
                            font-size: .12rem;
                            margin-top:.03rem;
                            margin-right:.07rem;
                            padding:0 .03rem;
                            height:.12rem;
                            line-height:.12rem;
                            text-align: center;
                            border:.01rem solid #000;
                            box-sizing: border-box;
                        }
                    }
                    .list-price{
                        font-size:.16rem;
                        margin-top:.2rem;
                        color:#ff8200;
                    }
                    .icon{
                        font-size:.28rem;
                        position: absolute;
                        right:0;
                        bottom:-0.02rem;
                        color:#bff5bf;
                    }
                    .list-label{
                        margin-top:.075rem;
                        height:.1351rem;
                    }
                }
            }
        }
        
    }
}
    
</style>


