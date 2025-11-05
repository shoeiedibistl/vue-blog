<script setup>
  import EyeSvg from "../ui/svg/EyeSvg.vue";
  import { inject } from "vue";

  const postMeta = inject("postMeta", null);
  const articleMeta = inject("articleMeta", null);

  const views = postMeta?.views ?? articleMeta?.views ?? 0;
  const viewed = postMeta?.viewed ?? articleMeta?.viewed ?? false;
</script>

<template>
  <div
    class="views"
    :class="([views > 0 ? 'not-empty' : ''], { viewed: viewed })"
  >
    <EyeSvg />
    <span>
      {{ views }}
    </span>
  </div>
</template>

<style lang="scss">
  .views {
    font-size: 13px;
    line-height: 18px;
    color: #c0c0c0;

    display: flex;
    gap: 4px;
    align-items: center;

    &.not-empty {
      color: initial;
    }

    &.viewed {
      color: #42b883;
    }

    svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
  }
</style>
