<template>
  <div class="favorite-container">
    <h2>Favourites</h2>
    <div class="favorite-list flex">
      <Favorite
        v-for="fav in allFavorites"
        :key="fav.id"
        :favorite="fav"
        @delete="removeFavorite"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import Favorite from './Favorite.vue'

export default {
  components: { Favorite },
  setup() {
    const store = useStore()
    const allFavorites = computed(() => store.getters.getAllFavorites)

    const removeFavorite = (index: Number) => {
      console.log('delete')
      store.commit('removeFromFavorites', index)
    }

    return {
      allFavorites,
      removeFavorite
    }
  }
}
</script>

<style lang="scss" scoped>
.favorite-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  grid-gap: 25px;
}
</style>
