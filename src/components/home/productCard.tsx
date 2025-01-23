import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
    image: string;
    title: string;
    price: string;
    slug: { current: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, slug }) => {
    console.log('slug', slug);
    
    return (
        <Link href={`/product/${slug.current}`} className="flex flex-col items-center">
            <div className="w-full h-full flex items-center">
                <Image src={image} alt={title} width={500} height={300} className="h-[200px] sm:h-96 w-full mb-4 object-cover" />
            </div>
            <h3 className="text-[18px] sm:text-[20px] text-[#2A254B] font-normal">{title}</h3>
            <p className="text-#2A254B font-normal text-[18px]">Rs.{price}</p>
        </Link>
    );
};

export default ProductCard;
