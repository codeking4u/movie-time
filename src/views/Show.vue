<template>
  <div>
    <div>Show details</div>
    <div>Show Episodes</div>
    {{ updatedShows }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

//import { TvShow } from '../types/TvShow'

export default defineComponent({
  name: 'Show',
  props: {
    updatedShows: {
      //type: Array as PropType<TvShow[]>,
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
