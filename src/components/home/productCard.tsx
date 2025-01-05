import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
    image: string;
    title: string;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full h-full flex  items-center">
            <Image src={image} alt={title} width={500} height={300} className="h-96 w-full mb-4 object-cover" />
            </div>
            <h3 className="text-[20px] text-[#2A254B] font-normal">{title}</h3>
            <p className="text-#2A254B font-normal text-[18px]">{price}</p>
        </div>
    );
};

export default ProductCard;
