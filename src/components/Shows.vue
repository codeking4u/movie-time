<script lang="ts">
import { defineComponent } from 'vue'
import SingleShow from './SingleShow.vue'

export default defineComponent({
  name: 'Shows',
  props: {
    shows: Array
  },
  components: {
    SingleShow
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
  <div class="shows">
    <SingleShow v-for="m in shows" :key="m.id" :showdata="m" />
  </div>
</template>

<style scoped></style>
