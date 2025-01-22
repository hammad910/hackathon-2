import Hero from '@/components/product/hero'
import RelatedProduct from '@/components/product/realedProduct'
import { getProductBySlug } from '@/sanity/lib/queries';
import React from 'react'

const page = async ({ params }) => {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  return (
    <>
      <Hero product={product} />
      <RelatedProduct />
    </>
  )
}

export default page