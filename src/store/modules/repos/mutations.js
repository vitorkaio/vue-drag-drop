import * as reposTypesActions from './typesActions';


const mutations = {
  [reposTypesActions.LOAD_REPOS_REQUEST](state) {
    state.load = true;
    state.error = false;
  },
  [reposTypesActions.LOAD_REPOS_SUCCESS](state, payload) {
    state.repos = payload;
    state.load = false;
    state.error = false;
  },
  [reposTypesActions.LOAD_REPOS_FAIL](state) {
    state.repos = [];
    state.load = false;
    state.error = true;
  },
  [reposTypesActions.UPDATE_REPOS](state, payload) {
    state.repos = [...payload];
  },
}

export default mutations;