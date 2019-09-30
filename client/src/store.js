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
    toTryRecipes: [],
    groceries: []
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

    setFavRecipes(state, favoriteRecipes) {
      state.favoriteRecipes = favoriteRecipes
    },

    setIngredients(state, groceries) {
      state.groceries = groceries
    },
    setToTry(state, toTryRecipes) {
      state.toTryRecipes = toTryRecipes
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
    backToProfile() {
      router.push({ name: "profile" })
    },
    MoreFavRecipes() {
      router.push({ name: "MoreFavRecipes" })
    },
    usernameButton() {
      router.push({ name: "profile" })
    },

    async addRecipe({ dispatch }, data) {
      try {
        let res = await api.post('/recipe', data)
        dispatch('addToFavorites') //might need to change this name
        alert("added to Favorite List")
      } catch (e) {
        console.warn(e.message)
      }
    },
    async addToTry({ dispatch }, data) {
      try {
        let res = await api.post('/recipe', data)
        dispatch('addToTryList')
        alert("added to recipes to try")
      } catch (error) {
        console.warn(e.message)
      }
    },
    async addToTryList({ commit }) {
      try {
        let res = await api.post('/recipe/myRecipes')
        commit("setToTry", res.data)
      } catch (error) {
        console.error(error)
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
          let i = Math.floor(Math.random() * 99)
          commit("setRecipes", recipes[i])
        }
      } catch (error) {
        console.error(error)
      }
    },

    async addToFavorites({ commit, dispatch }, data) {
      try {
        // debugger
        let res = await api.post(`/recipe/myRecipes`)
        commit('setFavRecipes', res.data)


      } catch (error) {
        console.error(error)

      }
    },

    async removeRecipe({ dispatch }, data) {
      try {
        let res = await api.delete('/recipe/' + data._id)
        dispatch('addToFavorites')
      } catch (error) {
        console.error(error)

      }
    },

    async addIngredient({ commit }, data) {
      try {
        debugger
        let res = await api.post('/grocery', data)
        commit('setIngredients', res.data)
        console.log(this.state.groceries)
      } catch (error) {
        console.error(error)
      }
    }






  }


})


