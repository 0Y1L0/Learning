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
      component: index,
      meta:{
        headtitle:'热量计算',
      },
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{
        headtitle:'个人中心',
      },
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta:{
        headtitle:'健身技巧',
      },
    },
    {
       path:'/articledetail',
       name:'articledetail',
       component:articledetail,
       meta:{
        headtitle:'文章详情',
      },
    },
    {
       path:'/login',
       name:'login',
       component:login
    },
    {
      path: '/record',
      name: 'record',
      // meta:{
      //   needlogin:true,
      //  headtitle:'日常打卡'
      // },
      component: record
    },
    {
      path:'/mine/history',
      name:'history',
      // meta:{
      //   needlogin:true,
      //   headtitle:'历史记录'
      // },
      component:history
    },
    {
      path:'/mine/reverse',
      name:'reverse',
      // meta:{
      //   needlogin:true,
      //   headtitle:'修改信息'
      // },
      component:reverse
    }
  ]
})
