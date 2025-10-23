<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface BreadcrumbItem {
  text: string
  href?: string
}

interface Props {
  class?: string
  root?: BreadcrumbItem
  list?: BreadcrumbItem[]
}

const props = withDefaults(defineProps<Props>(), {
  root: () => ({ text: 'Главная', href: import.meta.env.BASE_URL }),
  list: () => [],
})

const attrs = useAttrs()
const classes = computed(() => ['ui-breadcrumbs', props.class])
</script>

<template>
  <nav :class="classes" v-bind="attrs">
    <ul class="ui-breadcrumbs__list" data-horizontal-scroll>
      <li class="ui-breadcrumbs__item">
        <a :href="props.root?.href" class="ui-breadcrumbs__item-text">{{ props.root?.text }}</a>
      </li>

      <li v-for="(item, index) in props.list" :key="index" class="ui-breadcrumbs__item">
        <template v-if="index === props.list.length - 1">
          <span class="ui-breadcrumbs__item-text active">{{ item.text }}</span>
        </template>
        <template v-else>
          <a :href="item.href ?? '#'" class="ui-breadcrumbs__item-text">{{ item.text }}</a>
        </template>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import './ui-breadcrumbs.scss';
</style>
