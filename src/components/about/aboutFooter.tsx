import React from 'react'

const aboutFooter = () => {
    return (
        <div className='bg-[#F9F9F9] w-full mt-10 sm:mt-20 py-10 sm:py-20'>
            <div className='bg-white w-full sm:w-[80%] mx-auto p-10'>
                <h2 className='text-center font-normal text-[20px] sm:text-[36px] text-[#2A254B]'>Join the club and get the benefits</h2>
                <div className='flex justify-center pt-4'>
                    <p className='text-center w-[500px] text-[#2A254B] font-normal text-[16px]'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                </div>
                <div className=" z-10 flex sm:justify-center items-center sm:px-4">
                    <div className="flex items-center mt-20 justify-center  bg-white shadow-md  overflow-hidden">
                        {/* Input Field */}
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow px-4 pl-12 py-2 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                        {/* Button */}
                        <button className="pr-10 whitespace-nowrap py-3  text-[14px] bg-[#2A254B] text-white font-normal">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutFooter