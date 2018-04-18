import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import Tool from '../views/Tool//tool'
import Plan from '../views/plan/plan'
import Idea from '../views/idea/idea'
import Level from '../views/level/level'
import DataBase from '../views/dataBase/dataBase'
import Login from '../views/login/login'
import NotFound from '../views/notfound/notfound'
import Home from '../views/home/home'
import NewBoard from '../views/newBoard/newBoard'
import ChoosePlan from '../views/newBoard/children/ChoosePlan'
import Message from '../views/newBoard/children/Message'
import RedirectPage from '../views/newBoard/children/redirect'
import Advertising from '../views/newBoard/children/advertising'
import Money from '../views/newBoard/children/Money'
import LandingPage from '../views/newBoard/children/landingPage'
import UploadCreative from '../views/newBoard/children/UploadCreative'
import store from '../store'
Vue.use(Router)

let router = new Router({
  mode:'history',  //改变history模式 或者 hash模式
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/index',
      name:'Home', 
      component:Home,
      children:[
        {
          path:'/index/createBoard',
          name:'newBoard',
          component:NewBoard,
          children:[
            {
              path:'/index/createBoard',
              redirect:'/index/createBoard/choosePlan'
            },
            {
              path:'/index/createBoard/choosePlan',
              name:'choosePlan',
              component:ChoosePlan
            },
            {
              path:'/index/createBoard/message',
              name:'message',
              component:Message
            },
            {
              path:'/index/createBoard/redirectPage',
              name:'redirectPage',
              component:RedirectPage
            },
            {
              path:'/index/createBoard/advertising',
              name:'advertising',
              component:Advertising
            },
            {
              path:'/index/createBoard/money',
              name:'money',
              component:Money
            },
            {
              path:'/index/createBoard/landingPage',
              name:'landingPage',
              component:LandingPage
            },
            {
              path:'/index/createBoard/UploadCreative',
              name:'UploadCreative',
              component:UploadCreative
            },
          ]
        },
        {
          path: '/index/home',
          name: '',
          component: Index  
        },
        {
          path: '/index/plan',
          name: 'plan',
          component: Plan,
        },
        {
          path: '/index/idea',
          name: 'idea',
          component: Idea,
        },
        {
          path: '/index/level',  
          name: 'level',
          component: Level,
        },
        {
          path:'/index/database',
          name:'dataBase',
          component:DataBase
        },
        {
          path:'/index/tool',
          name:'tool',
          component:Tool
        }
      ]
    },
    {
        path: '/',
        redirect: '/index/home' 
    }
  ]
 
})

router.beforeEach((to,from,next)=>{
  let isLogin = checkLogin();
  //如果要到的路由地址是login，就继续；否则判断有没有token，没有就跳转到login,有就继续执行
  if(to.name == 'login') {
    next()
  }else{
    if(!isLogin){
      next('/login')
    }else{
      next()
    }
  }
  
})

//!! 把任意类型装成boolean
const checkLogin = () => {
  let token = !!window.localStorage.token;
  store.commit('getUser',localStorage.getItem('info'))
  return token
}

export default router

