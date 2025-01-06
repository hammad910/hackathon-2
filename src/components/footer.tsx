import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaSkype } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#2A254B] text-white py-10">
            <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Column 1: Menu */}
                <div>
                    <h3 className="text-[36px] font-normal mb-4">Avion</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">21 New York Street</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">New York City</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">United States of America</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">432 34</Link></li>
                    </ul>
                </div>

                {/* Column 2: Categories */}
                <div>
                    <h3 className="text-[16px] font-normal mb-4">Social links</h3>
                    <ul className="grid grid-cols-3 md:grid-cols-6 gap-2">
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal"><FaLinkedin size={24} /></Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal"><FaFacebook size={24} /></Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal"><FaInstagram size={24} /></Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal"><FaSkype size={24} /></Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal"><FaTwitter size={24} /></Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal"><FaPinterest size={24} /></Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[16px] font-normal mb-4">Menu</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">New arrivals</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Best sellers</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Recently viewed</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Popular this week</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">All products</Link></li>
                    </ul>
                </div>

                {/* Column 3: Our Company */}
                <div>
                    <h3 className="text-[16px] font-normal mb-4">Categories</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Crockery</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Furniture</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Homeware</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Plant pots</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Chairs</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Crockery</Link></li>
                    </ul>
                </div>

                {/* <div>
                    <h3 className="text-[16px] font-normal mb-4">Our Company</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">About us</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Vacancies</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Contact us</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Privacy</Link></li>
                        <li><Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Returns policy</Link></li>
                    </ul>
                </div> */}


            </div>

            {/* Footer Bottom */}
            <div className="w-[80%] mx-auto flex flex-col sm:flex-row items-center justify-between mt-8 pt-4 border-t border-gray-600">
                <span className='font-normal text-[14px]'>Copyright 2022 Avion LTD</span>
            </div>
        </footer>
    );
};

type FooterIconProps = {
    href: string,
    icon: React.ReactNode
}

const FooterIcon: React.FC<FooterIconProps> = ({ href, icon }) => (
    <Link
        href={href}
        className="w-8 h-8 flex items-center justify-center bg-[#43395B] rounded-full hover:bg-purple-500"
    >
        {icon}
    </Link>
);

export default Footer;
