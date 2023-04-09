<template>
  <ShowsList :updatedShows="searchResults" v-if="searchResults.length"></ShowsList>
  <template v-else>
    <p>No search results found.</p>
  </template>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ShowsList from '@/components/Shows/ShowsList.vue'
import { searchShowsAPI } from '@/services/ShowService'

export default defineComponent({
  setup() {
    const NUMBER_OF_SEARCH_SHOWS = import.meta.env.VITE_NUMBER_OF_SHOWS_IN_SEARCH

    const route = useRoute()
    const searchQuery = ref('')
    const searchResults = ref([])

    const searchShow = async () => {
      searchQuery.value = route.query.q
      const responseData = await searchShowsAPI(searchQuery.value)

      searchResults.value = responseData.slice(0, NUMBER_OF_SEARCH_SHOWS).reduce((acc, curr) => {
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
    ShowsList
  }
})
</script>

<style scoped lang="scss"></style>
