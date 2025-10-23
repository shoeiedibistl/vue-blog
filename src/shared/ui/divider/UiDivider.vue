<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  class?: string
  variant?: 140 | 92 | 60 | 48 | 40 | 32 | 24 | 20 | 16 | 12 | 8
  isDesktop?: boolean
  isTablet?: boolean
  isMobile?: boolean
  isDevices?: boolean
  isUnresponsive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 48,
})

const attrs = useAttrs()

const classes = computed(() => [
  'ui-divider',
  props.class,
  props.isUnresponsive
    ? `ui-divider_variant-${props.variant}-unresponsive`
    : `ui-divider_variant-${props.variant}`,
  props.isDesktop && 'desktop',
  props.isTablet && 'tablet',
  props.isMobile && 'mobile',
  props.isDevices && 'devices',
])
</script>

<template>
  <div :class="classes" v-bind="attrs">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import './ui-divider.scss';
</style>
