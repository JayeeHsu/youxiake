<template>
    <div class="home">
        <Banner></Banner>
        <Icons></Icons>
        <Tabs></Tabs>
        <Scroll></Scroll>
        <Swiper></Swiper>
        <Spike :spikeList='spikeList'></Spike>
        <Like :likeList="likeList"></Like>
        <Footer></Footer>
    </div>
</template>

<script>
    import Banner from './Banner'
    import Icons from './Icons'
    import Tabs from './Tabs'
    import Scroll from './Scroll'
    import Swiper from './Swiper'
    import Spike from "./Spike"
    import Like from './Like'
    import Footer from "./Footer"
    import {mapState} from 'vuex'

    export default {
        components: {
            Banner,
            Icons,
            Tabs,
            Scroll,
            Swiper,
            Spike,
            Like,
            Footer,
        },
        data() {
            return {
                spikeList: [],
                likeList: [],
                lastCity:'',
            }
        },
        computed: {
            ...mapState(["cityName"])
        },

        mounted() {
            this.lastCity=this.cityName;
            this.http();
        },
        activated(){
            if(this.cityName!=this.lastCity){//现在的城市名不等于原来的城市名
                this.http();//则请求数据
                this.lastCity=this.cityName;//将现在的城市名赋给lastCity
            }
        },
        methods: {
            http() {//这个方法名可以自定义，不一定要叫http
                let That = this;
                this.axios.get("api/dataHome.json")//接口地址
                    .then((res) => {
                        let data = res.data.data;
                        data.forEach((item) => {
                            if (item.city == That.cityName) {//当前选择的城市与data中对应数据匹配
                                //再将取到的接口中的数据分别存入对应数组
                                That.spikeList = item.spikeList;
                                That.likeList = item.likeList;
                            }
                        })

                    })
            }
        },

    }
</script>
