<template>
   <div class="login-content">
      <!-- <headernav>登陆</headernav> -->
      <div class="logonwrap"><img src="../../static/img/lflog.png"></div>
      <div class="primary-input-content inputforuser">
         <label for='username'>用户名：</label>
         <input type="text" v-model="username" name="username" id='username'/>
      </div>
      <div class="primary-input-content inputforuser">
         <label for='password'>密码：</label>
         <input type="password" v-model="password" name="password" id='password'/>
      </div>
      <div class="loginbutton-group">
        <button @click="login" class="loginin login-in-use">登陆</button>
        <router-link to="/sign">
          <button class="loginin login-un-use">注册</button>   
        </router-link>
      </div>
   </div>
</template>

<script type="text/javascript">
import headernav from '../components/headernav'
import axios from "axios"
export default {
    name:"siginin",
    props:['type'],
	data:function(){
		return {
            username:"",
            password:"",
            remeber:false
		}
    },
   components:{
      headernav,
   },
   mounted:function(){
   },
  	methods:{
        login:function(){
            var that=this;
            var _string='username=';
            _string+=this.username;
            _string+='&password=';
            _string+=this.password;
            console.log(_string);        
            axios.post("./api/lf/login.php?act=login",_string).then(function(res){
               if(typeof res.data==="string"){
                 alert(res.data);
               }
               else{
                 that.$router.push('/');
                 that.hub.$emit("loginfooter");
                 that.hub.$emit("getuser",re.data);
               }
            });
        },
  	}
}
</script>

<style type="text/css">
.login-content{
 padding-top: 100px;
 height:100%;
 box-sizing: border-box;
 background:url("../../static/img/loginbg.jpg") no-repeat;
 background-size:cover;
 margin-top:-6px;
}
.logonwrap{
 text-align: center;
 width: 100%;
}
.logonwrap img{
 width: 30%;
}
body{
   height:90%;
}
</style>