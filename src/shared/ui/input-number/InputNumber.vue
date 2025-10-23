<script setup lang="ts">
import { ref, watch, computed } from 'vue'

interface Props {
  modelValue: number
  class?: string
  variant?: 'default' | (string & {})
  isStart?: boolean
  isEnd?: boolean
  isPositive?: boolean
  valueMin?: number
  valueMax?: number
  step?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  isStart: true,
  isEnd: true,
  isPositive: false,
  valueMin: undefined,
  valueMax: undefined,
  step: 1,
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: number): void
}>()

// внутреннее значение
const inner = ref(props.modelValue)

// синхронизация с v-model
watch(
  () => props.modelValue,
  (v) => {
    if (v !== inner.value) inner.value = v
  },
)

// вычисляем минимальное значение с учётом isPositive
const effectiveMin = computed(() =>
  props.isPositive
    ? props.valueMin !== undefined
      ? Math.max(0, props.valueMin)
      : 0
    : props.valueMin,
)

function clamp(val: number) {
  const min = effectiveMin.value ?? -Infinity
  const max = props.valueMax ?? Infinity
  return Math.max(min, Math.min(max, val))
}

function update(val: number) {
  const c = clamp(val)
  inner.value = c
  emit('update:modelValue', c)
}

function inc() {
  update(inner.value + props.step)
}

function dec() {
  update(inner.value - props.step)
}

function onInput(e: Event) {
  const t = e.target as HTMLInputElement
  let raw = t.value
  if (props.isPositive) {
    raw = raw.replace(/[^\d]/g, '')
  } else {
    const digits = raw.replace(/[^\d]/g, '')
    raw = raw.startsWith('-') ? '-' + digits : digits
  }
  const num = parseFloat(raw)
  if (!Number.isNaN(num)) update(num)
  else if (raw === '' || raw === '-') inner.value = 0
}
</script>

<template>
  <div :class="['input-number', { [`input-number_variant-${variant}`]: !!variant }, props.class]">
    <div v-if="props.isStart" class="input-number__start">
      <slot name="start">
        <button type="button" class="input-number__button input-number__start-button" @click="dec">
          –
        </button>
      </slot>
    </div>

    <div class="input-number__inner">
      <input
        type="text"
        inputmode="numeric"
        :value="inner"
        :min="effectiveMin"
        :max="props.valueMax"
        @input="onInput"
        @blur="() => update(inner)"
      />
    </div>

    <div v-if="props.isEnd" class="input-number__end">
      <slot name="end">
        <button type="button" class="input-number__button input-number__end-button" @click="inc">
          +
        </button>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
@import './input-number.scss';
</style>
