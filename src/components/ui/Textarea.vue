<script setup>
  import { ref, defineEmits, defineProps, Transition } from "vue";
  import CrossSvg from "./svg/CrossSvg.vue";

  defineProps({
    inheritAttrs: false,
    placeholder: {
      default: "myPlaceholder",
    },
    modelValue: {
      type: String,
      default: "",
    },
  });

  const textareaRef = ref(null);
  const symbolsCounter = ref(0);

  const emit = defineEmits(["update:modelValue", "input", "change"]);

  const getValue = () => {
    return textareaRef.value?.value;
  };

  function handleInput(e) {
    const value = e.target.value;

    symbolsCounter.value = value.length;

    emit("update:modelValue", value);
    emit("input", value);
  }

  function handleChange(e) {
    const value = e.target.value;

    console.log("Textarea handleChange", value);

    symbolsCounter.value = value.length;

    emit("change", value);
  }

  const clear = () => {
    if (textareaRef.value) {
      textareaRef.value.value = "";
      handleInput({ target: textareaRef.value });
      console.log("Textarea clear");
    }
  };

  defineExpose({
    getValue,
    clear,
  });
</script>

<template>
  <label class="textarea-label">
    <textarea
      class="textarea"
      v-bind="$attrs"
      :placeholder="placeholder"
      ref="textareaRef"
      @input="handleInput"
      @change="handleChange"
    ></textarea>
    <span class="textarea__counter">{{ symbolsCounter }}</span>
    <Transition name="cross">
      <span class="textarea__clear" @click="clear" v-show="symbolsCounter > 0">
        <CrossSvg />
      </span>
    </Transition>
  </label>
</template>

<style lang="scss">
  .textarea {
    height: 140px;
    width: 420px;
    resize: none;

    padding: 11px 22px 22px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;

    color: #3c3c3c;
    caret-color: #9c9c9c;
    font-size: 14px;
    font-weight: 500;

    transition: 0.3s;

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

    &-label {
      display: block;
      width: fit-content;
      position: relative;
    }

    &__counter {
      position: absolute;
      bottom: 8px;
      right: 16px;

      font-size: 11px;
      color: #9c9c9c;

      pointer-events: none;
      user-select: none;
    }

    &__clear {
      position: absolute;
      top: 10px;
      right: 16px;
      cursor: pointer;

      width: 20px;
      height: 20px;

      color: #9c9c9c;

      @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
        &:hover {
          color: #33a06f;
        }
      }
    }
  }

  .cross-enter-active,
  .cross-leave-active {
    transition:
      opacity,
      0.3s ease;
  }

  .cross-enter-from,
  .cross-leave-to {
    opacity: 0;
  }
</style>
