import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [],
  },
  getters: {
    transactions: (state) => state.transactions,
  },
  mutations: {
    setTransactions(state, data) {
      state.transactions = data;
    },
  },
  actions: {
    requestTransactions({ commit }) {
      axios.get('http://localhost:3000/records')
        .then(response => {
          commit('setTransactions', response.data);
        });
    },
  },
});
