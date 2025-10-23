
<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  class?: string
  style?: Record<string, string>
}

const props = withDefaults(defineProps<Props>(), {
  style: () => ({}),
})

const attrs = useAttrs()
const classes = computed(() => ['ui-skeleton', props.class])
</script>

<template>
  <div
    :class="classes"
    :style="props.style"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>

<style lang="scss">
@import './ui-skeleton.scss';
</style>
