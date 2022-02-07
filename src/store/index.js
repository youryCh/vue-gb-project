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
    },
    updatePaymentsList (state, payload) {
      // const newList = state.paymentsList.splice(state.paymentsList[payload.id - 1], 1, payload)
      // state.paymentsList = [...newList]
      const newList = state.paymentsList
      newList[payload.id] = payload
      state.paymentsList = [...newList]
    },
    deletePayment (state, payload) {
      state.paymentsList.splice(payload - 1, 1)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListLastId: state => state.paymentsList.length
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = []
          for (let i = 0; i < 22; i++) {
            items.push({
              id: i,
              date: '12.05.2021',
              category: 'Education',
              price: 456
            })
          }
          resolve(items)
        }, 0)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})
