import Vue from 'vue'
import Router from 'vue-router'
import TabBar from '@/components/TabBar'

//引入一级路由模块
import Home from './../components/Home'
import Movie from './../components/Movie'
import Explore from './../components/Explore'
import Show from './../components/Show'
import Me from './../components/Me'

//使用路由
Vue.use(Router)

//实例化路由对象并输出
export default new Router({
  routes: [
      {
        path:'/home',
        component:Home
      },

      {
        path:'/movie',
        component:Movie
      },

      {
        path:'/explore',
        component:Explore
      },

      {
        path:'/me',
        component:Me
      },

      {
        path:'/show',
        component:Show
      },

      {
        path: '/',
        redirect: '/home'
      }
  ]
})
