<template>
    <div>
        <div class="banner">
            <div v-show="false">左侧弹出黑色部分</div>
            <div class="banner-header">
                <div class="banner-top">
                    <div class="top-left">
                        北京
                        <i class="iconfont ">&#xe6aa;</i>
                    </div>
                    <div class="top-search">
                        <i class="iconfont">&#xe610;</i>
                        泰国
                    </div>
                    <div class="top-right">
                        <img src="@/assets/img/show.png" alt="">
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
                        <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>

                </div>

            </div>

        </div>
    </div>
</template>
<style scoped>
    .banner-header {
        background: #f6f6f6;
        width: 100%;
        height: 5.6rem;
        postion: relative;
    }

    .banner-top {
        z-index: 2;
        position: absolute;
        left: 0;
        top: 1rem;
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
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
    }

</script>