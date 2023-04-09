import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBar from '@/components/common/SearchBar.vue'

describe('SearchBar', () => {
  it('should render a search input and a search button', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button.search-btn').exists()).toBe(true)
  })
})
