<template>
  <div>
    <ul class="breadcrumbs flex">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <template v-if="breadcrumb.active">
          <span class="active"> {{ breadcrumb.label }}</span></template
        >
        <template v-else>
          <router-link :to="breadcrumb.route">{{ breadcrumb.label }}</router-link>
        </template>
      </li>
      <li v-if="showNameFlag == 'Show'">
        <span class="active">{{ showInfo.value?.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'BreadCrumbs',
  setup() {
    const breadcrumbs = ref([])
    let showInfo = ref('')
    let showNameFlag = ref('')
    const route = useRoute()
    const store = useStore()
    showInfo.value = computed(() => store.getters.getShowDetails)

    watchEffect(() => {
      breadcrumbs.value = getBreadcrumbs(route)
    })

    function getBreadcrumbs(route) {
      const breadcrumbs = []

      if (route.matched && route.matched.length > 0) {
        const matched = route.matched
        const fullpath = route.fullPath

        if (fullpath !== '/') {
          breadcrumbs.push({
            label: 'Dashboard',
            route: '/',
            active: false
          })
        }
        showNameFlag.value = ''
        matched.forEach((match) => {
          if (match.meta.title) {
            if (match.meta.title === 'Show') showNameFlag.value = 'Show'
            breadcrumbs.push({
              label: match.meta.title,
              route: fullpath,
              active: true
            })
          }
        })
      }
      return breadcrumbs
    }

    return {
      breadcrumbs,
      showInfo,
      showNameFlag
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  list-style: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  font-size: 1rem;

  li {
    position: relative;
    padding-left: 10px;
    color: #000;

    &::before {
      content: '/';
      position: absolute;
      left: 2px;
      color: #ccc;
    }

    &:first-child::before {
      content: none;
    }

    .active {
      color: #9f9f9f;
    }

    a {
      color: #1a1a1a;
    }
  }
}

.router-link-active {
  font-weight: bold;
}
</style>
