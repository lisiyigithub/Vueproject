import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main.vue'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Mine from '../views/mine.vue'
import Detail from '../views/detail.vue'
import Jilu from '../views/jilu.vue'
import Huan from '../views/huan.vue'
import Jie from '../views/jie.vue'
import Begin from '../views/begin.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Jiekuan from '../views/jiekuan.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/begin',
      component:Begin,
      children:[
        {
          path:'/register',
          component:Register
        },
        {
          path:'/login',
          component:Login
        }
      ]
    },
    {
      path:'/main',
      component:Main,
      children:[
        {
          path:'/home',
          component:Home
        },
        {
          path:'/about',
          component:About
        },
        {
          path:'/mine',
          component:Mine
        }        
      ]
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/jilu',
      component:Jilu,
      children:[
        {
          path:'/huan',
          component:Huan
        },
        {
          path:'/jie',
          component:Jie
        }
      ]
    },
    {
    	path:'/jiekuan/:id',
    	component:Jiekuan
    }
  ]
})
