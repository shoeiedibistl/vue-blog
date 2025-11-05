<script setup>
  import CommentsSvg from "../ui/svg/CommentsSvg.vue";

  import { inject } from "vue";

  const postMeta = inject("postMeta", null);
  const articleMeta = inject("articleMeta", null);

  const commentsCount = postMeta?.comments ?? articleMeta?.commentsCount ?? 0;
</script>

<template>
  <div class="comments" :class="[commentsCount > 0 ? 'not-empty' : '']">
    <CommentsSvg />
    <span>
      {{ commentsCount }}
    </span>
  </div>
</template>

<style lang="scss">
  .comments {
    font-size: 13px;
    line-height: 18px;
    color: #c0c0c0;

    display: flex;
    gap: 4px;
    align-items: center;

    &.not-empty {
      color: initial;
    }

    svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
  }
</style>
