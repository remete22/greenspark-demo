<template>
  <div class="color-picker">
    <input 
      v-for="color in colorList"
      v-model="modelValue"
      :key="color"
      :id="`${props.id}-${color}`"
      :name="`${props.name}-${color}` || `${props.id}-${color}`"
      :value="color"
      type="radio"
      :class="`color-picker__input bg-product-${color}`"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~~/stores/Product'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: '',
  },
})

const modelValue = defineModel({ type: String, required: true })

const productStore = useProductStore()
const colorList = productStore.getColorList()
</script>

<style scoped>
.color-picker {
  @apply flex gap-1;

  &__input {
    @apply appearance-none size-4 rounded-sm flex-none checked:ring-inset checked:ring-2 checked:ring-darkgray hover:bg-opacity-80 duration-200;
  }
}
</style>