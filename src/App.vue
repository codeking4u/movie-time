<script lang="ts">
import { defineComponent } from 'vue'
import Shows from './components/Shows.vue'

export default defineComponent({
  name: 'App',
  components: {
    Shows
  },
  data() {
    return {
      shows: []
    }
  },
  async created() {
    const response = await fetch('https://api.tvmaze.com/shows')
    const data = await response.json()
    this.shows = data
    console.log(data)
  }
})
</script>

<template>
  <Shows :shows="shows" />
</template>

<style scoped></style>
