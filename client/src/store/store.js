import Vue from 'vue'
import Vuex from 'vuex'

// import all store modules
import main from './main.js'

export default new Vuex.Store({
  modules: { main },
  strict: true
})