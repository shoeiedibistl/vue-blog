<template>
  <div class="skeleton">
    <div class="skeleton__image skeleton__decor"></div>
    <div class="skeleton__content">
      <h3 class="skeleton__title skeleton__decor"></h3>
      <p class="skeleton__description skeleton__decor"></p>
    </div>
    <div class="skeleton__footer">
      <div class="skeleton__date skeleton__decor"></div>
      <div class="skeleton__meta">
        <div class="skeleton__views skeleton__decor"></div>
        <div class="skeleton__comments skeleton__decor"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .skeleton {
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

    &__decor {
      border-radius: 8px;

      background: linear-gradient(90deg, #f5f5f5 0%, #e8e8e8 50%, #f5f5f5 100%);
      background-size: 300% 100%;
      animation: skeleton-shimmer 5s infinite ease-in-out;

      @keyframes skeleton-shimmer {
        0% {
          background-position: 200% 0;
        }
        50% {
          background-position: 0% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    }

    &__image {
      width: 100%;
      height: 200px;

      border-radius: 4px;

      overflow: hidden;
      -webkit-mask-image: -webkit-radial-gradient(
        circle,
        white 100%,
        black 100%
      );
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      margin-bottom: 24px;
    }

    &__title {
      height: 29px;
    }

    &__description {
      height: 58px;
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
      width: 64px;
      height: 18px;
    }

    &__views {
      width: 46px;
      height: 18px;
    }

    &__comments {
      width: 46px;
      height: 18px;
    }
  }
</style>
