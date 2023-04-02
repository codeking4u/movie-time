<script lang="ts">
import { defineComponent } from 'vue'
import SingleShow from './SingleShow.vue'

export default defineComponent({
  name: 'Shows',
  props: {
    shows: Array
  },
  components: {
    SingleShow
  }
})
</script>

<template>
  <div class="shows">
    <SingleShow v-for="m in shows" :key="m.id" :showdata="m" />
  </div>
</template>

<style scoped></style>
