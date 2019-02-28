<template>
    <div class = "list-box">
        <ul>
            <li
                v-for = 'list in lists'
                :key = 'list.id'
            ><img :src="list.img" alt=""></li>
        </ul>
        <p>
            <video src="https://v01.sfbest.com/20190111_aodaliyaniupai_1.mp4" poster="https://v01.sfbest.com/20190111_aodaliyaniupai_1.mp4" controls="" width="100%"></video>
        </p>
        <img src="https://ps.sfimg.cn/article/1547206678.jpg" alt="">
        <img src="https://ps.sfimg.cn/article/1547204544.jpg" alt="">
        <img src="https://ps.sfimg.cn/article/1547204554.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'list',
    data(){
        return{
            lists:[
                {
                    id: 1,
                    img: 'https://ps.sfimg.cn/article/1547619546.jpg'
                },
                {
                    id: 2,
                    img: 'https://ps.sfimg.cn/article/1547206396.jpg'
                },
                {
                    id: 3,
                    img: 'https://ps.sfimg.cn/article/1547204351.jpg'
                },
                {
                    id: 4,
                    img: 'https://ps.sfimg.cn/article/1547204362.jpg'
                },
                {
                    id: 5,
                    img: 'https://ps.sfimg.cn/article/1547204374.jpg'
                },
                {
                    id: 6,
                    img: 'https://ps.sfimg.cn/article/1547204388.jpg'
                },
                {
                    id: 7,
                    img: 'https://ps.sfimg.cn/article/1547208165.jpg'
                },
                {
                    id: 8,
                    img: 'https://ps.sfimg.cn/article/1547204414.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-box{
        img{
            width:100%;
        }
        p{
            margin:0;
        }
    }
</style>


   