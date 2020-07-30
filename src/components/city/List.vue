<template>
    <div class="List">

        <div class="city-item">
            <p>定位/附近城市</p>
            <div v-for="(item,index) in mapCities" :key="index"
                @click="toHome(item.name)"
            >
                {{item.name}}
            </div>
        </div>
        <div class='city-item'>
            <p>
                已开通周边游站点
            </p>
            <div v-for='(item,index) in cities' :key="index"
                 @click="toHome(item.name)"
            >
                {{item.name}}
            </div>
        </div>
        <div class='city-item'>
            <p>
                热门玩乐城市
            </p>
            <div v-for='(item,index) in hotCities' :key="index"
                 @click="toHome(item.name)"
            >
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        data() {
            return {
                mapCities: [],
                cities: [],
                hotCities: [],
            }
        },
        mounted() {
            let That = this;
            this.axios.get("/api/city.json")
                .then((res) => {
                    let data = res.data.data;
                    That.mapCities = data.mapCities;
                    That.cities = data.cities;
                    That.hotCities = data.hotCities;
                })
        },
        methods: {
            ...mapMutations(['changeCity']),
            toHome(cityName){
                this.$router.push({//返回首页
                    path:"/",
                });
                this.changeCity(cityName);
            },

        },
    }
</script>

<style scoped>
    .city-item {
        margin-top: .3rem;
        padding-left: .4rem;
        color: #999999;
        font-size: .45rem;
    }

    .city-item p {
        padding: .3rem 0;
    }

    .city-item div {
        display: inline-block;
        width: 2rem;
        height: .82rem;
        line-height: .82rem;
        border: 1px solid #7e8c8d;
        border-radius: .2rem;
        text-align: center;
        margin-right: .4rem;
        margin-bottom: .2rem;
        box-sizing: border-box; /*不计算边框*/
    }
</style>