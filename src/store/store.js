import Vue from 'vue';
import Vuex from 'vuex';

import repos from './modules/repos/repos';

Vue.use(Vuex);

const vuex = new Vuex.Store({
  modules: {
    repos,
  }
});

export default vuex;