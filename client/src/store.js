import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import authModule from './modules/AuthModule'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})


// let query = new random ([chicken, beef, dfasf, fsdfaf])
const _foodapi = Axios.create({
  baseURL: 'https://api.edamam.com/search?q=chicken&app_id=$e5152851app_key=$b5e235b115bbed4de5e65e86ac731f4a'
})

// const server = baseUrl: localhost 
export default new Vuex.Store({
  modules: {
    authModule
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

  }


})
