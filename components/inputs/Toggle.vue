<template>
  <div class="toggle">
    <input 
      v-model="modelValue"
      :id="props.id"
      :name="props.name || props.id"
      :required="props.required"
      :disabled="props.disabled"
      type="checkbox"
      class="toggle__input"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const modelValue = defineModel({ type: Boolean, required: true })
</script>

<style scoped>
.toggle__input {
  box-shadow: inset 0px 1.02541px 6.83608px rgba(0, 0, 0, 0.15);

  @apply appearance-none w-11 h-5 rounded-full border border-[#AFC6BD] relative duration-200 checked:bg-product-green checked:shadow-none;

  &::after {
    content: "";
    box-shadow: 0px 0px 1.36722px rgba(0, 0, 0, 0.35);

    @apply absolute -left-px -top-px size-5 rounded-full border border-[#F2EBDB] bg-white duration-200;
  }
  &:hover::after {
    @apply ring-8 ring-[#AFC6BD]/50;
  }
  &:checked::after {
    left: calc(100% - theme('size.5') + 1px);

    @apply border-product-green;
  }
}
</style>
