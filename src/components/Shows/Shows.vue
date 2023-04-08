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
  <div class="shows-container section">
    <h2 class="title">
      <slot name="title"></slot>
    </h2>
    <div class="shows">
      <SingleShow v-for="show in updatedShows" :key="show.id" :showdata="show" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.shows {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 20px;
}
</style>
