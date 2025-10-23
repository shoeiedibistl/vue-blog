<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface DescriptionItem {
  title: string
  value: string
}

interface Props {
  class?: string
  list: DescriptionItem[]
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
})

const attrs = useAttrs()
const classes = computed(() => ['description-list', props.class])
</script>

<template>
  <dl :class="classes" v-bind="attrs">
    <div v-for="(item, index) in props.list" :key="index" class="description-list__item">
      <dt class="description-list__title">{{ item.title }}</dt>
      <dd class="description-list__value">{{ item.value }}</dd>
    </div>
  </dl>
</template>

<style scoped lang="scss">
@import './description-list.scss';
</style>
