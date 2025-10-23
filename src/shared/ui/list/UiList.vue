<script setup lang="ts">
import { computed, defineProps } from 'vue'
import UiText from '@/shared/ui/text/UiText.vue'

type Variant = 'bullet' | 'duo-numeric' | 'numeric'
type Color = 'white' | 'gray'

interface ListItem {
  title: string
  subitems?: string[]
}

type ListItems = string[] | ListItem[]

interface Props {
  as?: 'ul' | 'ol'
  variant?: Variant
  color?: Color
  class?: string
  items?: ListItems
}

const props = withDefaults(defineProps<Props>(), {
  as: 'ul',
  variant: 'bullet',
  color: 'gray',
  items: () => [],
})

function isListItem(item: unknown): item is ListItem {
  return typeof item === 'object' && item !== null && 'title' in item
}

const rootTag = computed(() => props.as)
const listClasses = computed(() => [
  'ui-list',
  { [`ui-list_variant_${props.variant}`]: !!props.variant },
  props.variant === 'duo-numeric' && 'bullet',
  props.class,
])
</script>

<template>
  <component :is="rootTag" :class="listClasses">
    <template
      v-if="props.variant === 'duo-numeric' && props.items.length && isListItem(props.items[0])"
    >
      <li v-for="(item, index) in props.items as ListItem[]" :key="index" class="duo-numeric">
        <UiText :color="props.color">
          <span class="duo-numeric__title">
            <span>{{ index + 1 }}. </span>
            <span>{{ item.title }}</span>
          </span>
          <ul v-if="item.subitems" class="duo-numeric__sublist">
            <li v-for="(sub, subIndex) in item.subitems" :key="subIndex">
              <span class="duo-numeric__subitem">
                <span>{{ index + 1 }}.{{ subIndex + 1 }}</span>
                <span>{{ sub }}</span>
              </span>
            </li>
          </ul>
        </UiText>
      </li>
    </template>

    <template v-else>
      <li v-for="(item, i) in props.items as string[]" :key="i">
        <UiText :color="props.color">{{ item }}</UiText>
      </li>
    </template>

    <slot v-if="!props.items.length" />
  </component>
</template>

<style lang="scss">
@import './ui-list.scss';
</style>
