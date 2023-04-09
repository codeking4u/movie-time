import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/common/AppHeader.vue'

describe('AppHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AppHeader, {
      global: {
        stubs: ['BreadCrumbs', 'TestInfo', 'Search'],
        provide: {
          route: { name: 'test-page' },
          $config: { VITE_PAGES_TO_EXCLUDE_SEARCH_BAR: 'showDetails' }
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'BreadCrumbs' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'TestInfo' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'Search' }).exists()).toBe(false)
  })
})
