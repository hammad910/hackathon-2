import React from 'react'
import About from '../home/about'

const hero = () => {
    return (
        <>
            <div className='flex sm:flex-row flex-col justify-between w-[80%] mx-auto mt-10 sm:mt-20'>
                <div>
                    <h2 className='w-full sm:w-[90%] text-[32px] font-normal sm:text-[36px]'>A brand built on the love of craftmanship,
                        quality and outstanding customer service</h2>
                </div>
                <div>
                    <button className="px-6 py-2 mt-10 sm:mt-0 w-full sm:w-44 bg-[#F9F9F9] text-[#2A254B] font-medium rounded">
                        View Our Products
                    </button>
                </div>
            </div>
            <div className='my-20'>
                <About />
            </div>
        </>
    )
}

export default hero