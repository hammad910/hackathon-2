import Image from "next/image";
import React from "react";

export default function FiltersBar() {
    return (
        <div>
            <div className="hidden sm:flex justify-between items-center w-[90%] mx-auto py-4 bg-white">
                {/* Left Section: Filter Options */}
                <div className="flex space-x-6 gap-10">
                    <Dropdown label="Category" />
                    <Dropdown label="Product type" />
                    <Dropdown label="Price" />
                    <Dropdown label="Brand" />
                </div>

                {/* Right Section: Sorting */}
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Sorting by:</span>
                    <Dropdown label="Date added" />
                </div>
            </div>
            <div className="sm:hidden flex justify-center items-center w-[90%] mx-auto py-4 bg-[#F9F9F9]">
                {/* Left Section: Filter Options */}
                <div className="flex space-x-6 gap-10">
                    <Dropdown label="Filters" />
                    <Dropdown label="Sorting" />
                </div>
            </div>
        </div>
    );
}

interface DropdownProps {
    label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {
    return (
        <div className="relative">
            <button className="text-[16px] font-normal text-[#2F2541] flex items-center space-x-1">
                {label} <Image src={'/images/Caret--down.png'} alt="icon" width={16} height={16} />
            </button>
        </div>
    );
}
