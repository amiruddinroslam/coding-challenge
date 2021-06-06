import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    records: [],
    exchange: '',
    month: ''
  },
  mutations: {
    getRecords(state, payload) {
      state.records = payload
    },
    setExchange(state, payload) {
      state.exchange = payload
    },
    setMonth(state, payload) {
      state.month = payload
    }
  },
  actions: {
    getRecords({ commit }) {
      axios('http://localhost:8567/records')
        .then(response => {
          commit('getRecords', response.data)
          // commit('getExchanges')
        })
    }
  },
  modules: {
  }
})
