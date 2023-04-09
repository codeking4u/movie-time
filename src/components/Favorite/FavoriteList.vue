<template>
  <div class="favorite-container section">
    <h2>Favourites</h2>
    <template v-if="allFavorites.length">
      <div class="favorite-list flex">
        <FavoriteShow
          v-for="fav in allFavorites"
          :key="fav.id"
          :favorite="fav"
          @delete="removeFavorite"
        />
      </div>
    </template>
    <template v-else>
      <p>No favourites added yet. Click on <i class="material-icons">favorite</i> icon to add.</p>
    </template>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import FavoriteShow from './FavoriteShow.vue'

export default {
  components: { FavoriteShow },
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
