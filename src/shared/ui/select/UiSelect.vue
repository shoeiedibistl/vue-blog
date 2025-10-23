<template>
  <v-select
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
    :reduce="reduceFn"
    :label="labelKey"
    :placeholder="placeholder"
    class="my-custom-select"
  >
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-select>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'UiSelect',
  components: {
    vSelect,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    labelKey: {
      type: String,
      default: 'label',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    placeholder: {
      type: String,
      default: 'Выберите вариант',
    },
  },
  computed: {
    reduceFn() {
      return (item) => item[this.valueKey]
    },
  },
}
</script>

<style scoped>
</style>