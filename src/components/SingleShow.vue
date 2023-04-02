<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SingleShow',
  props: {
    key: Number,
    showdata: Object
  }
})
</script>

<template>
  <div class="singleShow">{{ showdata.name }}</div>
</template>

<style scoped></style>
