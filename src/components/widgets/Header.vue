<script setup>
  import LogoSvg from "../ui/LogoSvg.vue";
  import Content from "./Content.vue";
  import SearchButton from "./SearchButton.vue";
</script>

<template>
  <header class="header">
    <Content>
      <div class="header__inner">
        <RouterLink to="/">
          <div class="header__logo">
            <LogoSvg />
          </div>
        </RouterLink>
        <div class="header__links">
          <SearchButton />
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/ui">Ui</RouterLink>
        </div>
      </div>
    </Content>
  </header>
</template>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    box-shadow: 0 6px 25px -3px #ccc;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      width: auto;
      height: 50px;

      color: white;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
        &:hover {
          svg {
            path[fill="#42b883"] {
              fill: #33a06f;
            }
          }
        }
      }
    }

    &__links {
      display: flex;
      gap: 12px;
      flex-wrap: nowrap;
      align-items: center;

      a {
        font-weight: 500;
        color: #3c3c3c;

        transition: 0.3s;

        @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
          &:hover {
            color: #33a06f;
          }
        }
      }
    }
  }
</style>
