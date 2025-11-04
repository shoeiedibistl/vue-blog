<script setup>
import { ref, defineEmits, defineProps, defineExpose} from 'vue'

defineProps({
  inheritAttrs: false,
  placeholder: {
    default: 'myPlaceholder'
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'input', 'change'])

const inputRef = ref(null)

const focus = ()=>{
  inputRef.value?.focus()
  console.log('Input focus')
}

const blur = ()=>{
  inputRef.value?.blur()
  console.log('Input blur')
}

const clear = ()=>{
  inputRef.value?.clear()
  console.log('Input clear')
}

const getValue = ()=> {
  console.log('Input getValue')
  return inputRef.value?.value
}

defineExpose({
  focus,
  blur,
  clear,
  getValue
})

function handleInput(e) {
  const value = e.target.value

  emit('update:modelValue', value)
  emit('input', value)
}

function handleChange (e) {
  const value = e.target.value

  emit('change', value)
}
</script>

<template>
  <label class="input-label">
    <input type="text" class="input" v-bind="$attrs" :placeholder="placeholder" ref="inputRef" :value="modelValue" @input="handleInput" @change="handleChange">
  </label>
</template>

<style lang: scss>
  input {
    height: 40px;
    width: 420px;

    padding: 0 12px;
    border: 1px solid #ccc;
    border-radius: 4px;

    color: #3c3c3c;
    caret-color: #9c9c9c;
    font-size: 14px;
    font-weight: 500;

    transition: .3s;

    @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: #33a06f;
      }
    }

    &:focus {
        border-color: #33a06f;
    }

    &::placeholder {
      color: #cccccc;
    }
  }
</style>
