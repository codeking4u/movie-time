<template>
  <div class="testInfo">
    <div class="testInfo__header flex flex-jc-c">
      <h3 class="testInfo__title">Test assignment</h3>
      <img src="../../assets/images/test.png" alt="" />
    </div>
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
  background: $primary-color;
  color: $theme-white;
  padding: 1.5rem;
  border-radius: 5px;

  @include breakpoint-down(medium) {
    font-size: 1.2rem;
    line-height: 1.3rem;
    padding: 1rem;
  }

  &__header {
    align-items: flex-start;
    gap: 10px;

    img {
      width: 23px;
    }
  }

  &__title {
    font-size: 1.5rem;
    @include breakpoint-down(medium) {
      font-size: 1.2rem;
    }
  }

  a {
    color: #fff;
    &:hover {
      color: #a3a5f0;
    }
  }
  p {
    font-size: 0.8rem;
  }
}
</style>
