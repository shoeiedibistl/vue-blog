<template>
  <div class="public-layout">
    <AppHeader />
    <main class="public-layout__main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/widgets/header/AppHeader.vue'
import AppFooter from '@/widgets/footer/AppFooter.vue'
defineOptions({
  name: 'PublicLayout',
})
</script>

<style scoped lang="scss">
.public-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__main {
    flex-grow: 1;
  }
}
</style>