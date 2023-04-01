<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Movies',
  props: {
    movies: []
  }
})
</script>

<template>
  <div>
    <ul>
      <li v-for="m in movies" :key="m.id">{{ m.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
