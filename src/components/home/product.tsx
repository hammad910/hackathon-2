import Link from 'next/link';
import ProductCard from './productCard';
import { sanityDataFetch } from '@/sanity/lib/fetchData';
import { allProducts } from '@/sanity/lib/queries';

interface button {
    button: string;
    limit: number;
}

type products = {
    _id: string,
    name: string,
    imageUrl: string,
    price: string,
    slug: string
    current: string;

}

const Product: React.FC<button> = async ({ button, limit }) => {
    const products = await sanityDataFetch({ query: allProducts })
    const limitedProducts = limit ? products.slice(0, limit) : products;
    console.log('products', products);
    return (
        <div className="min-h-screen">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
                    {limitedProducts.map((product: products) => (
                        <ProductCard
                            key={product.name}
                            slug={product.slug}
                            image={product.imageUrl}
                            title={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
                {/* Button Container */}
                <div className="flex justify-center mt-6">
                    {button && (
                        <Link href={'/product-listing'}>
                            <button className="px-6 py-3 w-full sm:w-40 bg-[#F9F9F9] text-[#2A254B] font-[16px] rounded-md mt-2">
                                {button}
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
