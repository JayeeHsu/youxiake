<template>
    <div class="scroll">
        <div class="scroll-content">
            <div class="scroll-right">
                <ul v-for="item in scrollList" :key="item.id" :class="{animatedTop}">
                    <li>
                        <img src="@/assets/img/scroll.png" alt="">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data: function () {
            return {
                animatedTop: false,
                scrollList: [
                    {
                        id: 0,
                        title: "游侠攻略111"
                    },
                    {
                        id: 1,
                        title: "游侠攻略222"
                    },
                    {
                        id: 2,
                        title: "游侠攻略333"
                    },
                    {
                        id: 3,
                        title: "游侠攻略444"
                    },
                    {
                        id: 4,
                        title: "游侠攻略555"
                    },
                    {
                        id: 5,
                        title: "游侠攻略666"
                    }
                ],


            }
        },
        mounted() {
            this.showScroll();
        },
        methods: {
            showScroll() {
                setInterval(() => {
                        this.animatedTop = true;
                        setTimeout(() => {
                                /*删除第一个元素,并把第一个元素加到最后
                                shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
                                this.scrollList.push(this.scrollList.shift());
                                this.animatedTop = false;//将类取消,下次加上类(59行的this.animatedTop=true;)时,才会再次执行动画
                            }, 500//设置500ms延迟用于完成动画(transition: transform .5s;)
                        )
                    },
                    2500//每2.5s进行一次动画，这意味着进行完0.5s的动画后有2s的停滞时间供用户阅读信息
                )
            },
        }

    }
</script>

<style scoped>
    .animatedTop {
        transition: transform .5s;
        transform: translateY(-100%);
    }

    .scroll {

    }

    .scroll-content {
        background: url('../../assets/img/scrollbg.png') no-repeat;
        background-size: 100%;
        width: 100%;
        height: 1.3333333rem;
        position: relative;
    }

    .scroll-right {
        position: absolute;
        right: 0;
        width: 8.1333333rem;
        height: 1.3333333rem;
        overflow: hidden;
    }

    li {
        font-size: .35rem;
        color: #333;
        line-height: .66666666rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    li img {
        width: .16rem;
        height: .16rem;
    }

</style>