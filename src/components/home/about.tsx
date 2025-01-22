import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
    return (
        <section className="w-[90%] mx-auto gap-8 flex flex-col md:flex-row items-stretch bg-gray-100 h-80 mt-10 sm:mt-20">
            {/* Left Column: Purple Background */}
            <div className="md:w-1/2 bg-[#2A254B] text-white flex flex-col justify-center p-8">
                <h2 className="text-[26px] font-normal mb-4">It started with a small idea</h2>
                <p className="text-[14px] text-gray-300 font-normal mb-6">
                    A global brand with local beginnings, our story began in a small studio in South London in early 2014.
                </p>
                <Link href={'/product-listing'}>
                    <button className="px-6 mt-28 py-2 w-44 bg-[#F9F9F926] text-white font-medium rounded">
                        View collection
                    </button>
                </Link>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 relative">
                <Image
                    width={300}
                    height={300}
                    src="/images/about.jpeg"
                    alt="Modern interior design"
                    className="object-cover w-full h-full"
                />
            </div>
        </section>
    );
};

export default About;
