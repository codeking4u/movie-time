<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import type { TvShow, Favorite } from '@/types/TvShow'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import DOMPurify from 'dompurify'

export default defineComponent({
  name: 'SingleShow',
  props: {
    showdata: {
      type: Object as PropType<TvShow>,
      default: () => ({})
    },
    disableClick: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const router = useRouter()
    const store = useStore()

    function toggleFavorite() {
      const { id, name, image }: Favorite = props.showdata
      const FavData: Favorite = { id, name, image }

      if (store.getters.isFavorite(FavData.id)) {
        store.commit('removeFromFavorites', FavData.id)
      } else {
        store.commit('addToFavorites', FavData)
      }
    }

    // Define computed property to get current isFavourite value
    const currentIsFavourite = computed(() => {
      return store.getters.isFavorite(props.showdata.id)
    })

    function redirectToSingleShow() {
      router.push({ path: `/show/${props.showdata?.id}` })
    }

    const SHOW_DEFAULT_PIC = import.meta.env.VITE_SHOW_DEFAULT_PIC
    const sanitizedSummary = DOMPurify.sanitize(props.showdata?.summary || '')

    return {
      redirectToSingleShow,
      toggleFavorite,
      currentIsFavourite,
      SHOW_DEFAULT_PIC,
      sanitizedSummary
    }
  }
})
</script>

<template>
  <div v-if="showdata">
    <div
      class="showContainer flex"
      :class="{ enabled: !disableClick }"
      @click="() => !disableClick && redirectToSingleShow()"
    >
      <div class="showImg flex flex-jc-c">
        <img
          class="showImg__pic"
          :src="showdata.image?.medium || showdata.image?.original || SHOW_DEFAULT_PIC"
          alt=""
        />
        <div class="showImg__icons flex flex-jc-sb">
          <div class="showImg__icon flex flex-jc-c flex-ai-c">
            <i class="material-icons showImg__icon--star">star_rate</i>
            <span class="showImg__icon--value">{{ showdata.rating.average }}</span>
          </div>
          <button class="showImg__icon" @click.stop="toggleFavorite">
            <i
              :class="[
                'material-icons',
                'showImg__icon--heart',
                currentIsFavourite ? 'isFavourite' : ''
              ]"
              >favorite</i
            >
          </button>
        </div>
      </div>
      <div class="showDetails">
        <h2 class="showDetails__title">{{ showdata.name }}</h2>
        <p class="showDetails__text" v-html="sanitizedSummary"></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.showContainer {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  transition: transform 0.4s ease-out, box-shadow 0.2s ease-out;

  &.enabled {
    cursor: pointer;
    &:hover {
      box-shadow: -1px 1px 14px -6px rgba(11, 11, 11, 0.5);
      transform: translateY(-2px);
      .showDetails__title {
        text-decoration: underline;
      }
    }
  }

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
          opacity: 0.8;
        }
      }

      .isFavourite {
        color: red;
        opacity: 1;
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
