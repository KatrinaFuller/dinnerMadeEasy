import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// let query = new random ([chicken, beef,]) this will be for randomly generating our query in the baseUrl
const _foodapi = axios.create({
  baseUrl: 'https://api.edamam.com/search?q=chicken&app_id=$e5152851app_key=$b5e235b115bbed4de5e65e86ac731f4a'
})

// const server = baseUrl: localhost 
export default new Vuex.Store({
  state: {

  },
  mutations: {
<<<<<<< HEAD
=======
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
    async logoutNav() {
      try {

      } catch (error) {
        console.error(error)
      }
    }
  }
>>>>>>> 0247f363988093a7191370c51b2bfa0aaa7230bd

  },
  actions: {

  }
})
