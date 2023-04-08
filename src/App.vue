<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/common/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<template>
  <Header />
  <router-view />
</template>

<style scoped type="scss"></style>
