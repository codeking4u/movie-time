import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import type { Favorite } from '@/types/TvShow'

// Define a interface for the state
interface State {
  favorites: Favorite[]
}

// Define injection key for using store
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    favorites: []
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
    }
  }
})

// Define a function to use store with type-checking
export function useStore() {
  return baseUseStore(key)
}
