<!-- <template>
  <component
    :is="`h${level}`"
    :class="['title', `title_h${level}`, `title_${align}`]"
    :style="titleStyles"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  // Уровень заголовка (h1-h6)
  level: {
    type: Number as () => 1 | 2 | 3 | 4 | 5 | 6,
    default: 1,
    validator: (value: number) => value >= 1 && value <= 6,
  },
  // Выравнивание текста
  align: {
    type: String as () => 'left' | 'center' | 'right',
    default: 'left',
  },
})

const titleStyles = computed(() => ({
  textAlign: props.align,
}))
</script> -->

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type Variant = '240' | '140' | '120' | '80' | '48' | '32' | '24' | '20'
type Color = 'white' | 'primary' 
type Weight = '300' | '400' | '500' | '700' | '800'

interface Props {
  tag?: TagType
  variant?: Variant
  color?: Color
  weight?: Weight
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h2',
  variant: '48',
  color: 'primary',
  weight: '400',
})

const attrs = useAttrs()

const Tag = computed(() => props.tag || 'h2')

const classes = computed(() => [
  'ui-title',
  props.variant && `ui-title_variant_${props.variant}`,
  props.color && `ui-title_color_${props.color}`,
  props.weight && `ui-title_weight_${props.weight}`,
  props.class,
])
</script>

<template>
  <component :is="Tag" v-bind="attrs" :class="classes">
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import './ui-title.scss';
</style>
