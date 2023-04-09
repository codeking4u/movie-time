<template>
  <div v-if="showdataLoaded">
    <div class="sDetails flex">
      <div class="sDetails__tile w-50">
        <SingleShow :showdata="showdata" :disableClick="true" />
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
import { useStore } from 'vuex'

import SingleShow from '@/components/Shows/SingleShow.vue'
import ShowInfo from '@/components/Shows/ShowInfo.vue'
import InfoPanel from '@/components/common/InfoPanel.vue'
import EpisodeList from '@/components/Episode/EpisodeList.vue'
import { fetchSingleShow } from '@/services/ShowService'

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
    const store = useStore()
    const showdata = ref<TvShow>()
    const showdataLoaded = computed(() => !!showdata.value)

    const getShow = async () => {
      const response = await fetchSingleShow(props.id)
      showdata.value = response
      store.commit('addToShowDetails', showdata.value)
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
<style lang="scss" scoped>
.sDetails {
  margin: 25px 0;

  @include breakpoint-down(medium) {
    flex-direction: column;

    &__tile,
    &__info {
      width: 100%;
    }
  }
}
</style>
