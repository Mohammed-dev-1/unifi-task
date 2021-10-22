import Vue from 'vue';
import VueRouter from 'vue-router';
import page404 from "../views/page404";
import Home from "../views/Home/Home";
import Recipe from "../views/Home/Recipe";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Page404',
      component: page404
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recipe',
      name: 'Recipe',
      component: Recipe
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})

/* 
  middleware of routes:
  you can't create and delete recipe if not loggedIn 
*/
router.beforeEach((to,from,next)=> {
  const publicPages = ['Login', 'Register'];  
  const authRequired = publicPages.includes(to.name);
  const loggedIn = localStorage.getItem('user');

  if(!loggedIn && !authRequired) next({ name: 'Login' });
  else if(loggedIn && authRequired) next({ name: 'Home' });
  else next();
})

export default router
