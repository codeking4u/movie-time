import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Search from '@/components/common/Search.vue'

describe('Search', () => {
  it('should render a search input and a search button', () => {
    const wrapper = mount(Search)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button.search-btn').exists()).toBe(true)
  })
})
