<template>
  <div v-if="showdataLoaded">
    <div class="sDetails flex">
      <div class="sDetails__tile w-50">
        <SingleShow :showdata="showdata" />
      </div>
      <div class="sDetails__info w-50">
        <ShowInfo :showdata="showdata" />
      </div>
    </div>

    <InfoPanel :showdata="showdata" />
    <EpisodeList :id="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import type { TvShow } from '@/types/TvShow'

import SingleShow from '@/components/SingleShow.vue'
import ShowInfo from '@/components/ShowInfo.vue'
import InfoPanel from '@/components/InfoPanel.vue'
import EpisodeList from '@/components/EpisodeList.vue'

export default defineComponent({
  name: 'ShowDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: { SingleShow, ShowInfo, InfoPanel, EpisodeList },
  setup(props) {
    const showdata = ref<TvShow>()
    const showdataLoaded = computed(() => !!showdata.value)

    const getShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${props.id}`)
      showdata.value = await response.json()
    }

    onMounted(() => {
      getShow()
    })

    return {
      showdata,
      showdataLoaded
    }
  }
})
</script>

<style scoped></style>
