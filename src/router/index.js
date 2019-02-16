import Vue from 'vue'
import Router from 'vue-router'
import index from '@/layout/index'
import mine from '@/layout/mine'
import news from '@/layout/news'
import record from '@/layout/record'
import articledetail from '@/layout/articledetail'
import login from '@/layout/login'
import history from '@/layout/history'
import reverse from '@/layout/reverse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      children:[
       
        
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
       path:'/articledetail',
       name:'articledetail',
       component:articledetail
    },
    {
       path:'/login',
       name:'login',
       component:login
    },
    {
      path: '/record',
      name: 'record',
      meta:{
        needlogin:true,
      },
      component: record
    },
    {
      path:'/mine/history',
      name:'history',
      meta:{
        needlogin:true,
      },
      component:history
    },
    {
      path:'/mine/reverse',
      name:'reverse',
      // meta:{
      //   needlogin:true,
      // },
      component:reverse
    }
  ]
})
