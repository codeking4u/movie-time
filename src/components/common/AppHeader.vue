<template>
  <header>
    <div class="header-top flex flex-jc-sb">
      <BreadCrumbs />
      <TestInfo />
    </div>

    <SearchBar v-if="shouldShowSearchBar" />
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import TestInfo from './TestInfo.vue'
import BreadCrumbs from './BreadCrumbs.vue'
import SearchBar from './SearchBar.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { TestInfo, BreadCrumbs, SearchBar },
  setup() {
    const PAGES_TO_EXCLUDE_SEARCH = import.meta.env.VITE_PAGES_TO_EXCLUDE_SEARCH_BAR.split(',')
    const route = useRoute()

    const shouldShowSearchBar = computed(() => {
      const excludeSearch = PAGES_TO_EXCLUDE_SEARCH
      const routeName = route?.name?.toString()
      if (!routeName) return false
      return !excludeSearch.includes(routeName)
    })

    return { shouldShowSearchBar }
  }
})
</script>

<style scoped lang="scss">
header {
  margin: 40px 0;
  .header-top {
    @include breakpoint-down(small) {
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
