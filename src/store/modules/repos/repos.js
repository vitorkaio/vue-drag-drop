import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const repos = {
  namespaced: true,
  state: {
    repos: [],
    load: false,
    error: false,
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default repos;