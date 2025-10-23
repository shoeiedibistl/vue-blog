<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import UiText from '@/shared/ui/text/UiText.vue'

interface Props {
  text: string
  value?: string
  checked?: boolean
  selectable?: boolean
  class?: string
}

const modelValue = defineModel<boolean>() // для v-model, если нужно
const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  checked: false,
  selectable: false,
})

const attrs = useAttrs()
const baseClasses = computed(() => ['ui-badge', props.class])
</script>

<template>
  <label v-if="props.selectable" :class="[...baseClasses, 'ui-badge_selectable']">
    <input
      type="checkbox"
      class="ui-badge__input"
      v-model="modelValue"
      :value="props.value ?? props.text"
      :checked="props.checked"
      v-bind="attrs"
    />
    <UiText class="ui-badge__text" variant="18" color="black" weight="400">
      {{ props.text }}
    </UiText>
  </label>

  <span v-else :class="baseClasses" v-bind="attrs">
    <UiText class="ui-badge__text" variant="18" color="black" weight="400">
      {{ props.text }}
    </UiText>
  </span>
</template>

<style scoped lang="scss">
@import './ui-badge.scss';
</style>
