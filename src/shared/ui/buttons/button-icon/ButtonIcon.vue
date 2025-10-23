<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import UiIcon, { IconKey } from '@/shared/ui/icon/UiIcon.vue'

type TagType = 'button' | 'a' | 'div' | 'span'
type Size = '48' | '40'
type Color = 'default' | 'accent' | 'purple'

interface Props {
  as?: TagType
  size?: Size
  color?: Color
  class?: string
  name: IconKey
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  size: '48',
  color: 'default',
})

const attrs = useAttrs()

const Tag = computed(() => ((attrs as any).href ? 'a' : props.as || 'button'))

const classes = computed(() => [
  'button-icon',
  props.size && `button-icon_size_${props.size}`,
  props.color && `button-icon_color_${props.color}`,
  props.class,
])
</script>

<template>
  <component :is="Tag" v-bind="attrs" :class="classes">
    <UiIcon :name="props.name" />
  </component>
</template>

<style lang="scss">
@import './button-icon.scss';
</style>
