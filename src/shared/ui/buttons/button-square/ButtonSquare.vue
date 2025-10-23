<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import UiIcon, { IconKey } from '@/shared/ui/icon/UiIcon.vue'

type TagType = 'button' | 'a' | 'div' | 'span'
type Size = '48' | '60' | '64' | '124'
type Color = 'default' | 'accent'

interface Props {
  as?: TagType
  class?: string
  icon: IconKey
  size?: Size
  color?: Color
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  size: '48',
  color: 'default',
})

const attrs = useAttrs()

const Tag = computed(() => ((attrs as any).href ? 'a' : props.as || 'button'))

const classes = computed(() => [
  'button-square',
  props.size && `button-square_size_${props.size}`,
  props.color && `button-square_color_${props.color}`,
  props.class,
])
</script>

<template>
  <component :is="Tag" v-bind="attrs" :class="classes">
    <span class="button-square__icon">
      <UiIcon :name="props.icon" />
    </span>
  </component>
</template>

<style scoped lang="scss">
@import './button-square.scss';
</style>
