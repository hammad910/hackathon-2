import React from 'react'

const hero = () => {
    return (
        <div className="relative h-[200px] w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/product-listing.jpeg')", // Replace with your image path
                }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Text */}
            <div className="relative z-10 flex justify-center items-center h-full px-8">
                <h1 className="text-white text-center text-[36px] font-normal">All products</h1>
            </div>
        </div>
    )
}

export default hero