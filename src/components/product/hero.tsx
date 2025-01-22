import Image from 'next/image'
import React from 'react'

const hero = async ({ product }) => {
    console.log('slug', product);
    
    return (
        <div className='flex flex-col sm:flex-row bg-[#F9F9F9]'>
            <div>
                <Image src={product.imageUrl} alt={'service image'} width={500} height={200} className='w-[600px] h-[400px] sm:h-[600px] object-cover' />
            </div>
            <div className="relative z-10 flex justify-center items-center h-full px-10 p-6">
                {/* Card */}
                <div className="sm:p-8 max-w-[28rem] sm:max-w-lg">
                    {/* Title */}
                    <h1 className="text-[36px] md:text-3xl font-normal text-[#2A254B]">
                        {product.name}
                    </h1>
                    {/* Price */}
                    <p className="text-[24px] font-normal text-[#12131A] mt-2">Rs.{product.price}</p>

                    {/* Description */}
                    <div className="mt-6">
                        <h2 className="text-[16px] font-normal text-[#2A254B]">Description</h2>
                        <p className="text-[#505977] text-[16px] font-normal mt-2">
                            {product.description}
                        </p>
                        {/* <ul className="list-disc list-inside mt-4 text-[#505977] text-[16px] font-normal">
                            <li>Premium material</li>
                            <li>Handmade upholstery</li>
                            <li>Quality timeless classic</li>
                        </ul> */}
                    </div>

                    {/* Dimensions */}
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

                    {/* Amount Selection */}
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
                        {/* Add to Cart Button */}
                        <button className="px-6 py-3 w-full sm:w-40 bg-[#2F2541] text-white text-lg font-medium hover:bg-[#1e1830]">
                            Add to cart
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default hero