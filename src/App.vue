<script lang="ts">
import { defineComponent } from 'vue'
import Movies from './components/Movies.vue'

export default defineComponent({
  name: 'App',
  components: {
    Movies
  },
  data() {
    return {
      movies: []
    }
  },
  async created() {
    const response = await fetch('https://api.tvmaze.com/shows')
    const data = await response.json()
    this.movies = data
    console.log(data)
  }
})
</script>

<template>
  <Movies :movies="movies" />
</template>

<style scoped></style>
