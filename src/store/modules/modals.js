const modals = {
  state: () => ({
    modal: '',
  }),

  mutations: {
    SET_MODAL(state, payload) {
      state.modal = payload;
    }
  },
}

export default modals;
