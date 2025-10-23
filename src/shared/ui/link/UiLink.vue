<script setup lang="ts">
import { computed, useAttrs } from 'vue'

type Weight = '300' | '700'
type Color = 'white' | 'blue' | 'transparent'
type Size = '18' | '32'

interface Props {
  text?: string
  href?: string
  weight?: Weight
  color?: Color
  size?: Size
  class?: string
  isUppercase?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  weight: '300',
  color: 'blue',
  size: '18',
  isUppercase: false,
})

const attrs = useAttrs()

const classes = computed(() => [
  'ui-link',
  props.size && `ui-link_size_${props.size}`,
  props.color && `ui-link_color_${props.color}`,
  props.weight && `ui-link_weight_${props.weight}`,
  props.isUppercase && 'ui-link_uppercase',
  props.class,
])
</script>

<template>
  <a :href="props.href" v-bind="attrs" :class="classes">
    {{ props.text || '' }}
    <slot v-if="!props.text" />
  </a>
</template>

<style scoped lang="scss">
@import './ui-link.scss';
</style>
