import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: function () {
        return import(/* webpackChunkName: "profile" */ './views/Profile.vue')
      }
    },

    {
      path: '/MoreFavRecipes',
      name: 'MoreFavRecipes',
      component: function () {
        return import(/* webpackChunkName: "MoreFavRecipes" */ './views/MoreFavRecipes.vue')
      }
    },
    {
      path: '/MoreToTry',
      name: "MoreToTry",
      component: function () {
        return import(/* webpackChunkName: "MoreToTry" */ './views/MoreToTry.vue')
      }


    },
    {
      path: '/recipes/:recipeId',
      name: 'activeRecipe',
      component: function () {
        return import(/* webpackChunkName: "activeRecipe" */ './views/ActiveRecipe.vue')
      }
    },
    {
      path: "*",
      redirect: "/"
    },
  ]
})
