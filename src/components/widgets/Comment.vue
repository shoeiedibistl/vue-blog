<script setup>
  defineProps({
    auhtor: {
      type: String,
      default: "Comment author",
    },
    time: {
      type: String,
      default: "12:21 - 31.12.1999",
    },
    text: {
      type: String,
      default: "comment text",
    },
  });
</script>

<template>
  <div class="comment">
    <div class="comment__head">
      <div class="comment__author">{{ auhtor }}</div>
      <div class="comment__date">{{ time }}</div>
    </div>
    <div class="comment__text">{{ text }}</div>
  </div>
</template>

<style lang="scss">
  .comment {
    padding-block: 20px;
    border-bottom: 1px solid #ccc;

    &__head {
      display: flex;
      gap: 12px;

      width: fit-content;
      max-width: 100%;
    }

    &__author {
      font-size: 14px;
      font-weight: 500;

      flex: 1;

      overflow: hidden;
      display: -moz-box;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      box-orient: vertical;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      line-clamp: 1;
    }

    &__date {
      font-size: 14px;
      color: #c0c0c0;

      flex-shrink: 0;

      position: relative;

      &::before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        margin-right: 12px;
        transform: translateY(-50%);
        background: #ccc;
        border-radius: 50%;
        flex-shrink: 0;
      }
    }

    &__text {
      margin-top: 12px;
    }
  }
</style>
