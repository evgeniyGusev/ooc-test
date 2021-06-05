const sendRequest = {
  state: () => ({
    isSending: false,
    isSent: false,
  }),

  mutations: {
    SET_SENDING_STATUS(state, payload) {
      state.isSending = payload;
    },
    SET_SENT_STATUS(state, payload) {
      state.isSent = payload;
    }
  },

  actions: {
    sendRequest({ commit }) {
      commit('SET_SENDING_STATUS', true);

      new Promise(resolve => setTimeout( () => resolve(commit('SET_SENT_STATUS', true)), 5000))
        .then(() => commit('SET_SENDING_STATUS', false));
    }
  }
}

export default sendRequest;
