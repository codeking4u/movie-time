<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TvShow } from '@/types/TvShow'

export default defineComponent({
  name: 'ShowInfo',
  props: {
    showdata: {
      type: Object as PropType<TvShow>
    }
  },
  setup(props) {}
})
</script>

<template>
  <div v-if="showdata" class="showInfo">
    <p>Network: {{ showdata.network?.name }}</p>
    <p>Show type: {{ showdata.type }}</p>
    <p>Language: {{ showdata.language }}</p>
    <p>Genres: {{ showdata.genres.join(',') }}</p>
    <p>Status: {{ showdata.status }}</p>
    <p>
      Official site: <a :href="showdata.officialSite">{{ showdata.officialSite }}</a>
    </p>
  </div>
</template>

<style scoped lang="scss">
.showInfo {
  font-size: 0.8rem;
  border: 1px solid #a7a7a7;
  padding: 1.5rem;
  line-height: 1.5rem;
  border-radius: 4px;
}
</style>
