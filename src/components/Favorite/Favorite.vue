<template>
  <div class="favorite">
    <div class="favorite__img">
      <img :src="image.medium" alt="Show image" />
    </div>
    <div class="favDetails flex flex-jc-sb">
      <p class="favDetails__name">{{ name }}</p>
      <div class="favDetails__delete flex flex-jc-c flex-ai-c">
        <button class="delete-icon" @click="removeItem(id)">X</button>
      </div>
    </div>
  </div>
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

    return {
      id,
      name,
      image
    }
  }
})
</script>

<style scoped lang="scss">
.favorite {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:hover {
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
      &:hover {
        color: #8f0404;
      }
    }
  }
}
</style>
