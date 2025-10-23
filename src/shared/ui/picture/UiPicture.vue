<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Source {
  srcset: string
  type?: string
  media?: string
  sizes?: string
}

interface Props {
  src: string
  alt: string
  sources?: Source[]
  class?: string
  imgClass?: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
  sizes?: string
}

const props = withDefaults(defineProps<Props>(), {
  sources: () => [],
  loading: 'lazy',
  fetchpriority: 'auto',
  sizes: '100vw',
})

const attrs = useAttrs()

const pictureClass = computed(() => ['ui-picture', props.class])
const imgClass = computed(() => ['ui-picture__img', props.imgClass])
</script>

<template>
  <picture :class="pictureClass" v-bind="attrs">
    <template v-for="(s, i) in props.sources" :key="i">
      <source :srcset="s.srcset" :type="s.type" :media="s.media" :sizes="s.sizes || props.sizes" />
    </template>

    <img
      :src="props.src"
      :alt="props.alt"
      :loading="props.loading"
      :fetchpriority="props.fetchpriority"
      :sizes="props.sizes"
      :class="imgClass"
      decoding="async"
    />
  </picture>
</template>

<style lang="scss">
@import './ui-picture.scss';
</style>
