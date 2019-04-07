<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from './pages/home/Home.vue'

// https://github.com/SortableJS/Vue.Draggable

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
