import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthModule from './modules/AuthModule'
import AuthService from "./AuthService"


Vue.use(Vuex)
// let query = new random ([chicken, beef,]) this will be for randomly generating our query in the baseUrl
const _foodapi = Axios.create({
  baseURL: 'https://api.edamam.com/search?q=chicken&app_id=$e5152851app_key=$b5e235b115bbed4de5e65e86ac731f4a'
})

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
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    resetState(state, user) {
      state.user = {}
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
      } catch (e) {
        console.warn(e.message)
      }
    }
  }


})
