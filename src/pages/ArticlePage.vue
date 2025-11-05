<script setup>
  import Content from "@/components/widgets/Content.vue";
  import CounterViews from "@/components/widgets/CounterViews.vue";
  import CounterComments from "@/components/widgets/CounterComments.vue";
  import Button from "@/components/ui/Button.vue";
  import Comment from "@/components/widgets/Comment.vue";
  import ArrowDownSvg from "@/components/ui/svg/ArrowDownSvg.vue";

  import { provide } from "vue";

  const props = defineProps({
    title: {
      type: String,
      default: "Article title",
    },
    text: {
      type: String | null | undefined,
      default: null,
    },
    img: {
      type: String | null | undefined,
      default: null,
    },
    date: {
      type: String,
      default: "31.12.1999",
    },
    views: {
      type: Number,
      default: 0,
    },
    viewed: {
      type: Boolean,
      default: false,
    },
    commentsCount: {
      type: Number,
      default: 0,
    },
  });

  provide("articleMeta", {
    views: props.views,
    viewed: props.viewed,
    commentsCount: props.commentsCount,
  });
</script>

<template>
  <article class="article">
    <Content>
      <h1 class="article__title">{{ title }}</h1>
      <div class="article__info">
        <div class="article__date">{{ date }}</div>
        <div class="article__meta">
          <div class="article__views">
            <CounterViews />
          </div>
          <div class="article__comments-count"><CounterComments /></div>
        </div>
      </div>
      <img src="../assets/images/shashl.jpg" alt="" class="article__image" />
      <div class="article__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut impedit
        itaque quos eaque, quia quis ipsa vero laborum modi illum quaerat. Hic
        laudantium quam, officia laboriosam tenetur veritatis libero
        accusantium. Quod nobis placeat et tempora earum quae perferendis hic,
        culpa quas eveniet vero, ut repudiandae nihil est porro saepe
        necessitatibus ea cumque soluta! Amet nemo, quod molestias ea adipisci
        error.
      </div>

      <div class="article__comments">
        <Button text="Показать комментарии (5)">
          <ArrowDownSvg />
        </Button>
      </div>

      <div class="article__comments-list">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </Content>
  </article>
</template>

<style lang="scss">
  .article {
    padding-block: 48px;

    &__title {
      font-size: 48px;
    }

    &__info {
      margin-top: 96px;

      display: flex;
      justify-content: space-between;
      gap: 48px;
    }

    &__meta {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &__image {
      margin-top: 24px;
      border-radius: 24px;
      overflow: hidden;
      -webkit-mask-image: -webkit-radial-gradient(
        circle,
        white 100%,
        black 100%
      );
    }

    &__text {
      margin-top: 24px;
    }

    &__comments {
      width: fit-content;
      margin: 96px auto 0;
    }

    &__comments-list {
      margin-top: 48px;
    }
  }
</style>
