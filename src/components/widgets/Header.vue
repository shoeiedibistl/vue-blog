<template>
  <header class="header">
    <RouterLink to="/">
      <div class="header__logo">Logo</div>
    </RouterLink>
    <div class="header__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/ui">Ui</RouterLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;

    background: beige;

    &__logo {
      background-color: orange;
      width: 120px;
      height: 50px;

      color: white;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__links {
      display: flex;
      gap: 12px;
      flex-wrap: nowrap;
    }
  }
</style>
