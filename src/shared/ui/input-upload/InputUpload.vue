<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

interface Props {
  modelValue?: File[]
  class?: string
  name: string
  accept?: string
  multiple?: boolean
  maxFiles?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  multiple: false,
  maxFiles: 5,
  accept: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', files: File[]): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([...props.modelValue])

watch(
  () => props.modelValue,
  (v) => {
    files.value = [...(v || [])]
  },
)

function addFiles(newFiles: File[]) {
  const combined = props.multiple ? [...files.value, ...newFiles] : newFiles
  files.value = combined.slice(0, props.maxFiles)
  emit('update:modelValue', files.value)
}

function removeFile(idx: number) {
  files.value.splice(idx, 1)
  emit('update:modelValue', files.value)
}

function onInputChange(e: Event) {
  const target = e.target as HTMLInputElement
  const selected = Array.from(target.files || [])
  addFiles(selected)
  if (inputRef.value) inputRef.value.value = ''
}

function onDrop(e: DragEvent) {
  e.preventDefault()
  const dropped = Array.from(e.dataTransfer?.files || [])
  addFiles(dropped)
  dragging.value = false
}
function onDragOver(e: DragEvent) {
  e.preventDefault()
  dragging.value = true
}
function onDragLeave() {
  dragging.value = false
}

const dragging = ref(false)
const inputId = `input-upload-${Math.random().toString(36).slice(2)}`
const rootClass = computed(() => [
  'input-upload',
  props.class,
  { 'input-upload--dragover': dragging.value },
])
</script>

<template>
  <div :class="rootClass">
    <input
      ref="inputRef"
      :id="inputId"
      type="file"
      :name="props.name"
      :accept="props.accept"
      :multiple="props.multiple"
      class="input-upload__input"
      @change="onInputChange"
    />
    <label :for="inputId" class="input-upload__label"> Choose files </label>
    <ul class="input-upload__files-list">
      <li v-for="(file, idx) in files" :key="file.name + idx" class="input-upload__file-item">
        <span class="input-upload__file-name" :title="file.name">{{ file.name }}</span>
        <button
          type="button"
          class="input-upload__remove-btn"
          aria-label="Remove {{file.name}}"
          @click="removeFile(idx)"
        >
          &times;
        </button>
      </li>
    </ul>
    <div
      class="input-upload__dropzone"
      @drop="onDrop"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    ></div>
  </div>
</template>

<style lang="scss">
@import './input-upload.scss';
</style>
