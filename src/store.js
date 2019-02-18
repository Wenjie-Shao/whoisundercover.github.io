import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerNum: 8,
    ucNum: 2,
    emptyNum: 0,
    cards: [],
  },
  mutations: {
    setPlayerNum(state, payload) {
      state.playerNum = payload;
    },
    setUcNum(state, payload) {
      state.ucNum = payload;
    },
    setEmptyNum(state, payload) {
      state.emptyNum = payload;
    },
    setCards(state, payload) {
      state.cards = payload;
    },
    reset(state, payload) {
      state.cards = [];
    }
  },
  actions: {

  }
})
