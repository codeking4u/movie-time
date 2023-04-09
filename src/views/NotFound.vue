<template>
  <div class="not-found">
    <h1>404 Page Not Found</h1>
    <p>Sorry, the page you're looking for could not be found.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>

<style scoped lang="scss">
.not-found {
  text-align: center;
  margin-top: 50px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
