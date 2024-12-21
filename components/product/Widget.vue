<template>
  <div class="product-widget">
    <div 
      :class="`product-widget__top bg-product-${selectedColor}`"
    >
      <IconsLogo class="flex-none" />
      <div class="product-widget__action">
        <div class="product-widget__action-name">
          This product {{ props.product.action }}
        </div>
        <div class="product-widget__action__amount">
          {{ props.product.amount }}{{ props.product.type === 'carbon' ? 'kgs' : '' }} {{ props.product.type }}
        </div>
      </div>
    </div>
    <div class="product-widget__data">
      <div class="product-widget__data__label">
        Link to Public Profile
      </div>
      <div class="product-widget__data__action">
        <InputsCheckbox 
          v-model="isLinked"
          :id="`product-${props.product.id}-link`"
          :name="`product-${props.product.id}-link`"
          @update:modelValue="emit('update:linked', Object.assign({ ...props.product }, { linked: $event }))"
        />
      </div>
    </div>
    <div class="product-widget__data">
      <div class="product-widget__data__label">
        Badge colour
      </div>
      <div class="product-widget__data__action">
        <InputsColorPicker 
          v-model="selectedColor"
          :id="`product-${props.product.id}-color`"
          :name="`product-${props.product.id}-color`"
          @update:modelValue="emit('update:color', Object.assign({ ...props.product }, { selectedColor: $event }))"
        />
      </div>
    </div>
    <div class="product-widget__data">
      <div class="product-widget__data__label">
        Activate badge
      </div>
      <div class="product-widget__data__action">
        <InputsToggle
          v-model="isActive"
          :id="`product-${props.product.id}-status`"
          :name="`product-${props.product.id}-status`"
          @update:modelValue="emit('update:status', Object.assign({ ...props.product }, { active: $event }))"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: (value: Product) => {
      return (
        (value.id !== undefined) &&
        (value.type === 'carbon' || value.type === 'plastic' || value.type === 'trees') &&
        (value.amount !== undefined) &&
        (value.action === 'collects' || value.action === 'plants' || value.action === 'offsets') &&
        (value.active !== undefined) &&
        (value.selectedColor === 'white' || value.selectedColor === 'black' || value.selectedColor === 'blue' || value.selectedColor === 'green' || value.selectedColor === 'beige') &&
        (value.linked !== undefined)
      )
    }
  }
})

const emit = defineEmits(['update:linked', 'update:color', 'update:status'])

const isLinked = ref(props.product.linked)
const selectedColor = ref(props.product.selectedColor)
const isActive = ref(props.product.active)

watch(() => props.product.active, () => {
  isActive.value = props.product.active
})
</script>

<style scoped>
.product-widget {
  @apply w-full flex flex-col gap-2.5;

  &__top {
    @apply flex items-center gap-3 text-lightgray px-3 py-2.5 rounded-md;

    &.bg-product-beige,
    &.bg-product-white {
      @apply text-product-green;
    }
  }
  &__action-name {
    @apply text-sm;
  }
  &__action__amount {
    @apply text-lg font-bold;
  }
  &__data {
    @apply flex items-center justify-between text-sm text-product-green;
  }
}
</style>