import React from 'react'
import Product from '../home/product'
import Features from '../home/features'
import AboutFooter from '../about/aboutFooter'

const realedProduct = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto mt-20'>
                <h2 className='font-normal text-[20px] sm:text-[32px] text-[#2A254B] mb-6'>You might also like</h2>
            </div>
            <Product button={'View Collection'}/>
            <Features/>
            <AboutFooter/>
        </div>
    )
}

export default realedProduct