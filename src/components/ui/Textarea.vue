<script setup>
  defineProps({
    inheritAttrs: false,
    placeholder: {
        default: 'myPlaceholder'
    }
  });
</script>

<template>
  <label class="textarea-label">
    <textarea class="textarea" v-bind="$attrs" :placeholder="placeholder"></textarea>
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