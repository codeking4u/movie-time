<script lang="ts">
import { defineComponent } from 'vue'
import SingleShow from './SingleShow.vue'

export default defineComponent({
  name: 'Shows',
  props: {
    updatedShows: {
      //type: Array as PropType<TvShow[]>,
      type: Array,
      required: true
    }
  },
  components: {
    SingleShow
  }
  /*  props: {
    shows: Array
  }
  data() {
    return {
      shows: []
    }
  },
  async created() {
    const response = await fetch('https://api.tvmaze.com/shows')
    const data = await response.json()
    this.shows = data.slice(0, 4)
    console.log(data)
  } */
})
</script>

<template>
  <div class="shows">
    -------
    <SingleShow v-for="m in updatedShows" :key="m.id" :showdata="m" />
  </div>
</template>

<style scoped></style>
