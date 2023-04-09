import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EpisodeTile from '../../Episode/EpisodeTile.vue'

describe('EpisodeTile', () => {
  it('renders episode details correctly', () => {
    const episodeDetails = {
      id: 1,
      url: 'https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot',
      name: 'Pilot',
      season: 1,
      number: 1,
      type: 'regular',
      airdate: '2013-06-24',
      airtime: '22:00',
      airstamp: '2013-06-25T02:00:00+00:00',
      runtime: 60,
      rating: { average: 7.1 },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
      },
      summary:
        "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
      _links: {
        self: { href: 'https://api.tvmaze.com/episodes/1' },
        show: { href: 'https://api.tvmaze.com/shows/1' }
      }
    }

    const wrapper = mount(EpisodeTile, {
      props: {
        episodeDetails
      }
    })

    // check if episode title is rendered correctly
    expect(wrapper.find('h3').text()).toBe(`Episode ${episodeDetails.id} : ${episodeDetails.name}`)

    // check if episode image is rendered correctly
    expect(wrapper.find('.episodeImg__pic').attributes('src')).toBe(episodeDetails.image.medium)

    // check if episode summary is rendered correctly
    expect(wrapper.find('.episodeDetails__text').html()).toContain(episodeDetails.summary)

    // check if episode details are rendered correctly
    expect(wrapper.find('.episodeDetails__other').text()).toContain(
      `Season ${episodeDetails.season}`
    )
    expect(wrapper.find('.episodeDetails__other').text()).toContain(`Number ${episodeDetails.id}`)
    expect(wrapper.find('.episodeDetails__other').text()).toContain(
      `Date: ${episodeDetails.airdate}`
    )
    expect(wrapper.find('.episodeDetails__other').text()).toContain(
      `Runtime: ${episodeDetails.runtime}`
    )
    expect(wrapper.find('.episodeDetails__other').text()).toContain(
      `Rating: ${episodeDetails.rating.average}`
    )
  })
})
