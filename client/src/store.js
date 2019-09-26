import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthModule from './modules/AuthModule'
import AuthService from "./AuthService"


Vue.use(Vuex)
// let query = new random ([chicken, beef,]) this will be for randomly generating our query in the baseUrl
// const _foodapi = Axios.create({
//   baseURL: 'https://api.edamam.com/'
// })

// let apiKey = 'search?app_id=$e5152851app_key=$b5e235b115bbed4de5e65e86ac731f4a'

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

// const server = baseUrl: localhost 
export default new Vuex.Store({
  modules: {
    AuthModule
  },

  state: {
    user: {},
    recipes: [],
    randomRecipes: [],
    favoriteRecipes: [],
    toTryRecipes: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    resetState(state, user) {
      state.user = {}
    },

    setRecipes(state, recipes) {
      state.recipes = recipes
    },
    setRandomRecipes(state, recipes) {
      state.randomRecipes = recipes
    },

    setFavRecipes(state, recipes) {
      state.favoriteRecipes = recipes
    }
  },
  actions: {
    async loginNav() {
      try {
        router.push({ name: "login" })
      } catch (error) {
        console.error(error)
      }
    },

    async logoutNav({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    backButton() {
      router.push({ name: "home" })
    },
    usernameButton() {
      router.push({ name: "profile" })
    },

    async addRecipe({ dispatch }, data) {
      try {
        let res = await api.post('/recipe', data)
        debugger
        dispatch('getFavorites', data.userId) //might need to change this name
      } catch (e) {
        console.warn(e.message)
      }
    },

    async generate({ commit, dispatch }, data) {
      let recipes = JSON.parse(localStorage.getItem("recipes")) //checking for recipes in local storage
      try {
        if (!recipes) {
          let res = await api.get('/recipe/random' + `?q=${data.query}`)
          commit("setRandomRecipes", res.data)
          localStorage.setItem("recipes", JSON.stringify(res.data)) //sets them in local storage
        } else {
          commit("setRecipes", recipes)
        }
      } catch (error) {
        console.error(error)
      }
    },

    // async getRecipe(name) {
    //   try {
    //     let res = await api.get()
    //   } catch (error) {

    //   }
    // }
    async getFavorites({ commit, dispatch }, data) {
      try {
        let res = await api.get(`/recipes/${data._id}`)
        commit('setFavRecipes', res.data)

      } catch (error) {
        console.error(error)

      }
    }
  }


})


