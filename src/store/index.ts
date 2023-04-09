import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import type { Favorite, State, TvShow } from '@/types/TvShow'

// Define injection key for using store
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    favorites: [],
    showDetail: null
  },
  mutations: {
    // Add a show to favorites list
    addToFavorites(state, FavData: Favorite) {
      if (!state.favorites.some((fav) => fav.id === FavData.id)) {
        state.favorites.push(FavData)
      }
    },
    // Remove a show from favorites list
    removeFromFavorites(state, id: Number) {
      const index = state.favorites.findIndex((fav) => fav.id === id)
      if (index !== -1) {
        state.favorites.splice(index, 1)
      }
    },

    addToShowDetails(state, showDetail: TvShow) {
      state.showDetail = showDetail
    }
  },
  getters: {
    // Check if a show is favorite
    isFavorite(state) {
      return (favId: Number) => {
        return state.favorites.some((fav) => fav.id === favId)
      }
    },
    getAllFavorites(state) {
      return state.favorites
    },
    getShowDetails(state) {
      return state.showDetail
    }
  }
})

// Define a function to use store with type-checking
export function useStore() {
  return baseUseStore(key)
}
