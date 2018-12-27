<template>
    <div>
        <headernav><span class="header-span">健身技巧</span></headernav>
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in bannerlist">
                <img class="banner-img" :src="slide.imgurl"/>
                <div class="slide-title">{{slide.mes}}</div>
            </swiper-slide>
        </swiper>
        {{articleList}}
        <div v-for='item in articleList'><!--@click='tosee(item.id)-->
            <router-link :to="'/articledetail?id='+item.id">
              <h4>{{item.title}}</h4>
              <p>{{item.content}}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import headernav from '../components/headernav'
import { swiper,swiperSlide} from 'vue-awesome-swiper'
import axios from "axios"
export default{
    name:'news',
    data:function(){
        return{
            bannerlist:[
                {imgurl:"../../static/img/b1.jpg",title:"this is title1"},
                {imgurl:"../../static/img/b2.jpg",title:"this is title2"},
                {imgurl:"../../static/img/b3.jpg",title:"this is title3"},
                {imgurl:"../../static/img/b4.jpg",title:"this is title4"},
                {imgurl:"../../static/img/b5.jpg",title:"this is title5"},
                {imgurl:"../../static/img/b6.jpg",title:"this is title6"},
                {imgurl:"../../static/img/b7.jpg",title:"this is title7"},
            ],
            swiperOption:{
                loop:true,
                autoplay : {
                   delay:3000,
                   disableOnInteraction: false,
                },
                speed:1000,
            },
            articleList:[]
        }
    },
    methods:{
        // tosee:function(id){
        //     this.$router.push('/articledetail?id='+id)
        // }
    },
    created:function(){
        var _this=this;
        axios.get('/vue-learn/ajaxthree.php').then(res=>{
            _this.articleList=res.data.item;
            // console.log(res)
        }).catch(function(err){
            console.log(err)
        })
    },
    components:{
        headernav,
        swiper,
        swiperSlide
    }
}
</script>
<style scoped>
.swiper-slide{
    height: 0;
    overflow: hidden;
    position: relative;
    padding-bottom: 50%;
}
.banneritem-message{
    position:absolute;
    top:175px;
    text-align: center;
    background-color: rgba(82,79,79,0.6);
    width: 100%;
    height: 35px;
    line-height: 35px;
    color:white;
}
.swiper-slide img{
    width: 100%;
}
.swiper-title{
    position: absolute;
    bottom: 0;
    background-color: rgba(22,18,18,0.5);
    color:white;
    width: 100%;
    text-align: center;
    padding: 8px 0px;
    font-size:12px;
}
</style>