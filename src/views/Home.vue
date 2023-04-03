<template>
  <Search />
  <div>Upcoming 3</div>
  <div>Random 3</div>
  <div>Favorites</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from '../components/common/Search.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    Search
  }
})
</script>

<style scoped></style>
