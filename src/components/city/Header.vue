<template>
   <header>
       <span>
           选择城市
       </span>
       <router-link to="/">
       <i class="iconfont icon-iconset0127">
       </i>
       </router-link>
   </header>

</template>

<script>
    export default {

    }
</script>

<style scoped>
header{
    background: #fed101;
    text-align: center;
    height: 1.173rem;
    line-height: 1.173rem;
    font-size: .4rem;
    position: relative;

}
header span{
    color: #333;
    font-weight: 700;
}
    header i{
        position: absolute;
        right: .3rem;
        font-size: .6rem;
        font-weight: 700;
        color: black;
    }
</style>