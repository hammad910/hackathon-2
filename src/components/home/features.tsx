import Image from "next/image";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { CiCircleCheck, CiCreditCard1 } from "react-icons/ci";
import { PiFlowerTulipLight } from "react-icons/pi";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <FaTruck />,
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard!",
    },
    {
        icon: <CiCircleCheck />,
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
        icon: <CiCreditCard1 />,
        title: "Unbeatable prices",
        description: "For our materials and quality you won’t find better prices anywhere.",
    },
    {
        icon: <PiFlowerTulipLight />,
        title: "Recycled packaging",
        description: "We use 100% recycled to ensure our footprint is more manageable.",
    },
];

const BrandDifference: React.FC = () => {
    return (
        <div className="bg-white my-10 sm:my-20">
            <div className="w-[90%] mx-auto">
                <h2 className="sm:text-center text-[20px] sm:text-[24px] font-normal text-[#2A254B] mb-6 sm:mb-12">
                    What makes our brand different
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-[30px]"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-[18px] font-normal text-[#2A254B] mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-[#2A254B]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandDifference;
