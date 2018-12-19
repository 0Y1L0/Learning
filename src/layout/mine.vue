<template>
    <div>
        <headernav><span class="header-span">个人中心</span></headernav>
        <div class="calc-content">
            <input type="text" name="" v-model="username"/>
            <input type="password" name="" v-model="password"/>
            <button @click='login'>登录</button>
        </div>
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
        }
    },
    methods:{
        login:function(){
            axios.post('/vue-learn/ajaxfive.php','username='+this.username+'&password='+this.password).then(function(res){
                // console.log(res)
            })
        }
    },
    components:{
        headernav,
    }
}
</script>