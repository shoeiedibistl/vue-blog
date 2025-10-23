<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import Icon, { type IconKey } from '@/shared/ui/icon/UiIcon.vue'

type Variant = 'text' | 'contained' | 'outlined'
type Color = 'light' | 'primary'

interface Props {
  as?: 'button' | 'a' | 'div' | 'span'
  variant?: Variant
  color?: Color
  class?: string
  iconStart?: IconKey
  iconEnd?: IconKey
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'contained',
  color: 'primary',
})

const attrs = useAttrs()

const tag = computed(() => ((attrs as any).href ? 'a' : (props.as ?? 'button')))

const classes = computed(() => [
  'ui-button',
  props.variant && `ui-button_variant_${props.variant}`,
  props.color && `ui-button_color_${props.color}`,
  props.class,
])
</script>

<template>
  <component :is="tag" v-bind="attrs" :class="classes">
    <span v-if="props.iconStart" class="ui-button__icon ui-button__icon_left">
      <Icon :name="props.iconStart" />
    </span>

    <span class="ui-button__text">
      <slot />
    </span>

    <span v-if="props.iconEnd" class="ui-button__icon ui-button__icon_right">
      <Icon :name="props.iconEnd" />
    </span>
  </component>
</template>

<style lang="scss">
@import './ui-button.scss';
</style>
