<template>
    <div class="nav-box">
        <Loading v-show = 'loading'></Loading>
        <van-tabs @click="onClick">
            <van-tab v-for="list in dataList" :key="list.appModelId"  :title="list.appModelName" >
            </van-tab>
        </van-tabs>
        <i class = "fa fa-th-large"></i>
        
    </div>
</template>
<script>

import axios from 'axios'
import { Tab, Tabs } from 'vant';
import { log } from 'util';
export default {
    data(){
        return{
            dataList: [],
            loading: true 
        }
    },
    methods:{
        log(){
            console.log(1)
        },
        onClick(index, title) {
            this.$http
            .get('/static/data/nav.json')
            .then(
                res=>{
                    res.data.data.appModels.map((v)=>{
                        if(v.appModelName===title){
                            this.$router.push({ path: v.url })
                        }
                    })
                    this.loading = false
                }
            )
            .catch(error => console.log(error))
        }
    },
    created(){
          this.$http
         .get('/static/data/nav.json')
         .then(
             res=>{
                 this.dataList = res.data.data.appModels
                 this.loading = false
             }
         )
         .catch(error => console.log(error))
    }
}
</script>
<style lang="scss" scoped>
    .nav-box{
        font-size:.16rem;
        position: fixed;
        top:.495rem;
        width:3.75rem;
        z-index:100;
        background:#fff;
        .van-tabs--line{
            width:3.4rem;
        }
        i{
            position:absolute;
            top:.14rem;
            right:.16rem;
            color:#dad8d8;
        }
    }
</style>


