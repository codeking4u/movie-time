<template>
  <Shows :updatedShows="searchResults"></Shows>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Shows from '../components/Shows.vue'

export default defineComponent({
  setup() {
    const route = useRoute()
    const searchQuery = ref('')
    const searchResults = ref([])

    const searchShow = async () => {
      searchQuery.value = route.query.q
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery.value}`)
      const responseData = await response.json()

      searchResults.value = responseData.slice(0, 3).reduce((acc, curr) => {
        acc.push(curr.show)
        return acc
      }, [])
    }

    onMounted(() => {
      searchShow()
    })
    watch(
      () => route.query.q,
      () => {
        searchShow()
      }
    )

    return { searchQuery, searchResults }
  },
  components: {
    Shows
  }
})
</script>

<style scoped></style>
