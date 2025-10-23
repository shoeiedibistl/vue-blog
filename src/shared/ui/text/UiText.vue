<script setup lang="ts">
import { computed, useAttrs } from 'vue'

type TagType = 'p' | 'span'
type Variant = '32' | '24' | '20' | '18' | '14' | '12'
type Color = 'white' | 'gray' | 'black'
type Weight = '300' | '400' | '500' | '600' | '700'

interface Props {
  as?: TagType
  variant?: Variant
  color?: Color
  weight?: Weight
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'p',
  variant: '20',
  color: 'black',
  weight: '400',
})

const attrs = useAttrs()
const Tag = computed(() => props.as || 'p')

const classes = computed(() => [
  'ui-text',
  props.variant && `ui-text_variant_${props.variant}`,
  props.color && `ui-text_color_${props.color}`,
  props.weight && `ui-text_weight_${props.weight}`,
  props.class,
])
</script>

<template>
  <component :is="Tag" v-bind="attrs" :class="classes">
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import './ui-text.scss';
</style>
