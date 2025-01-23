import Hero from '@/components/product/hero'
import RelatedProduct from '@/components/product/realedProduct'
import { getProductBySlug } from '@/sanity/lib/queries';
import React from 'react'

const page = async ({ params }: any) => {
  console.log('slug', params.slug);

  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return (
    <>
      <Hero product={product} />
      <RelatedProduct />
    </>
  )
}

export default page