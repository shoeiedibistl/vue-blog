<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import UiIcon from '@/shared/ui/icon/UiIcon.vue'
import UiText from '@/shared/ui/text/UiText.vue'

interface BaseProps {
  class?: string
  checked?: boolean
  disabled?: boolean
  name?: string
  readonly?: boolean
  required?: boolean
  value?: string | number | boolean
  label?: string
  textVariant?: '32' | '24' | '20' | '18' | '14' | '12'
  textColor?: 'white' | 'gray' | 'black'
  textWeight?: '300' | '400' | '500' | '600' | '700'
}

const modelValue = defineModel<boolean>()
const props = withDefaults(defineProps<BaseProps>(), {
  textVariant: '20',
  textColor: 'black',
  textWeight: '400',
})

const attrs = useAttrs()
const classes = computed(() => ['ui-checkbox', props.class])
</script>

<template>
  <label :class="classes" data-input-parent>
    <span class="ui-checkbox__line">
      <input
        data-input
        type="checkbox"
        v-model="modelValue"
        v-bind="attrs"
        :name="props.name"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :required="props.required"
        :value="props.value"
        :checked="props.checked"
      />

      <span class="ui-checkbox__box">
        <UiIcon name="check-icon" />
      </span>

      <UiText
        class="ui-checkbox__text"
        :variant="props.textVariant"
        :color="props.textColor"
        :weight="props.textWeight"
      >
        <template v-if="props.label">{{ props.label }}</template>
        <slot v-else />
      </UiText>
    </span>

    <span class="checkbox__error" data-error-container></span>
  </label>
</template>

<style scoped lang="scss">
@import './ui-checkbox.scss';
</style>
