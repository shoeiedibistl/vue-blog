<script setup lang="ts">
import { computed } from 'vue'
import UiButton from '@/shared/ui/buttons/button/UiButton.vue'

interface Props {
  currentPage?: number
  totalPages: number
  class?: string
  showMoreText?: string
  showLoadMore?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  showMoreText: 'Показать еще',
  showLoadMore: true,
})

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
  (e: 'loadMore'): void
}>()

const visiblePages = computed(() => {
  const pages: (number | string)[] = []
  const maxVisible = 5

  if (props.totalPages <= maxVisible) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1)
  }

  if (props.currentPage! <= 3) {
    pages.push(1, 2, 3, 4, '...', props.totalPages)
  } else if (props.currentPage! >= props.totalPages - 2) {
    pages.push(
      1,
      '...',
      props.totalPages - 3,
      props.totalPages - 2,
      props.totalPages - 1,
      props.totalPages,
    )
  } else {
    pages.push(
      1,
      '...',
      props.currentPage! - 1,
      props.currentPage,
      props.currentPage! + 1,
      '...',
      props.totalPages,
    )
  }

  return pages
})

function goToPage(page: number | string) {
  if (typeof page === 'number' && page !== props.currentPage) {
    emit('update:currentPage', page)
  }
}

function handleLoadMore() {
  emit('loadMore')
}

const rootClass = computed(() => ['ui-pagination', props.class])
</script>

<template>
  <section :class="rootClass">
    <div class="ui-pagination__buttons">
      <UiButton
        v-for="(page, idx) in visiblePages"
        :key="idx"
        :class="['ui-pagination__button', { active: page === props.currentPage }]"
        :disabled="page === '...'"
        @click="goToPage(page)"
      >
        {{ page }}
      </UiButton>
    </div>

    <UiButton
      v-if="props.showLoadMore && props.currentPage! < props.totalPages"
      class="ui-pagination__button ui-pagination__button_more"
      @click="handleLoadMore"
    >
      {{ props.showMoreText }}
    </UiButton>
  </section>
</template>

<style lang="scss">
@import './ui-pagination.scss';
</style>
