<script setup>
  import SortSvg from "./svg/SortSvg.vue";

  import { ref, defineExpose } from "vue";

  defineProps({
    selectData: {
      type: Array,
      required: false,
      default: [
        {
          text: "Сначала новые",
          value: "new",
        },
        {
          text: "Сначала старые",
          value: "old",
        },
        {
          text: "Сначала дорогие",
          value: "expensive",
        },
        {
          text: "Сначала дешевые",
          value: "cheap",
        },
      ],
    },
  });

  const isOpen = ref(false);

  const buttonText = ref("Сначала новые");

  const toggle = () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
      document.addEventListener("click", selectClose);
      document.addEventListener("keydown", selectClose);
    }
  };

  const SortBy = ref("new");

  const close = () => {
    isOpen.value = false;

    document.removeEventListener("click", selectClose);
    document.removeEventListener("keydown", selectClose);
  };

  const select = (e) => {
    e.target.dataset.value &&
      ((buttonText.value = e.target.closest("button").textContent),
      (SortBy.value = e.target.dataset.value));

    console.log("SelectSort SortBy", SortBy.value);
    close();
  };

  function selectClose(e) {
    if (!e.target.closest(".select")) {
      close();
    } else {
      if (e.key === "Escape" || e.key === "Backspace") {
        close();
      }
    }
  }

  const getSortBy = () => {
    return SortBy.value;
  };

  defineExpose({
    getSortBy,
  });
</script>

<template>
  <!-- <div class="select" :class="{ active: isOpen }"> -->
  <div class="select">
    <button class="select__selection" @click="toggle" aria-label="">
      <span class="select__selection-icon">
        <SortSvg />
      </span>
      <span class="select__selection-text">{{ buttonText }}</span>
    </button>

    <Transition name="select">
      <ul class="select__list" v-show="isOpen">
        <li v-for="(item, index) in selectData" :key="index">
          <button class="select__variant" data-value="new" @click="select">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
  .select {
    position: relative;
    width: fit-content;

    &.active {
      .select__selection {
        color: #33a06f;
      }

      .select__list {
        opacity: 1;
        transform: none;
        pointer-events: all;
      }
    }

    &__selection {
      font-size: 16px;
      font-weight: 500;
      color: #42b883;

      display: flex;
      align-items: center;
      gap: 12px;

      padding: 0;

      transition: 0.3s;

      @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
        &:hover {
          color: #33a06f;
        }
      }
    }

    &__selection-icon {
      width: 24px;
      height: 24px;

      display: block;
    }

    &__list {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      z-index: 1;

      width: max-content;
      min-width: 160px;

      padding-block: 8px;

      border-radius: 8px;

      box-shadow: 0 6px 25px -3px #ccc;

      background-color: #ffffff;

      transition: 0.3s;
      //  opacity: 0;
      //   pointer-events: none;
    }

    &__variant {
      width: 100%;
      padding: 4px 16px;
      font-size: 14px;
      font-weight: 500;
      text-align: start;
      transition: 0.3s;

      @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
        &:hover {
          color: #33a06f;
        }
      }
    }

    .select-enter-active,
    .select-leave-active {
      transition: all 0.3s ease;
    }

    .select-enter-from {
      opacity: 0;
      pointer-events: none;
      transform: translateY(10px);
    }

    .select-enter-to {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }

    .select-leave-from {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }

    .select-leave-to {
      opacity: 0;
      pointer-events: none;
      transform: translateY(10px);
    }
  }
</style>
