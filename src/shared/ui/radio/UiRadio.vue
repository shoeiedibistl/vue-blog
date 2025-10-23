<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  class?: string
  label: string
  name: string
  value: string
  checked?: boolean
  disabled?: boolean
}

const props = defineProps<Props>()
const attrs = useAttrs()

const classes = computed(() => [
  'ui-radio',
  props.class,
  { disabled: props.disabled },
])
</script>

<template>
  <label :class="classes">
    <input
      class="ui-radio__input"
      type="radio"
      v-bind="attrs"
      :name="props.name"
      :value="props.value"
      :checked="props.checked"
      :disabled="props.disabled"
    />
    <span class="ui-radio__circle"></span>
    <span class="ui-radio__text">{{ props.label }}</span>
  </label>
</template>

<style lang="scss">
@import './ui-radio.scss';
</style>
