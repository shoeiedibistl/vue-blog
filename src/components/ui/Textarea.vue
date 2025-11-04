<script setup>

import {ref, defineEmits, defineProps} from 'vue'

  defineProps({
    inheritAttrs: false,
    placeholder: {
        default: 'myPlaceholder'
    },
    modelValue: {
      type: String,
      default: ''
    }
  });

  const textareaRef = ref(null)

  const emit = defineEmits(['update:modelValue', 'input', 'change'])

  const getValue=()=> {
    return textareaRef.value?.value
  }

  function handleInput(e) {
    const value = e.target.value

    console.log('Textarea handleInput', value)

    emit('update:modelValue', value)
    emit('input', value)
  }

  function handleChange (e) {
    const value = e.target.value

    console.log('Textarea handleChange', value)

    emit('change', value)
  }

  defineExpose({
    getValue
  })
</script>

<template>
  <label class="textarea-label">
    <textarea class="textarea" v-bind="$attrs" :placeholder="placeholder" ref="textareaRef" @input="handleInput" @change="handleChange"></textarea>
  </label>
</template>


<style lang: scss>
  textarea {
    height: 140px;
    width: 420px;
    resize: none;

    padding: 11px 12px;
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