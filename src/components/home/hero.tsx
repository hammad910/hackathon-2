import Image from "next/image";

export default function Hero() {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative h-[100vh] flex items-center justify-end pr-10  bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero/hero.jpeg')" }} // Replace with your image path
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex justify-center items-center h-full px-4">
                    {/* Card */}
                    <div className="bg-white p-8 max-w-lg shadow-lg">
                        <h1 className="text-[32px] md:text-3xl font-normal text-gray-900">
                            Luxury homeware for people who love timeless design quality
                        </h1>
                        <p className="text-gray-600 mt-4">
                            Shop the new Spring 2022 collection today
                        </p>
                        <button className="mt-24 px-6 py-3 bg-[#F9F9F9] text-[#2A254B] font-[16px] rounded-md">
                            View collection
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
