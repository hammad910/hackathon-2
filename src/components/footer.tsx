import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#2A254B] text-white py-10">
            <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Column 1: Menu */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Menu</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">New arrivals</a></li>
                        <li><a href="#" className="hover:text-gray-300">Best sellers</a></li>
                        <li><a href="#" className="hover:text-gray-300">Recently viewed</a></li>
                        <li><a href="#" className="hover:text-gray-300">Popular this week</a></li>
                        <li><a href="#" className="hover:text-gray-300">All products</a></li>
                    </ul>
                </div>

                {/* Column 2: Categories */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">Crockery</a></li>
                        <li><a href="#" className="hover:text-gray-300">Furniture</a></li>
                        <li><a href="#" className="hover:text-gray-300">Homeware</a></li>
                        <li><a href="#" className="hover:text-gray-300">Plant pots</a></li>
                        <li><a href="#" className="hover:text-gray-300">Chairs</a></li>
                    </ul>
                </div>

                {/* Column 3: Our Company */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">About us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Vacancies</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
                        <li><a href="#" className="hover:text-gray-300">Returns policy</a></li>
                    </ul>
                </div>

                {/* Column 4: Join Our Mailing List */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow px-4 py-2 bg-[#43395B] text-white placeholder-gray-400 border border-transparent rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button className="whitespace-nowrap px-8 py-2 bg-white text-[#2F2541] font-semibold rounded-r hover:bg-gray-200">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="w-[80%] mx-auto flex flex-col sm:flex-row items-center justify-between mt-8 pt-4 border-t border-gray-600">
                <span>© 2024 Avon LTD</span>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <FooterIcon href="#" icon={<FaFacebook />} />
                    <FooterIcon href="#" icon={<FaInstagram />} />
                    <FooterIcon href="#" icon={<FaTwitter />} />
                    <FooterIcon href="#" icon={<FaLinkedin />} />
                    <FooterIcon href="#" icon={<FaPinterest />} />
                </div>
            </div>
        </footer>
    );
};

type FooterIconProps = {
    href: string,
    icon: React.ReactNode
}

const FooterIcon: React.FC<FooterIconProps> = ({ href, icon }) => (
    <a
        href={href}
        className="w-8 h-8 flex items-center justify-center bg-[#43395B] rounded-full hover:bg-purple-500"
    >
        {icon}
    </a>
);

export default Footer;
