<template>
  <router-link :to="{ name: 'ShowDetail', params: { id } }" class="favorite flex flex-ai-c">
    <div class="favorite__img">
      <img :src="image?.medium || image?.original || SHOW_DEFAULT_PIC" alt="Show image" />
    </div>
    <div class="favDetails flex flex-jc-sb">
      <p class="favDetails__name">{{ name }}</p>
      <div class="favDetails__delete flex flex-jc-c flex-ai-c">
        <button class="delete-icon" @click.prevent="() => removeItem(id)">
          <i :class="'material-icons'">clear</i>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Favorite } from '@/types/TvShow'

export default defineComponent({
  name: 'Favorite',
  props: {
    favorite: {
      type: Object as () => Favorite,
      required: true
    }
  },
  emits: ['delete'],
  methods: {
    removeItem(index: number) {
      this.$emit('delete', index)
    }
  },
  setup(props) {
    const { id, name, image }: Favorite = props.favorite
    const SHOW_DEFAULT_PIC = import.meta.env.VITE_SHOW_DEFAULT_PIC

    return {
      id,
      name,
      image,
      SHOW_DEFAULT_PIC
    }
  }
})
</script>

<style scoped lang="scss">
.favorite {
  margin-bottom: 10px;
  max-width: 350px;
  color: #000;
  &:hover {
    background: #f4f4f4;

    .favDetails__name {
      text-decoration: underline;
    }
    .delete-icon {
      visibility: visible;
    }
  }
  &__img {
    margin-right: 10px;

    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
    }
  }
}

.favDetails {
  width: 100%;
  &__name {
    font-size: 1rem;
    padding-right: 2rem;
  }

  &__delete {
    margin-left: auto;
    font-size: 1rem;
    cursor: pointer;
    .delete-icon {
      visibility: hidden;
      padding: 0px 4px;
      @include breakpoint-down(small) {
        visibility: visible;
      }

      &:hover {
        color: #8f0404;
      }
    }
  }
}
</style>
