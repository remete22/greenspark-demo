<template>
  <div class="product-list">
    <h2 class="product-list__title">
      Per product widgets
    </h2>
    <div class="grid lg:grid-cols-3 gap-x-[58px] gap-y-9">
      <ProductWidget
        v-for="product in productList"
        :key="product.id"
        :product="product"
        @update:linked="onUpdate($event)"
        @update:color="onUpdate($event)"
        @update:status="onUpdate($event, true)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~~/stores/Product'
const productStore = useProductStore()

const productList = ref(await productStore.getProductList())

const onUpdate = (product: Product, isStatus?: boolean) => {
  productList.value = productStore.updateProduct(product, isStatus)
}
</script>

<style scoped>
.product-list {
  box-shadow: 0px 42px 76px rgba(0, 0, 0, 0.05), 0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963), 0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704), 0px 8.4px 12.35px rgba(0, 0, 0, 0.025), 0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296), 0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);

  @apply bg-lightgray rounded-lg p-9 w-full max-w-[851px];

  &__title {
    @apply text-4xl font-bold mb-5 pb-3 border-b-2 border-darkgray;
  }
}
</style>
