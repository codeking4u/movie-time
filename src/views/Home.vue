<template>
  <Search />
  <Shows :updatedShows="updatedShows"
    ><template v-slot:title> New Episodes Coming Soon In </template></Shows
  >
  <Shows :updatedShows="randomShows"><template v-slot:title> Random 3 Films </template></Shows>
  <div>Favorites</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Search from '../components/common/Search.vue'
import Shows from '../components/Shows.vue'

import { fetchShows } from '../services/ShowService'
import type { TvShow } from '../types/TvShow'

export default defineComponent({
  components: {
    Search,
    Shows
  },
  setup() {
    //const latestShows = ref<TvShow[]>([])
    const allShows = ref([])
    const updatedShows = ref([])
    const randomShows = ref([])
    const SHOW_COUNT = 3

    async function fetchTvShows() {
      try {
        const shows = await fetchShows()
        allShows.value = shows

        updatedShows.value = allShows.value
          .sort((a: TvShow, b: TvShow) => b.updated - a.updated)
          .slice(0, SHOW_COUNT)

        const max = allShows.value.length - SHOW_COUNT
        const randomIndex = Math.floor(Math.random() * (max - 0) + 0)
        randomShows.value = allShows.value.slice(randomIndex, randomIndex + SHOW_COUNT)
      } catch (error) {
        console.log(`Error: ${error}`)
      }
    }

    fetchTvShows()
    return { updatedShows, allShows, randomShows }
  }
})
</script>

<style scoped></style>
