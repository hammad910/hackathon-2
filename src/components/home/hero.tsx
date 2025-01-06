import Image from "next/image";

export default function Hero() {
    return (
        <main>
        {/* Hero Section */}
        <section
          className="mt-[140px] sm:mt-0 relative flex items-center justify-center md:justify-end bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/images/hero/hero.jpeg')" }} // Replace with your image path
        >
          {/* Overlay for mobile */}
          <div className="absolute inset-0 bg-black bg-opacity-20 md:bg-opacity-0"></div>
      
          {/* Content Container */}
          <div className="relative z-10 mb-[470px] sm:mb-0 bg-white p-6 md:p-8 max-w-lg shadow-lg md:mr-10">
            <h1 className="text-[24px] md:text-3xl w-full font-normal text-gray-900 leading-relaxed">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="text-[#2A254B] mt-4">
              Shop the new Spring 2022 collection today
            </p>
            <button className="mt-6 md:mt-24 px-6 py-3 w-full sm:w-40 bg-[#F9F9F9] text-[#2A254B] text-sm md:text-base font-medium shadow-md">
              View collection
            </button>
          </div>
        </section>
      </main>
      
    );
}
