<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import EpisodeTile from './EpisodeTile.vue'
import type { Episode } from '@/types/TvShow'

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

    const getShow = async () => {
      const response = await fetch(`${API_LINK}/shows/${props.id}/episodes`)
      episodeData.value = await response.json()
    }

    onMounted(() => {
      getShow()
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
