<template>
  <header>
    <div class="flex flex-jc-sb">
      <BreadCrumbs />
      <TestInfo />
    </div>

    <Search v-if="shouldShowSearchBar" />
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import TestInfo from './TestInfo.vue'
import BreadCrumbs from './BreadCrumbs.vue'
import Search from './Search.vue'

export default defineComponent({
  name: 'Header',
  components: { TestInfo, BreadCrumbs, Search },
  setup() {
    const route = useRoute()

    const shouldShowSearchBar = computed(() => {
      const excludeSearch = ['ShowDetail']
      const routeName = route.name?.toString()
      if (!routeName) return false
      return !excludeSearch.includes(routeName)
    })

    return { shouldShowSearchBar }
  }
})
</script>

<style scoped>
header {
  padding: 25px 0;
}
</style>
