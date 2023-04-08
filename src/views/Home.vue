<template>
  <Shows :updatedShows="updatedShows"
    ><template v-slot:title> New Episodes Coming Soon In </template></Shows
  >
  <Shows :updatedShows="randomShows"><template v-slot:title> Random 3 Films </template></Shows>
  <FavoriteList />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Search from '../components/common/Search.vue'
import Shows from '@/components/Shows/Shows.vue'
import FavoriteList from '@/components/Favorite/FavoriteList.vue'

import { fetchShows } from '../services/ShowService'
import type { TvShow } from '../types/TvShow'

export default defineComponent({
  components: {
    Search,
    Shows,
    FavoriteList
  },
  setup() {
    const COMING_SOON_COUNT = import.meta.env.VITE_NUMBER_OF_SHOWS_IN_COMING_SOON
    const RANDOM_SHOW_COUNT = parseInt(import.meta.env.VITE_NUMBER_OF_SHOWS_IN_RANDOM)

    const allShows = ref([])
    const updatedShows = ref([])
    const randomShows = ref([])

    async function fetchTvShows() {
      try {
        const shows = await fetchShows()
        allShows.value = shows

        updatedShows.value = allShows.value
          .sort((a: TvShow, b: TvShow) => b.updated - a.updated)
          .slice(0, COMING_SOON_COUNT)

        /* picking a random index and fetch shows from there  */
        let max = allShows.value.length - RANDOM_SHOW_COUNT
        if (max < 0) max = 0

        const randomIndex = Math.floor(Math.random() * max)
        randomShows.value = allShows.value.slice(randomIndex, randomIndex + RANDOM_SHOW_COUNT)
      } catch (error) {
        console.log(`Error: ${error}`)
      }
    }

    fetchTvShows()
    return { updatedShows, allShows, randomShows }
  }
})
</script>

<style scoped lang="scss"></style>
