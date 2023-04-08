<template>
  <div class="search-container flex flex-ai-c flex-jc-c section">
    <input
      type="text"
      name="search"
      id="search"
      v-model="searchQuery"
      placeholder="Type your query"
    />
    <button class="btn search-btn" @click="search">Search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const searchQuery = ref('')

    const search = () => {
      router.push({ path: '/search', query: { q: searchQuery.value } })
    }

    return { searchQuery, search }
  }
})
</script>

<style scoped lang="scss">
.search-container input[type='text'] {
  flex: 0 0 70%;
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: $primary-color;
}
</style>
