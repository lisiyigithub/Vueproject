import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main.vue'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Mine from '../views/mine.vue'


Vue.use(Router)

export default new Router({
  routes: [
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
      path:'/',
      redirect:'/home'
    }
  ]
})
