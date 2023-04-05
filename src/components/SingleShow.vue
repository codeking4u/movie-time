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
  <div class="showContainer">
    <div class="showImg">
      <img class="showImg__pic" :src="showdata.image.medium" alt="" />
      <div class="showImg__icons">
        <button class="showImg__icon showImg__icon--star">
          <i class="material-icons">star_rate</i> {{ showdata.rating.average }}
        </button>
        <button class="showImg__icon showImg__icon--heart">
          <i class="material-icons">favorite</i>
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
$primaryColor: #333;
// Variables for responsiveness
$breakpoint-small: 576px;
$breakpoint-medium: 768px;
$breakpoint-large: 992px;
.showContainer {
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  .showImg {
    position: relative;
    display: flex;
    justify-content: center;
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
      display: flex;
      justify-content: space-between;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.5rem;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      color: #fff;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
      }

      &--star {
        margin-right: auto;
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
      /* max-width: 200px; */
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1rem;
    }

    @media screen and (min-width: $breakpoint-medium) {
      width: 55%;
      //padding: 1rem 2rem;
    }

    @media screen and (max-width: $breakpoint-small) {
      flex-direction: column;
      align-items: stretch;

      &__image-container {
        align-items: stretch;
      }

      &__content {
        padding: 1rem;
      }
    }
  }
}
</style>
