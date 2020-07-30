<template>
    <footer>
        <a href="">
            <img src="@/assets/img/footer1.png" alt="">
            <span>首页</span>
        </a>
        <a href="">
            <img src="@/assets/img/footer2.png" alt="">
            <span>订单</span>
        </a>
        <a href="">
            <img src="@/assets/img/footer3.png" alt="">
            <span>个人中心</span>
        </a>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
footer{
    position: fixed;
    bottom: 0;
    z-index: 9999;
    background: white;
    width: 100%;
    height: 1.4666666666rem;
    display: flex;
    justify-content: center;
    align-items: center;

}
    footer a{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    footer a img{
        width: .72rem;
        height: .72rem;
    }
    footer a span{
        padding-top: .1rem;
        font-size: .5rem;
        display: block;
    }
</style>