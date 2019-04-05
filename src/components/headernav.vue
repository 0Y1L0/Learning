<template>
    <div class="headernav-content">
        <span class="header-left-span iconfont icon-huitui" @click='goback'></span>
        <div class='title'><slot></slot></div>
        <span class="header-right-span iconfont icon-xiaoxi"></span>
    </div>
</template>
<script>
export default {
    name:'headernav',
    data(){
        return {}
    },
    methods:{
        goback:function(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.headernav-content{
    z-index: 999;
    box-sizing: border-box;
    height:52px ;
    background-color: #777;
    position: fixed;
    top: 0;
    width: 100%;
    color:white;
    padding:15px 0;
}
/* .headernav-content .icon-huitui{
    font-size:20px;
} */
.header-left-span,.header-right-span{
    position:absolute;
    font-size:22px;
}
.header-left-span{
    left:10px;
}
.header-right-span{
    right: 10px;
}
.title{
    display:inline-block;
    font-size:20px;
}
</style>