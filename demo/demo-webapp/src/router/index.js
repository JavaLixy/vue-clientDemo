import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login';
import Inside from '@/components/content/Inside';
import index from '../components/login/static/index';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Inside',
      name: 'Inside',
      component: Inside,
      //TODO----- 待加路由守卫
      // meta: { requireAuth: true }
    }
  ]
})
