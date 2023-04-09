import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EpisodeList from '../../Episode/EpisodeList.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(EpisodeList, { props: { id: '1' } })
    expect(wrapper.text()).toContain('Episodes')
  })
})
