<script setup>
  import EyeSvg from "../ui/svg/EyeSvg.vue";
  import CommentsSvg from "../ui/svg/CommentsSvg.vue";

  defineProps({
    title: { type: String, default: "Card title" },
    description: { type: String, default: "Card description" },
    image: String,
    date: { type: String, default: "31.12.1999" },
    views: { type: Number, default: 0 },
    viewed: { type: Boolean, default: false },
    comments: { type: Number, default: 0 },
  });
</script>

<template>
  <div class="post-card">
    <div class="post-card__image">
      <img v-if="image" :src="image" alt="card-image" />
    </div>
    <div class="post-card__content">
      <h3 class="post-card__title">{{ title }}</h3>
      <p class="post-card__description">{{ description }}</p>
    </div>
    <div class="post-card__footer">
      <div class="post-card__date">{{ date }}</div>
      <div class="post-card__meta">
        <div
          class="post-card__views"
          :class="([views > 0 ? 'not-empty' : ''], { viewed: viewed })"
        >
          <EyeSvg />
          <span>
            {{ views }}
          </span>
        </div>
        <div
          class="post-card__comments"
          :class="[comments > 0 ? 'not-empty' : '']"
        >
          <CommentsSvg />
          <span>
            {{ comments }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post-card {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(204, 204, 204, 0.5);

    transition: 0.3s ease;

    @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
      &:hover {
        box-shadow: 0 0 12px 0 #ccc;

        .post-card__image {
          img {
            transform: scale(1.05);
          }
        }
      }
    }

    &__image {
      width: 100%;
      height: 200px;

      background-image: url("data:image/svg+xml,%3Csvg data-v-e3433dcb='' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='10 37 236 179' enable-background='10 37 236 179' xml:space='preserve'%3E%3Cmetadata data-v-inspector='src/components/ui/Logo.vue:12:5'%3ESvg Vector Icons : http://www.onlinewebfonts.com/icon%3C/metadata%3E%3Cg data-v-inspector='src/components/ui/Logo.vue:13:5'%3E%3Cg data-v-inspector='src/components/ui/Logo.vue:14:7'%3E%3Cg data-v-inspector='src/components/ui/Logo.vue:15:9'%3E%3Cpath fill='%23f5f5f5' d='M143.9,48.7L94,59.4l59.8,0.1c32.9,0,59.9,0,60-0.1c0.4-0.4-2.3-11.9-3.3-13.9c-1.3-2.7-5.1-6-7.9-7C198.2,37,196.4,37.3,143.9,48.7z' data-v-inspector='src/components/ui/Logo.vue:16:11'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' d='M49.7,67.6c-3,1-5.5,2.9-7.3,5.5c-2.9,4.1-2.9,0.6-2.7,70.5l0.1,63.6l1.3,2.7c1.5,3.1,4.2,5.7,7.4,7.2l2.2,1h92.2h92.2l2.2-1c3.2-1.5,5.9-4.1,7.4-7.2l1.3-2.7v-64.6V78l-1.3-2.7c-1.5-3.1-4.2-5.7-7.4-7.2l-2.2-1l-91.4-0.1C56.8,66.8,52,66.8,49.7,67.6z M221.8,86.1c1.6,0.4,3,0.9,3.3,1.1c0.3,0.3-1.2,7.3-1.8,7.9c0,0.1-1.5-0.3-3.1-0.8c-5.1-1.6-10.6-1-11.9,1.3c-1.5,2.9,0.1,5,5.6,7.2c8.3,3.4,10.3,4.8,12.3,8.8c1.1,2.2,1.2,3,1,5.8c-0.6,8.3-6.9,12.9-17.6,12.9c-4.5,0-8.1-0.6-10.9-1.9l-1.7-0.8l0.9-3.9c0.9-3.7,1-3.9,2-3.7c0.5,0.1,2.5,0.7,4.3,1.2c7.5,2.1,12.6,0.6,12.6-3.8c0-2.6-1.2-3.7-5.9-5.7c-5.6-2.3-7.2-3.2-9.4-5.2c-2.6-2.3-3.8-5.1-3.8-8.7c0-6.7,5.4-11.9,13.3-12.7C214.9,85,218.1,85.2,221.8,86.1z M77.7,95c2.8,5,6.5,12.1,8.2,15.5c1.7,3.5,2.9,5.9,2.8,5.4c-0.2-0.5-0.4-7.5-0.6-15.6l-0.2-14.6h4.8h4.8v22.1V130h-5.4h-5.4l-6-11c-3.3-6-7.2-13.3-8.5-16.1l-2.4-5.1l0.1,16.1l0.2,16.1h-4.6H61v-22.1V85.8h5.8l5.8,0L77.7,95z M132.7,89.8v4h-8.6h-8.6v4.5v4.5h8.1h8.1v4.3v4.3h-8.1h-8.1v5.2v5.2h9h9v4v4h-14h-14v-22.1V85.8h13.5h13.5L132.7,89.8L132.7,89.8z M151.4,100.8c1.5,8.3,2.7,15.5,2.7,15.9c0,0.5,0.2,0.9,0.4,0.9c0.2,0,0.7-1.7,1-3.7c0.5-3.1,4.7-23.7,5.5-27.1c0.2-1,0.4-1.1,5.6-1l5.3,0.1l2.2,11.6c1.2,6.4,2.5,13.6,2.8,16c0.3,2.4,0.7,4.3,0.8,4.3c0-0.1,0.9-4.3,1.8-9.4c0.9-5.1,2.2-12.2,3-15.9l1.3-6.7l5.1-0.1c4.8-0.1,5.1,0,4.9,0.7c-0.1,0.5-2.7,10.4-5.7,22.1l-5.4,21.3h-5.5h-5.5l-2.5-12.7c-1.3-7-2.6-13.9-2.8-15.4c-0.2-1.5-0.5-2.6-0.7-2.4s-0.6,1.9-0.9,3.7c-0.5,3.2-5.1,24.3-5.6,26c-0.2,0.8-0.8,0.8-5.8,0.7l-5.5-0.1l-5.1-21.6c-2.9-11.9-5.1-21.8-5.2-22c0-0.2,2.4-0.3,5.4-0.3h5.3L151.4,100.8z M134.2,143.2c1.3,1.1,1.6,1.7,1.6,3.4c0,1.7-0.3,2.2-1.6,3.4l-1.5,1.4H97.3H61.8l-1.4-1.4c-1.1-1.1-1.4-1.8-1.4-3.4c0-1.6,0.3-2.3,1.4-3.4l1.4-1.4h35.4h35.4L134.2,143.2z M223.5,143.2c1.1,1.1,1.4,1.8,1.4,3.4c0,1.6-0.3,2.3-1.4,3.4l-1.4,1.4h-35.4h-35.4l-1.5-1.3c-1.2-1.1-1.5-1.7-1.5-3.4s0.3-2.3,1.5-3.4l1.5-1.3h35.4h35.4L223.5,143.2z M134.2,161.8c1.3,1.1,1.6,1.7,1.6,3.4c0,1.7-0.3,2.2-1.6,3.4l-1.5,1.4H97.3H61.8l-1.4-1.4c-1.1-1.1-1.4-1.8-1.4-3.4c0-1.6,0.3-2.3,1.4-3.4l1.4-1.4h35.4h35.4L134.2,161.8z M223.5,161.8c1.1,1.1,1.4,1.8,1.4,3.4c0,1.6-0.3,2.3-1.4,3.4l-1.4,1.4h-35.4h-35.4l-1.5-1.3c-1.2-1.1-1.5-1.7-1.5-3.4s0.3-2.3,1.5-3.4l1.5-1.3h35.4h35.4L223.5,161.8z M134.2,180.3c1.3,1.1,1.6,1.7,1.6,3.4c0,1.7-0.3,2.2-1.6,3.4l-1.5,1.4H97.3H61.8l-1.4-1.4c-1.1-1.1-1.4-1.8-1.4-3.4c0-1.6,0.3-2.3,1.4-3.4l1.4-1.4h35.4h35.4L134.2,180.3z M223.5,180.3c1.1,1.1,1.4,1.8,1.4,3.4c0,1.6-0.3,2.3-1.4,3.4l-1.4,1.4h-35.4h-35.4l-1.5-1.3c-1.2-1.1-1.5-1.7-1.5-3.4s0.3-2.3,1.5-3.4l1.5-1.3h35.4h35.4L223.5,180.3z M134.2,198.8c1.3,1.1,1.6,1.7,1.6,3.4c0,1.7-0.3,2.2-1.6,3.4l-1.5,1.4H97.3H61.8l-1.4-1.4c-1.1-1.1-1.4-1.8-1.4-3.4c0-1.6,0.3-2.3,1.4-3.4l1.4-1.4h35.4h35.4L134.2,198.8z M223.5,198.8c1.1,1.1,1.4,1.8,1.4,3.4c0,1.6-0.3,2.3-1.4,3.4l-1.4,1.4h-35.4h-35.4l-1.5-1.3c-1.2-1.1-1.5-1.7-1.5-3.4s0.3-2.3,1.5-3.4l1.5-1.3h35.4h35.4L223.5,198.8z' data-v-inspector='src/components/ui/Logo.vue:20:11'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' d='M26.9,73.7c-3.9,0.9-8.1,2-9.1,2.6c-4.4,2.2-7.6,7.3-7.7,12.3c-0.1,2,2.9,16.5,11.1,54.6l11.2,51.9l0.2-59.3c0.2-55.2,0.3-59.4,1.1-61.4c0.4-1.1,0.8-2.1,0.7-2.2C34.2,72.2,30.9,72.9,26.9,73.7z' data-v-inspector='src/components/ui/Logo.vue:24:11'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      background-repeat: no-repeat;
      //   background-size: contain;
      background-size: auto 75%;
      background-position: center center;

      border-radius: 4px;

      overflow: hidden;
      -webkit-mask-image: -webkit-radial-gradient(
        circle,
        white 100%,
        black 100%
      );

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: 0.3s ease;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      margin-bottom: 24px;
    }

    &__title {
      font-size: 24px;
      font-weight: 500;
      color: #3c3c3c;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__description {
      font-size: 16px;
      font-weight: 400;

      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__footer {
      margin-top: auto;
      display: flex;
      gap: 20px;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__meta {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }

    &__date {
      font-size: 13px;
      color: #c0c0c0;
    }

    &__views {
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
        color: #33a06f;
      }

      svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
    }

    &__comments {
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
  }
</style>
