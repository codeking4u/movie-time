<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Episode } from '@/types/TvShow'

export default defineComponent({
  name: 'EpisodeTile',
  props: {
    episodeDetails: {
      type: Object as PropType<Episode>
    }
  },
  setup(props) {}
})
</script>

<template>
  <div v-if="episodeDetails" class="episodeContainer">
    <h3>Episode {{ episodeDetails.number }} : {{ episodeDetails.name }}</h3>
    <div class="episodeTile flex">
      <div class="episodeImg flex flex-jc-c">
        <img class="episodeImg__pic" :src="episodeDetails.image?.medium" alt="" />
      </div>
      <div class="episodeDetails flex flex-d-col flex-jc-sb">
        <p class="episodeDetails__text" v-html="episodeDetails.summary"></p>
        <div class="episodeDetails__other">
          <p>Season {{ episodeDetails.season }} / Number {{ episodeDetails.number }}</p>
          <p>Date: {{ episodeDetails.airdate }}</p>
          <p>Runtime: {{ episodeDetails.runtime }}</p>
          <p>Rating: {{ episodeDetails.rating?.average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.episodeContainer {
  margin: 0 0 45px;
}

h3 {
  font-size: 1.2rem;
}
.episodeTile {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  .episodeImg {
    position: relative;
    align-items: center;

    &__pic {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      min-width: 250px;
      max-height: 210px;
      border-radius: 5px;
    }
  }
  .episodeDetails {
    padding: 0 1rem;

    &__text {
      margin-bottom: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1rem;
    }
  }
}
</style>
