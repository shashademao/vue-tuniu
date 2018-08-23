import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
  	{path:'/',redirect:'/home'},
    {path:'/home',component:()=>import('../components/home.vue')},
    {path:'/city',component:()=>import('../components/city.vue')},
    {path:'/center',component:()=>import('../components/center.vue')},
    {path:'/recommendDetail/:id',component:()=>import('../components/detail.vue')},
    {path:'/login',component:()=>import('../components/center/login.vue')},
    {path:'/user',component:()=>import('../components/center/user.vue')},
    {path:'/pay',component:()=>import('../components/center/pay.vue')},
    {path:'/undepart',component:()=>import('../components/center/undepart.vue')},
    {path:'/alllist',component:()=>import('../components/center/all-list.vue')}
  ],
})
