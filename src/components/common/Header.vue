

<template>
  <div class="header-box">
    <van-search placeholder="请输入搜索关键词" />
  </div>
    
  
</template>

<script>
import { Search } from 'vant';
export default {
 name: 'Header',
}
</script>

<style scoped lang = "scss">
  .header-box{
    height:.495rem;
    position:fixed;
    top:0;
    left:0;
    width:3.75rem;
    z-index:100;
    background:#fff;
  }
</style>
