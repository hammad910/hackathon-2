import ProductListing from '@/components/productListing/hero'
import Filter from '@/components/productListing/filter'
import React from 'react'
import Product from '@/components/home/product'

const page = () => {
  return (
    <>
    <ProductListing/>
    <Filter/>
    <Product button=''/>
    </>
  )
}

export default page