<script setup>
  import { useSlots, defineEmits, ref } from "vue";
  import ArrowRightSvg from "./svg/ArrowRightSvg.vue";

  defineProps({
    text: {
      type: String,
      default: "",
    },
  });

  const buttonRef = ref();
  const slots = useSlots();

  const emits = defineEmits(["buttonClick"]);

  function buttonClick(event) {
    emits("buttonClick", buttonRef.value, event);
  }
</script>

<template>
  <button class="button" @click="buttonClick" ref="buttonRef">
    <span v-if="text" class="button__text"> {{ text }} </span>
    <span class="button__icon">
      <ArrowRightSvg v-if="!slots.default" />
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss">
  .button {
    background: none;
    border: 1px solid #ccc;
    cursor: pointer;

    border-radius: 4px;

    height: 48px;
    min-width: 48px;
    width: max-content;

    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    transition: 0.3s;

    font-size: 16px;
    font-weight: 500;

    @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: #33a06f;
        background-color: #33a06f;
        color: #ffffff;
      }
    }

    &__icon {
      width: 28px;
      height: 28px;

      flex-shrink: 0;
    }

    &__text {
      padding-left: 10px;
    }
  }
</style>
