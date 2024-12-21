<template>
  <div class="checkbox">
    <input
      v-model="modelValue"
      :id="props.id"
      :name="props.name || props.id"
      :required="props.required"
      type="checkbox"
      class="checkbox__input"
    />
    <label 
      v-if="$slots.label"
      :for="props.id"
    >
      <slot name="label" />
    </label>
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
})

const modelValue = defineModel({ type: Boolean, required: true })
</script>

<style scoped>
.checkbox {
  @apply flex items-center gap-2.5;

  &__input {
    @apply appearance-none size-[18px] rounded-sm border-2 border-product-black duration-300 checked:border-product-green relative;

    &::before {
      content: "";

      @apply absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 duration-200 rounded-full size-9 max-w-0 max-h-0 opacity-0 bg-[#AFC6BD]/50;
    }
    &::after {
      content: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM7.71 13.29C7.32 13.68 6.69 13.68 6.3 13.29L2.71 9.7C2.32 9.31 2.32 8.68 2.71 8.29C3.1 7.9 3.73 7.9 4.12 8.29L7 11.17L13.88 4.29C14.27 3.9 14.9 3.9 15.29 4.29C15.68 4.68 15.68 5.31 15.29 5.7L7.71 13.29Z" fill="%233B755F"/></svg>');

      @apply absolute -left-0.5 -top-0.5 opacity-0 duration-200;
    }

    &:hover::before {
      @apply opacity-100 max-w-9 max-h-9;
    }

    &:checked::after {
      @apply opacity-100;
    }
  }
}
</style>