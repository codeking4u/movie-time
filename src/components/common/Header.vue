<template>
  <header class="flex flex-jc-sb">
    <BreadCrumbs />
    <TestInfo />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestInfo from './TestInfo.vue'
import BreadCrumbs from './BreadCrumbs.vue'

export default defineComponent({
  name: 'Header',
  components: { TestInfo, BreadCrumbs },
  setup() {
    return {}
  }
})
</script>

<style scoped>
header {
  padding: 25px 0;
}
</style>
