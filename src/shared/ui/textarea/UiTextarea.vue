<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import CustomPlaceholder from '@/shared/ui/custom-placeholder/CustomPlaceholder.vue'

interface Props {
  class?: string
  placeholder?: string
  customPlaceholder?: boolean
  'data-validate'?: string
  name?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  customPlaceholder: true,
})

const attrs = useAttrs()
const classes = computed(() => ['ui-textarea__field', props.class])
</script>

<template>
  <div class="ui-textarea" data-input-parent>
    <textarea
      :class="classes"
      data-input
      :placeholder="!props.customPlaceholder ? props.placeholder : ''"
      v-bind="attrs"
    />
    <CustomPlaceholder v-if="props.customPlaceholder">
      {{ props.placeholder }}
    </CustomPlaceholder>
    <span class="ui-textarea__error text-red" data-error-container></span>
  </div>
</template>

<style lang="scss">
@import './ui-textarea.scss';
</style>
