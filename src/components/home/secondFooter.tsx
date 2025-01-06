import React from 'react';

const SecondFooter = () => {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative sm:h-[60vh] flex items-center justify-center mt-[400px] sm:mt-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/secondfooter.png')" }} // Replace with your image path
            >
                {/* Overlay */}
                <div className="absolute inset-0"></div>

                {/* Content */}
                <div className="relative z-10 w-full mx-auto flex justify-center items-center sm:h-full p-4">
                    <div className="flex items-center mt-44 justify-center max-w-md bg-white shadow-md overflow-hidden">
                        {/* Input Field */}
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow sm:px-4 py-2 pl-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                        {/* Button */}
                        <button className="px-4 sm:px-10 text-[16px] whitespace-nowrap py-3 bg-[#2A254B] text-white font-normal">
                            Sign up
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SecondFooter;
