<!-- src/shared/ui/Icon.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { icons } from './ui-icons.ts'

export type IconKey = keyof typeof icons

interface Props {
  name: IconKey
  class?: string
  ariaLabel?: string
  initial?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  initial: false,
})

const SelectedIcon = computed(() => icons[props.name])
const role = computed(() => (props.ariaLabel ? 'img' : 'presentation'))
const ariaHidden = computed(() => (props.ariaLabel ? undefined : 'true'))
</script>

<template>
  <component
    :is="SelectedIcon"
    :class="['ui-icon', { icon_initial: props.initial }, props.class]"
    :role="role"
    :aria-hidden="ariaHidden"
    :aria-label="props.ariaLabel"
  />
</template>

<style lang="scss">
@import './ui-icon.scss';
</style>
