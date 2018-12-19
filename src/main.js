// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import './assets/css/all.css'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import store from './store/index.js'
Vue.config.productionTip = false

axios.defaults.baseURL="http://site1.io"
/* eslint-disable no-new */

function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg)){
console.log(arr)
// console.log(document.cookie)
return unescape(arr[2]);
}
else
return null;
}
// var id=getCookie('id');
// var token=getCookie('token');
// console.log(token);
// axios.defaults.headers.common['token'] = token;
// if(id&&token){
// }else{
//   window.location.href='http://localhost:8080/#/login';
// }

new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
