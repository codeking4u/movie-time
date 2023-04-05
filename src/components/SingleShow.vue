<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TvShow } from '@/types/TvShow'

export default defineComponent({
  name: 'SingleShow',
  props: {
    key: Number,
    showdata: {
      type: Object as PropType<TvShow>,
      required: true
    }
  }
})
</script>

<template>
  <div class="showContainer flex">
    <div class="showImg flex flex-jc-c">
      <img class="showImg__pic" :src="showdata.image.medium" alt="" />
      <div class="showImg__icons flex flex-jc-sb">
        <div class="showImg__icon flex flex-jc-c flex-ai-c">
          <i class="material-icons showImg__icon--star">star_rate</i>
          <span class="showImg__icon--value">{{ showdata.rating.average }}</span>
        </div>
        <button class="showImg__icon">
          <i class="material-icons showImg__icon--heart">favorite</i>
        </button>
      </div>
    </div>
    <div class="showDetails">
      <h2 class="showDetails__title">{{ showdata.name }}</h2>
      <p class="showDetails__text" v-html="showdata.summary"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.showContainer {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  .showImg {
    position: relative;
    align-items: flex-end;

    &__pic {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      min-width: 150px;
      max-height: 210px;
    }

    &__icons {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 5px 8px;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &__icon {
      font-size: 0.7rem;
      color: #fff;
      background-color: transparent;
      border: none;

      &--star {
        //margin-right: auto;
      }

      &--value {
        margin-top: 3px;
        padding-left: 3px;
      }
      &--heart {
        opacity: 0.4;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
  .showDetails {
    padding: 0 1rem;

    &__title {
      margin-top: 0;
    }

    // Text styles
    &__text {
      margin-bottom: 0;
      display: -webkit-box;
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1rem;
    }
  }
}
</style>
