<template>
  <HomeWrapper> 
    <template v-if="load">
      <h3>Loading...</h3>
    </template>
    <template v-else>
      <h1>Repositórios - vitorkaio</h1>
      <ReposWrapper>
        <draggable v-model='getList' class="drags">
          <RepositoryItem v-for='(item, i) in getList' :key='i' :item='item' />
        </draggable>
      </ReposWrapper>
    </template>
  </HomeWrapper>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex';
import { HomeWrapper, ReposWrapper } from './homeStyled';
import draggable from 'vuedraggable'
import RepositoryItem from '@/components/repositoryItem/RepositoryItem.vue'

export default {
  components: {
    HomeWrapper,
    ReposWrapper,
    RepositoryItem,
    draggable
  },
  data() {
    return {
      list: this.repos,
    }
  },
  computed: {
    ...mapGetters('repos', {
      load: 'load',
      error: 'error',
      repos: 'repos'
    }),
    getList: {
      get() {
        this.list = this.repos;
        return this.list;
      },
      set(value) {
        this.list = [...value];
        this.updateReposDrags(this.list);
      }

    }
  },
  methods: {
    ...mapActions('repos', ['loadReposRequest', 'updateReposDrags']),
    getRepos() {
      this.loadReposRequest('vitorkaio');
    }
  },
  created() {
    this.getRepos();
  }
}
</script>

<style>

</style>
