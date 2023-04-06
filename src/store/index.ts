import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import type { TvShow } from '@/types/TvShow'

// Define a interface for the state
interface State {
  favorites: number[]
}

// Define injection key for using store
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    favorites: []
  },
  mutations: {
    // Add a show to favorites list
    addToFavorites(state, showId: number) {
      if (!state.favorites.includes(showId)) {
        state.favorites.push(showId)
      }
    },
    // Remove a show from favorites list
    removeFromFavorites(state, showId: number) {
      const index = state.favorites.indexOf(showId)
      if (index !== -1) {
        state.favorites.splice(index, 1)
      }
    }
  },
  getters: {
    // Check if a show is favorite
    isFavorite(state) {
      return (showId: number) => {
        return state.favorites.includes(showId)
      }
    }
  }
})

// Define a function to use store with type-checking
export function useStore() {
  return baseUseStore(key)
}
