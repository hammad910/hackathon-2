import Hero from '@/components/product/hero'
import RelatedProduct from '@/components/product/realedProduct'
import { getProductBySlug } from '@/sanity/lib/queries';
import React from 'react'

type PageProps = {
  params: { slug: string };
};

const page = async ({ params }: PageProps) => {
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