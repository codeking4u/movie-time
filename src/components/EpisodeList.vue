<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import EpisodeTile from './EpisodeTile.vue'
import type { Episode } from '@/types/TvShow'

import { fetchEpisodes } from '@/services/ShowService'

export default defineComponent({
  name: 'EpisodeList',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    EpisodeTile
  },
  setup(props) {
    const API_LINK = import.meta.env.VITE_API_LINK

    const episodeData = ref<Episode[]>()
    const showdataLoaded = computed(() => !!episodeData.value)

    const getEpisodes = async () => {
      const episodes = await fetchEpisodes(props.id)
      episodeData.value = await episodes
    }

    onMounted(() => {
      getEpisodes()
    })

    return {
      episodeData,
      showdataLoaded
    }
  }
})
</script>

<template>
  <div class="episodes-container">
    <div class="episodes">
      <h2>Episodes</h2>
      <EpisodeTile v-for="episode in episodeData" :key="episode.id" :episodeDetails="episode" />
      <div v-if="showdataLoaded"><p>No Episodes Found!</p></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.episodes-container {
  margin-top: 50px;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
}
</style>
