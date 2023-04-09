<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/common/AppHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  }
})
</script>

<template>
  <AppHeader />
  <router-view />
</template>

<style scoped lang="scss"></style>
