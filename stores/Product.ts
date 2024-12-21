import { defineStore } from 'pinia'

export const useProductStore = defineStore('Product', () => {

  const colorList = ['blue', 'green', 'beige', 'white', 'black']

  const getColorList = () => {
    return colorList
  }

  const productList = ref<Product[]>([])

  const fetchProductList = async () => {
    try {
      const response = await $fetch('https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets')

      return response
    } catch (error: { statusCode: number, message: string }) {
      throw createError({ ...error })
    }
  }

  const getProductList = async () => {
    if (productList.value.length > 0) {
      return productList.value
    }

    try {
      const response = await fetchProductList()
      productList.value = response ? (response as Product[]) : []
      return productList
    } catch (error: { statusCode: number, message: string }) {
      throw createError({ ...error })
    }
  }

  const updateProduct = (product: Product, isStatus?: boolean) => {
    const currentProductIndex = Array.from(productList.value).findIndex((p) => p.id === product.id)

    if (currentProductIndex > -1) {
      if (isStatus && product.active) {
        productList.value = productList.value.map((p) => {
          p.active = false
  
          return p
        })
      }

      productList.value[currentProductIndex] = product
    }
    
    return productList.value
  }
  
  return {
    getColorList,
    getProductList,
    updateProduct,
  }
});
