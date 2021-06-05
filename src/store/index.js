import Vue from 'vue';
import Vuex from 'vuex';

import modals from '@/store/modules/modals';
import sendRequest from '@/store/modules/sendRequest';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modals,
    sendRequest,
  }
})
