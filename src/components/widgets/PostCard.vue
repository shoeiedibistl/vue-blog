<script setup>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12.0002C20.2531 15.5764 15.8775 19 11.9998 19C8.12201 19 3.74646 15.5764 2 11.9998"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12.0002C20.2531 8.42398 15.8782 5 12.0005 5C8.1227 5 3.74646 8.42314 2 11.9998"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>
            {{ views }}
          </span>
        </div>
        <div
          class="post-card__comments"
          :class="[comments > 0 ? 'not-empty' : '']"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z"
              fill="currentColor"
            />
            <path
              d="M8 9L16 9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 13L13 13"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
        border-color: transparent;
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
      gap: 24px;
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
