<template>
  <div class="testInfo">
    <h3 class="testInfo__title">Test assignment</h3>
    <p>Data provider: <a href="https://www.tvmaze.com/">https://www.tvmaze.com/</a></p>
    <p>Repository: <a href="https://www.github.com/">https://www.github.com/</a></p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.testInfo {
  font-size: 1rem;
  background: #333;
  color: #fff;
  padding: 2rem;

  &__title {
    font-size: 1.5rem;
  }

  a {
    color: #fff;
    &:hover {
      color: #a3a5f0;
    }
  }
}
</style>
