<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TvShow } from '@/types/TvShow'

export default defineComponent({
  name: 'InfoPanel',
  props: {
    showdata: {
      type: Object as PropType<TvShow>
    }
  },
  setup(props) {}
})
</script>

<template>
  <div v-if="showdata" class="infoPanel">
    <p>Premiered: {{ showdata.premiered }}</p>
    <p>Ended: {{ showdata.ended }}</p>
    <p>Runtime average: {{ showdata.averageRuntime }} mins</p>
    <p>Schedule: {{ showdata.schedule.time }} Every {{ showdata.schedule.days.join(',') }}</p>
  </div>
</template>

<style scoped lang="scss">
.infoPanel {
  font-size: 0.8rem;
  line-height: 1.3rem;
  margin-top: 7px;
}
</style>
