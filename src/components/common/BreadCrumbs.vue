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
    </ul>
  </div>
</template>

<script>
import { ref, watchEffect, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'BreadCrumbs',
  setup() {
    const breadcrumbs = ref([])
    const route = useRoute()
    watchEffect(() => {
      breadcrumbs.value = getBreadcrumbs(route)
    })

    // Update breadcrumbs when route changes
    watch(route, (to, from) => {
      breadcrumbs.value = getBreadcrumbs(to)
    })

    function getBreadcrumbs(route) {
      const breadcrumbs = []

      if (route.matched && route.matched.length > 0) {
        const matched = route.matched
        const showName = route.matched.instances?.showdata.name

        const fullpath = route.fullPath

        if (fullpath !== '/') {
          breadcrumbs.push({
            label: 'Dashboard',
            route: '/',
            active: false
          })
        }

        const instance = route.matched.instances?.default
        nextTick(() => {
          if (instance && instance.showdata.name) {
            console.log('check- ' + instance.showdata.name)
          }
        })

        matched.forEach((match) => {
          if (match.meta.title) {
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
      breadcrumbs
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
