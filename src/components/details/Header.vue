<template>
    <header>
        <router-link to="/">
        <div class="header-left">
            ⇦
        </div>
        </router-link>

        <div class="header-title">
            活动详情
        </div>
        <div class="header-right">

        </div>
    </header>
</template>

<script>
    export default{
        methods:{
            toHome(){
                this.$router.push({
                    path:"/"
                })
            }
        }
    }
</script>

<style scoped>
    header{
        height: 1.2rem;
        background: #f7f7f7;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-left{
        padding-left:.5rem;
    }
    .header-title{
        font-size:.7rem;
        font-weight: 800;
    }
    .header-right{
        padding-right:.5rem;
    }
</style>