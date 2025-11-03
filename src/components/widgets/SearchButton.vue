<script setup>
  import Input from "../ui/Input.vue";
  // import Input from "./Input.vue";
  import { ref } from "vue";

  const isOpen = ref(false);
  let focusTimeout = null;
  let activeInput = null;
  const openToRight = ref(false);

  function click(e) {
    const wrapper = e.target.closest(".search-wrapper");

    const leftDistance = wrapper.getBoundingClientRect().left;

    const inputWidth = 420;

    if (leftDistance < inputWidth) {
      openToRight.value = true;
    }

    isOpen.value = !isOpen.value;

    if (isOpen.value) {
      document.addEventListener("click", close);
      document.addEventListener("keydown", close);

      const input = e.target.closest(".search-wrapper").querySelector("input");
      activeInput = input;

      focusTimeout = setTimeout(() => {
        input.focus();
      }, 400);
    }
  }

  function close(e) {
    if (!e.target.closest(".search-wrapper") || e.key === "Escape") {
      clearTimeout(focusTimeout);
      activeInput?.blur();
      isOpen.value = false;
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    }
  }
</script>

<template>
  <div class="search-wrapper" :class="{ 'open-right': openToRight }">
    <button
      class="search-button"
      type="button"
      aria-label="Search"
      @click="click"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        enable-background="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xml:space="preserve"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
          fill="currentColor"
        />
      </svg>
    </button>
    <Transition name="search">
      <!-- <form class="search-form" :class="{ active: isOpen }"> -->
      <form class="search-form" v-show="isOpen">
        <Input data-attr placeholder="Поиск..." required />
      </form>
    </Transition>
  </div>
</template>

<style lang="scss">
  .search-wrapper {
    position: relative;
    width: fit-content;

    &.open-right {
      .search-form {
        right: auto;
        left: calc(100% + 8px);
      }
    }
  }

  .search-button {
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    color: #3c3c3c;
    border-radius: 4px;
    transition: color 0.2s ease;
    width: 40px;
    height: 40px;

    &:hover {
      color: #33a06f;
    }

    svg {
      display: block;
    }
  }

  .search-form {
    position: absolute;
    top: 50%;
    right: calc(100% + 8px);
    transform: translateY(-50%);

    transition: 0.3s;

    width: fit-content;

    overflow: hidden;

    will-change: width, max-width;

    width: 420px;
    pointer-events: all;

    input {
      width: 100%;
    }
  }

  .search-enter-active,
  .search-leave-active {
    transition: all 0.3s ease;
  }

  .search-enter-from {
    width: 0;
  }

  .search-enter-to {
    width: 420px;
  }

  .search-leave-from {
    width: 420px;
  }

  .search-leave-to {
    width: 0;
    scale: 1;
  }
</style>
