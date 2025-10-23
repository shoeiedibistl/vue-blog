<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import UiIcon from '../icon/UiIcon.vue'
import UiText from '../text/UiText.vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()
const attrs = useAttrs()

const classes = computed(() => ['ui-author', props.class])
</script>

<template>
  <UiText :class="classes" v-bind="attrs">
    Сделано в
    <a href="https://cloudmill.ru" class="ui-author__logo" target="_blank" rel="noopener noreferrer"
      ><UiIcon name="author-logo"
    /></a>
  </UiText>
</template>

<style scoped lang="scss">
@import './ui-author.scss';
</style>
