<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/common/Header.vue'
import TestInfo from './components/common/TestInfo.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    TestInfo
  }
})
</script>

<template>
  <Header />
  <TestInfo />
  <router-view />
</template>

<style scoped></style>
