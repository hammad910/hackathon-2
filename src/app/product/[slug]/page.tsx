import Hero from '@/components/product/hero';
import RelatedProduct from '@/components/product/realedProduct';
import { getProductBySlug } from '@/sanity/lib/queries';
import React from 'react';

// Adjusting the types to correctly match Next.js expectations
interface PageProps {
  params: { slug: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = params;
  console.log(params);
  
  const product = await getProductBySlug(slug);

  return (
    <>
      <Hero product={product} />
      <RelatedProduct />
    </>
  );
};

export default Page;
