import { loadReposApi } from '../../../services/githubApi';
import * as reposTypesActions from './typesActions';

/* eslint-disable */

const actions = {

  async loadReposRequest({ commit, state }, user) {
    commit(reposTypesActions.LOAD_REPOS_REQUEST);

    // Acessa o store.
    // console.log(context.state.load);

    const repos = await loadReposApi(user)
    
    if(repos) {
      commit(reposTypesActions.LOAD_REPOS_SUCCESS, repos);
    }
    else {
      commit(reposTypesActions.LOAD_REPOS_FAIL);
    }
  },

  updateReposDrags({ commit, state }, newRepo) {
    commit(reposTypesActions.UPDATE_REPOS, newRepo);
  }
  
}

export default actions;