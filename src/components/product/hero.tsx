"use client";

import Image from "next/image";
import React from "react";

type products = {
    _id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    dimensions: {
        height: string;
        width: string;
        depth: string;
    };
    slug: { current: string };
}
type CartItem = {
    _id: string,
    name: string,
    imageUrl: string,
    price: string,
    quantity: string;
    description: string,
    dimensions: {
        height: string;
        width: string;
        depth: string;
    };
    slug: { current: string };
}

const Hero = ({ product } : { product: products }) => {
    const addToCart = () => {
        const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

        const productExists = existingCart.find(item => item._id === product._id);

        if (productExists) {
            const updatedCart = existingCart.map(item =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            const newProduct = { ...product, quantity: 1 };
            localStorage.setItem("cart", JSON.stringify([...existingCart, newProduct]));
        }

        alert("Product added to cart!");
    };

    return (
        <div className="flex flex-col sm:flex-row bg-[#d1bbbb]">
            <div>
                <Image
                    src={product.imageUrl}
                    alt={"service image"}
                    width={500}
                    height={200}
                    className="w-[600px] h-[400px] sm:h-[600px] object-cover"
                />
            </div>
            <div className="relative z-10 flex justify-center items-center h-full px-10 p-6">
                <div className="sm:p-8 max-w-[28rem] sm:max-w-lg">
                    <h1 className="text-[36px] md:text-3xl font-normal text-[#2A254B]">
                        {product.name}
                    </h1>
                    <p className="text-[24px] font-normal text-[#12131A] mt-2">
                        Rs.{product.price}
                    </p>

                    <div className="mt-6">
                        <h2 className="text-[16px] font-normal text-[#2A254B]">Description</h2>
                        <p className="text-[#505977] text-[16px] font-normal mt-2">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-[16px] font-normal text-[#2A254B]">Dimensions</h2>
                        <div className="grid grid-cols-3 gap-4 mt-2 text-gray-600">
                            <div>
                                <p className="font-normal text-[16px]">Height</p>
                                <p>{product.dimensions.height}</p>
                            </div>
                            <div>
                                <p className="font-normal text-[16px]">Width</p>
                                <p>{product.dimensions.width}</p>
                            </div>
                            <div>
                                <p className="font-normal text-[16px]">Depth</p>
                                <p>{product.dimensions.depth}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex sm:flex-row flex-col items-center gap-8">
                        <p className="text-lg font-medium text-gray-900 mr-4">Amount:</p>
                        <div className="flex items-center border border-gray-300 rounded">
                            <button className="px-4 py-2 text-gray-900 font-medium hover:bg-gray-100">
                                -
                            </button>
                            <span className="px-4 py-2 text-gray-900">1</span>
                            <button className="px-4 py-2 text-gray-900 font-medium hover:bg-gray-100">
                                +
                            </button>
                        </div>
                        <button
                            onClick={addToCart}
                            className="px-6 py-3 w-full sm:w-40 bg-[#2F2541] text-white text-lg font-medium hover:bg-[#1e1830]"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
