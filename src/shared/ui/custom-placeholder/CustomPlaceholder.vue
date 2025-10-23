<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  class?: string
  left?: number
}

const props = withDefaults(defineProps<Props>(), {
  left: 20,
})

const attrs = useAttrs()

const classes = computed(() => ['custom-placeholder', props.class])
</script>

<template>
  <div :class="classes" v-bind="attrs">
    <span><slot /></span>
  </div>
</template>

<style scoped lang="scss">
@import './custom-placeholder.scss';
</style>
