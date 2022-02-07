import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    AddPaymentsListData (state, payload) {
      state.paymentsList.push(payload)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListLastId: state => {
      return state.paymentsList.length
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = []
          for (let i = 0; i < 32; i++) {
            items.push({
              id: i,
              date: '12.05.2021',
              category: 'Education',
              price: 456
            })
          }
          resolve(items)
        }, 1000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})
