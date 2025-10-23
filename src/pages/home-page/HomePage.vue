<script setup lang="ts">
import UiContainer from '@/shared/ui/container/UiContainer.vue'
import UiButton from '@/shared/ui/buttons/button/UiButton.vue'
</script>

<template>
  <div class="home-page">
    <UiContainer>
      <div class="flex flex-col gap-4 w-[360px] mt-4">
        <RouterLink to="ui"><UiButton>UI</UiButton></RouterLink>
        <RouterLink to="/"><UiButton>Главная</UiButton></RouterLink>
        <RouterLink to="/profile"><UiButton>Профиль</UiButton></RouterLink>
      </div>
    </UiContainer>
  </div>
</template>

<style lang="scss">
</style>