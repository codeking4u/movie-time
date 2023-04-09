import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import FavoriteList from '@/components/Favorite/FavoriteList.vue'
import router from '@/router'

describe('FavoriteList.vue', () => {
  it('renders correctly', () => {
    const mockStore = createStore({
      getters: {
        getAllFavorites: () => [{ id: 1, name: 'Favorite 1' }]
      }
    })

    const wrapper = mount(FavoriteList, {
      global: {
        plugins: [mockStore, router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
