<script setup>
  import Input from "../ui/Input.vue";
  import SearchSvg from "../ui/SearchSvg.vue";

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
      <SearchSvg />
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
