import Vue from 'vue'
import Router from 'vue-router'
import index from '@/layout/index'
import mine from '@/layout/mine'
import news from '@/layout/news'
import record from '@/layout/record'
import articledetail from '@/layout/articledetail'
import login from '@/layout/login'

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
      component: mine
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/record',
      name: 'record',
      component: record
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
    }
  ]
})
