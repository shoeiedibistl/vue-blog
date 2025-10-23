<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  class?: string
  title?: string
  name: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'ASTRO COMPONENT',
})

const attrs = useAttrs()

const wrapperClasses = computed(() => ['component-shelf w-full lg:!w-[80vw]', props.class])

const flexClasses = ['flex justify-between gap-[2rem] devices:flex-col']
const descriptionClasses = ['shrink-2 basis-[50rem] devices:basis-0 component-shelf__description']
</script>

<template>
  <div
    :class="wrapperClasses"
    :id="props.name"
    :data-shelf-name="props.name"
    :data-shelf-title="props.title"
    v-bind="attrs"
  >
    <div class="component-shelf__name">
      <h2>{{ props.name }}</h2>
    </div>

    <div :class="flexClasses">
      <div :class="descriptionClasses">
        {{ props.description }}
      </div>
    </div>

    <div class="component-shelf__examples">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import './component-shelf.scss';
</style>
