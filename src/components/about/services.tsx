import Image from 'next/image'
import React from 'react'

const services = () => {
    return (
        <div className='flex sm:flex-row flex-col bg-[#F9F9F9] mt-[450px] sm:mt-0'>
            <div>
                <Image src={'/images/service-img.jpeg'} alt={'service image'} width={600} height={200} className='w-[600px] h-[300px] object-cover' />
            </div>
            <div className="relative z-10 flex justify-center items-center h-full px-10 p-6">
                {/* Card */}
                <div className="sm:p-8 w-full">
                    <h1 className="text-[20px] w-full sm:text-[32px] md:text-3xl font-normal text-gray-900">
                        Our service isn’t just personal, it’s actually
                        hyper personally exquisite
                    </h1>
                    <p className="text-gray-600 mt-4">
                        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </p>
                    <button className="sm:relative w-full sm:w-40 mt-6 sm:top-[70px] px-6 py-3 bg-white text-[#2A254B] font-[16px] rounded-md">
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default services