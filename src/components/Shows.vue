<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import SingleShow from './SingleShow.vue'
import type { TvShow } from '@/types/TvShow'

export default defineComponent({
  name: 'Shows',
  props: {
    updatedShows: {
      type: Array as PropType<TvShow[]>,
      required: true
    }
  },
  components: {
    SingleShow
  }
})
</script>

<template>
  <div class="shows">
    <SingleShow v-for="m in updatedShows" :key="m.id" :showdata="m" />
  </div>
</template>

<style scoped lang="scss">
.shows {
  /* gap: 1.5rem;
  display: flex;
  margin: 2rem 0; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  grid-row-gap: 15px;
}
</style>
