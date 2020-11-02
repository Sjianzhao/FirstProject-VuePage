import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    NewDevID: 0,
    userId: 0,
  },
  mutations: {
    NewDevID(state, payload) {
      state.NewDevID = payload.NewDevID;
    },
    userId(state, payload) {
      state.userId = payload.userId;
    },
  },
  actions: {
  },
  modules: {
  },
});
