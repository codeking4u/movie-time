<template>
  <div class="testInfo">
    <h3 class="testInfo__title">Test assignment</h3>
    <p>
      Data provider: <a :href="DATA_PROVIDER">{{ DATA_PROVIDER }}</a>
    </p>
    <p>
      Repository: <a :href="GIT_REPO_LINK">{{ GIT_REPO_LINK }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const DATA_PROVIDER = import.meta.env.VITE_DATA_PROVIDER
    const GIT_REPO_LINK = import.meta.env.VITE_GIT_REPO_LINK

    return { DATA_PROVIDER, GIT_REPO_LINK }
  }
})
</script>

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
