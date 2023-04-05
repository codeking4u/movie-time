<template>
  <div><BreadCrumbs /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BreadCrumbs from './BreadCrumbs.vue'

export default defineComponent({
  name: 'Header',
  components: { BreadCrumbs },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
