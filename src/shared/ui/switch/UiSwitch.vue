<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface BaseProps {
  class?: string
  checked?: boolean
  disabled?: boolean
  name?: string
  readonly?: boolean
  required?: boolean
  value?: string | number | boolean
  label?: string 
}

const props = defineProps<BaseProps>()
const attrs = useAttrs()

const classes = computed(() => ['ui-switch', props.class])
</script>

<template>
  <label :class="classes">
    <input
      type="checkbox"
      v-bind="attrs"
      :checked="props.checked"
      :disabled="props.disabled"
      :name="props.name"
      :readonly="props.readonly"
      :required="props.required"
      :value="props.value"
    />

    <span class="ui-switch__text">
      <slot>{{ props.label }}</slot>
    </span>

    <span class="ui-switch__toggler">
      <span class="ui-switch__slider"></span>
    </span>
  </label>
</template>

<style lang="scss">
@import './ui-switch.scss';
</style>
