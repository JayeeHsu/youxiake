<template>
    <div class="like">
        <div class="like-list" v-for="item in likeList" :key="item.id">
            <div class="like-top">
                <div class="top-left">
                    <span>{{item.Introduction}}</span>

                </div>
                <p class="top-right">更多></p>
            </div>
            <div class="like-bottom">
                <div class="bottom-header"
                     :style="{'background':'url('+item.imgUrl+') no-repeat center center' }"
                     @click="toDetails(item)"
                >
                    <div class="mask">
                    </div>
                    <div class="header-info">

                        <span>{{item.title}}</span>
                        <span>￥{{item.price}}起</span>

                    </div>

                </div>
                <ul>
                    <li v-for='v in item.cityList' :key="v.id"
                        @click="toDetails(v)"
                    >
                        <img :src="v.imgUrl" alt="">
                        <span class="title">{{v.title}}</span>
                        <span class="price">￥{{v.price}}起</span>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['likeList'],
        methods: {
            toDetails(item) {
                this.$router.push({
                    path: '/details',
                    query:{
                        item,
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .like {
        margin-top: .7rem;
        font-size: .35rem;
        padding-bottom: 2rem;
    }

    .like-list {

    }

    .like-top {
        display: flex;
        justify-content: space-between;
        border-top: 1px #eee solid;
        border-bottom: 1px #eee solid;
        height: .66666666rem;
    }

    .like-top .top-left {

        padding-top: .1rem;
        position: relative;
        align-items: center;
        justify-content: center;

    }

    .like-top:before {
        /*前面橙色的部分*/
        position: absolute;
        content: "";
        background: #fed101;
        width: .08rem;
        height: .66666666rem;
    }

    .like-top .top-left span {
        padding-left: .5rem;
        font-size: .5rem;
    }

    .like-top .top-right {
        padding-top: .1rem;
        padding-right: .5rem;
        color: #999;
        font-weight: 500;
        font-size: .4rem;
    }

    .like-bottom {
        padding: .3rem;
    }

    .like-bottom .bottom-header {
        position: relative;
        background: url('/img/like1.jpg') no-repeat;
        height: 4.4666666rem;
        width: 100%;
        background-size: 100%;
    }

    .like-bottom .bottom-header .header-info {
        position: absolute;
        bottom: .26rem;
        left: .2rem;
        display: flex;
        justify-content: space-between;
        z-index: 2;
    }

    .like-bottom .bottom-header .mask:after {
        position: absolute;
        top: 80%;
        left: 0;
        content: "";
        background-color: black;
        opacity: 0.5;
        z-index: 1;
        width: 100%;
        height: 20%;
        transition: opacity;
    }

    .like-bottom .bottom-header .header-info span:nth-child(1) {
        font-size: .5rem;
        color: white;
        font-weight: 700;
        wdith: 5.78rem;
        /*-webkit-text-stroke: .5px cadetblue;*/
        /*给文字加一个青色的描边*/
        display: block;
        width: 5.78rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .like-bottom .bottom-header .header-info span:nth-child(2) {
        font-size: .45rem;
        color: orange;
        font-weight: 500;
        margin-left: .9rem;
    }

    .like-bottom ul {
        margin-top: .2rem;
        display: flex;
        justify-content: space-between;
    }

    .like-bottom ul li {

    }

    .like-bottom ul li img {
        width: 2.96rem;
        height: 1.95rem;
    }

    .like-bottom ul li span.title {
        font-size: .35rem;
        display: block;
        margin-top: .2rem;
        height: .6933333rem;
        width: 100%;
        display: block;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    .like-bottom ul li span.price {

        display: block;
        font-size: .5rem;
        color: orange;
        font-weight: 500;
        font-size: .35rem;
    }
</style>