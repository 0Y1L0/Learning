<template>
    <div>
        <headernav><span class="header-span">个人中心</span></headernav>
        <div>{{userInfo}}</div>
    </div>
</template>
<script>
import axios from 'axios'
import headernav from '../components/headernav'
export default{
    name:'HelloWorld',
    data:function(){
        return{
            username:'',
            password:'',
            userInfo:''
        }
    },
    mounted:function(){
        var _this=this;
        axios.get('/vue-learn/ajasix.php?userId'+this.mytool.getCookie('id')).then(res=>{
            _this.userInfo=res.data.userName;
            // console.log(res.data)
        })
    },
    methods:{
        login:function(){
            
            
        }
    },
    components:{
        headernav,
    }
}
</script>