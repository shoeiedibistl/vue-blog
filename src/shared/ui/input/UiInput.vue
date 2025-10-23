<!-- <script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" data-slot="input" class="ui-input" />
</template>


<style scoped lang="scss">
@import '@/shared/ui/input/ui-input.scss';
</style> -->

<!-- src/shared/ui/input/UiInput.vue -->

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import UiCustomPlaceholder from '../custom-placeholder/CustomPlaceholder.vue'

interface Props {
  class?: string
  type?: string
  name?: string
  value?: string | number
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  customPlaceholder?: boolean
  'data-validate'?: string
}

const props = withDefaults(defineProps<Props>(), {
  customPlaceholder: true,
})

const attrs = useAttrs()
const classes = computed(() => ['ui-input', props.class])
</script>

<template>
  <label :class="classes" data-input-parent>
    <input
      class="ui-input__field"
      data-input
      :type="props.type"
      :name="props.name"
      :value="props.value"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :required="props.required"
      :placeholder="!props.customPlaceholder ? props.placeholder : ' '"
      v-bind="attrs"
    />

    <UiCustomPlaceholder v-if="props.customPlaceholder">
      {{ props.placeholder }}
    </UiCustomPlaceholder>

    <span class="ui-input__error" data-error-container></span>
  </label>
</template>

<style lang="scss">
@import './ui-input.scss';
</style>
