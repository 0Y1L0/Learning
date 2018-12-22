<template>
    <div>
        <headernav><span class="header-span">登录</span></headernav>
        <div class="calc-content">
            <input type="text" name="" v-model="username"/>
            <input type="password" name="" v-model="password"/>
            <button @click='login'>登录</button>
            <pop v-if='popshow' :word='mess' @hidden='fhidden'></pop>
        </div>
    </div> 
</template>
<script>
import axios from 'axios'
import headernav from '../components/headernav'
import cry from 'crypto-js'
import pop from '../components/pop'
export default{
    name:'login',
    data:function(){
        return{
            username:'',
            password:'',
            popshow:false,
            mess: ''     
        }
    },
    components:{
        headernav,
        pop
    },
    methods:{
        login:function(){
            var that=this;
            axios.post('/vue-learn/ajaxfive.php','username='+this.username+'&password='+cry.MD5(this.password).toString()).then(res=>{
                if(res.data.message=="success"){
                    that.setCookie("id",res.data.userId,1);
                    that.setCookie("token",res.data.token,1)
                    that.$router.push('/')
                }else{    
                  that.popshow=true;
                  that.mess=res.data.message;   
                }     
            })
        },
        fhidden:function(){
            this.popshow=false;
        },
        setCookie:function (cname,cvalue,exdays){
            var d = new Date();
            d.setTime(d.getTime()+(exdays*24*60*60*1000));
            var expires = "expires="+d.toGMTString();
            document.cookie = cname+"="+cvalue+"; "+expires;
        }
    }
}
</script>