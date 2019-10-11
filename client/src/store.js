import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthModule from './modules/AuthModule'
import AuthService from "./AuthService"
import Swal from "sweetalert2"
Vue.use(Vuex)
// let query = new random ([chicken, beef,]) this will be for randomly generating our query in the baseUrl
// const _foodapi = Axios.create({
//   baseURL: 'https://api.edamam.com/'
// })

// let apiKey = 'search?app_id=$e5152851app_key=$b5e235b115bbed4de5e65e86ac731f4a'

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 999999999,
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
    groceries: [],
    activeRecipe: {}
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
    },
    setActiveRecipe(state, payload) {
      state.activeRecipe = payload
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
    MoreToTry() {
      router.push({ name: "MoreToTry" })
    },
    usernameButton() {
      router.push({ name: "profile" })
    },

    async addRecipe({ dispatch }, data) {
      try {
        let res = await api.post('/recipe/favRecipes', data)
        dispatch('addToFavorites') //might need to change this name
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })
        Toast.fire({
          type: 'success',
          title: 'added recipe'
        })
      } catch (e) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })
        Toast.fire({
          type: 'warning',
          title: 'please login to continue'
        })
        console.warn(e.message)
      }
    },

    async addNote({ dispatch }, data) {
      try {
        // debugger
        let res = await api.post(`/recipe/${data._id}/notes`, data)
        dispatch("getRecipeById", data)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteNote({ dispatch }, data) {
      try {
        // debugger
        let res = await api.put(`/recipe/${data._id}/notes`, data)
        dispatch('getRecipeById', data)
      } catch (error) {
        console.error(error)
      }
    },

    async addToFavorites({ commit, dispatch }, data) {
      try {
        // debugger
        let res = await api.get(`/recipe?type=favorites`)
        commit('setFavRecipes', res.data)
      } catch (error) {
        console.error(error)

      }
    },
    async addToTry({ dispatch }, data) {
      try {
        let res = await api.post('/recipe/toTryRecipes', data)
        console.log("got")
        dispatch('addToTryList')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })
        Toast.fire({
          type: 'success',
          title: 'added recipe'
        })
      } catch (e) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })
        Toast.fire({
          type: 'warning',
          title: 'please login to continue'
        })
        console.warn(e.message)
      }
    },
    async addToTryList({ commit }) {
      try {
        let res = await api.get('/recipe?type=toTry')
        commit("setToTry", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async generate({ commit, dispatch }, data) {

      let recipes = JSON.parse(localStorage.getItem("recipes")) //checking for recipes in local storage
      try {
        if (!recipes || data.random) {
          let url = '/recipe/random'
          url += data.query ? `?q=${data.query}` : ""
          if (!data.query) {
            url += data.diet ? "?diet=" + data.diet : ""
          } else {
            url += data.diet ? "&diet=" + data.diet : ""
          }
          let res = await api.get(url)
          commit("setRandomRecipes", res.data)
          localStorage.setItem("recipes", JSON.stringify(res.data)) //sets them in local storage
          recipes = res.data
        }
        let i = Math.floor(Math.random() * 99)
        commit("setRecipes", recipes[i])

      } catch (error) {
        console.error(error)
      }
    },


    async getRecipeById({ commit }, payload) {
      try {
        let res = await api.get(`/recipe/${payload._id}`)
        commit("setActiveRecipe", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async removeRecipe({ dispatch }, data) {
      try {
        let res = await api.delete('/recipe/' + data._id)
        dispatch('addToFavorites')
        dispatch('addToTryList')
      } catch (error) {
        console.error(error)

      }
    },

    async getGroceries({ commit, dispatch }) {
      try {
        // debugger
        let res = await api.get('/grocery')
        commit("setIngredients", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async addIngredient({ commit, dispatch }, data) {
      try {
        let res = await api.post('/grocery', data)
        dispatch('getGroceries')
      } catch (error) {
        console.error(error)
      }
    },

    async deleteGrocery({ commit, dispatch }, data) {
      try {
        let res = await api.delete('/grocery/' + data._id)
        dispatch('getGroceries')
      } catch (error) {
        console.error(error)
      }
    },

    async toggleCompletedStatus({ dispatch }, data) {
      try {
        let res = await api.put('/grocery/' + data._id, data)
        dispatch('getGroceries')
      } catch (error) {
        console.error(error)

      }
    },

    async setRating({ dispatch }, data) {
      try {
        let res = await api.put(`/recipe/${data._id}`, data)
        dispatch('getRecipeById', data)
      } catch (error) {
        console.error(error)
      }
    },
    async moveToFavorites({ dispatch }, data) {
      try {
        debugger
        let res = await api.put(`/recipe/${data}`, data)
        dispatch('addToFavorites')
      } catch (error) {
        console.error(error)

      }
    }
  }
})


