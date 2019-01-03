<template>
    <div>
        <headernav><span class="header-span">健身技巧</span></headernav>
        <div class="calc-content">
            <div v-for="item in userTarget.Items">
                <p>{{item.name}}</p>
                <button @click="recordCard(item)">{{item.status==0?'打卡':'已打卡'}}</button>
            </div>
        </div>
    </div>
</template>
<script>
import headernav from '../components/headernav'
import axios from 'axios'
export default{
    name:'record',
    data:function(){
        return {
            userTarget:{}
        }
    },
    methods:{
        recordCard:function(item){
            var id=this.mytool.getCookie('id')
            var _this=this
            if(item.status==0){
                axios.get('/vue-learn/ajaxeight.php?userid='+id+'$cardId='+item.id).then(function(res){
                    if(res.data.message=='成功'){
                        _this.getData();
                    }
                }).catch(function(err){
                    console.log(err)
                })
            }
        },
        getData:function(){
            var id=this.mytool.getCookie('id');
            var _this=this;
            axios.get('/vue-learn/ajaxseven.php?userid='+id).then(function(res){
                _this.userTarget=res.data;
                // console.log(_this.userTarget);
            }).catch(function(err){
                console.log(err);
            })
        },
    },
    mounted:function(){
        this.getData()
    },
    components:{
        headernav,
    }
}
</script>