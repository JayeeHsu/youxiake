<template>
    <div>
        <div class="banner">
            <transition
                    enter-active-class="fadeInLeft"
                    leave-active-class="fadeOutLeft"
            >
                <div class="banner-left animated" v-show="toshow"></div>
            </transition>

            <div class="banner-header">
                <div class="banner-top">
                    <div class="top-left" @click="toCity">
                        {{cityName}}
                        <i class="iconfont ">&#xe6aa;</i>
                    </div>
                    <div class="top-search">
                        <i class="iconfont">&#xe610;</i>
                        意大利
                    </div>
                    <div class="top-right">
                        <img src="@/assets/img/show.png"
                             @click="toShow"
                        >
                    </div>
                </div>
                <div class='banner-swiper'>

                    <swiper :options="swiperOption">
                        <!-- slides -->
                        <swiper-slide>
                            <img src="@/assets/img/banner1.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/banner2.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/banner3.png" alt="">
                        </swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>

                </div>

            </div>

        </div>
    </div>
</template>
<style scoped>
    .banner-left {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        background: #000;
        width: 6.666666rem;
        height: 100%;
    }

    .banner-header {
        background: #f6f6f6;
        width: 100%;
        height: 5.6rem;
        postion: relative;
    }

    .banner-top {
        z-index: 2;
        position: absolute;
        left: 0rem;
        top: .3rem;
        height: .8rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top-left {
        padding: .2rem .4rem;
        color: white;
        font-size: .4266666rem;
    }

    .top-search {
        flex: 1;
        color: #333;
        background: white;
        border-radius: .1rem;
        font-size: .37333rem;
        padding: .2rem .2rem;
    }

    .top-right {
        padding: .2rem .4rem;
    }

    .top-right img {
        height: .6rem;
        width: .6rem;
    }

    .banner-swiper {
        width: 100%;
        height: 5.6rem;
    }

    .banner-swiper img {
        width: 100%;
        height: 100%;
    }

    .swiper-pagination >>> .swiper-pagination-bullet-active {
        background: orange;
    }
</style>

<script>
    import {mapState} from 'vuex';
    export default {
        computed:{
            ...mapState(['cityName'])
        },
        data () {
            return {

                toshow: false,
                swiperOption: {
                    loop: true,
                    // pagination: '.swiper-pagination',
                    // paginationClickable: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },

        methods: {
            toShow() {
                this.toshow = !this.toshow;
            },
            toCity(){
                this.$router.push({
                    path:'/city',
                })
            },
        },
    }


</script>

