<template>
    <div>
        <!-- <headernav><span class="header-span">文章详情</span></headernav> -->
         <div>{{articlecontent}}</div>
    </div>
</template>
<script>
import headernav from '../components/headernav'
import axios from "axios"
export default{
    name:'news',
    data:function(){
        return{
            articlecontent:''
        }
    },
    activated:function(){//针对被keep-alive包裹的组件
        var _this=this;
        var id=this.$route.query.id;
        console.log(this.$route)
        axios.get('/vue-learn/ajaxfour.php?id='+id).then(function(res){
            _this.articlecontent=res.data;
        }).catch(function(err){
            console.log(err);
        })
    },
    created:function(){
        var _this=this;
        var id=this.$route.query.id;
        console.log(this.$route)
        axios.get('/vue-learn/ajaxfour.php?id='+id).then(function(res){
            _this.articlecontent=res.data;
        }).catch(function(err){
            console.log(err);
        })
    },
    components:{
        headernav,
    }
}
</script>

