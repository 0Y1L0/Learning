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
import mytool from "./assets/js/common.js"
Vue.config.productionTip = false

Vue.prototype.mytool=mytool;
axios.defaults.baseURL="http://site1.io"
/* eslint-disable no-new */

function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
         return unescape(arr[2]);
    }
    else
    return null;
}

// console.log(token);
// axios.defaults.headers.common['token'] = token;
// if(id&&token){
// }else{
//   window.location.href='http://localhost:8080/#/login';
// }

router.beforeEach((to,from,next)=>{
    var id=getCookie('id');
    var token=getCookie('token');
    if(to.meta.needlogin){
        if(id&&token){   //judge has bing logined or not
            next();
        }else{
            next('/login');
        }
    }else{
        next();
    }
})

axios.interceptors.request.use(config=> {
   var token=getCookie('token');
   config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
   if(token||token=='undefined'){
        }
    else{
        config.headers.token=token;
        config.headers.sign='asdasdasdasdasdxcasdasdqweqwsxdasdsad';
    }
   return config;
  },function(error){
    return Promise.reject(error);
})
axios.defaults.baseURL='http:/localhost';


new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
