<template>
    <div class="news-container">
        <!-- <headernav><span class="header-span">健身技巧</span></headernav> -->
        <div class='slide-container'>
            <swiper :options="swiperOption">
                <swiper-slide v-for="slide in bannerlist">
                    <img class="banner-img" :src="slide.imgurl"/>
                    <div class="slide-title">{{slide.mes}}</div>
                </swiper-slide>
            </swiper>
        </div>      
        <div class="topic-container">
            <head>话题讨论</head>
            <div class="topic-component">
                <router-link to="" v-for="topic in topiclist">
                    <div class="topic-page"><img :src="topic.imgurl"/></div>
                </router-link>
            </div>
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
            topiclist:[
                {imgurl:"../../static/img/a1.JPG"},
                {imgurl:"../../static/img/a2.JPG"},
                {imgurl:"../../static/img/a3.JPG"}, 
            ],
            swiperOption:{
                loop:true,
                autoplay : {
                   delay:3000,
                   disableOnInteraction: false,
                },
                speed:1000,
            },
            articleList:[],//get请求获取
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
.news-container{ 
}
.topic-container{
    padding:20px 10px;
    text-align: left;
}
.topic-page{
    margin-bottom:5px;
}
.topic-page img{
    width: 100%;
}
head{
    display:block;
    margin-bottom: 20px;
}
.slide-container{
    height:223px;
    background-color: #cccc;
}
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