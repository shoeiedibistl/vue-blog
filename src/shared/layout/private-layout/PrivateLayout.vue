<template>
  <div class="private-layout">
    <main class="private-layout__main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.private-layout {
  flex-grow: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &__main {
    flex-grow: 1;
  }
}
</style>