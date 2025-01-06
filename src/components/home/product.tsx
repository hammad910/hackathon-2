import ProductCard from './productCard';

const products = [
    {
        image: '/images/products/product1.jpeg',
        title: 'Dandy Chair',
        price: '£250',
    },
    {
        image: '/images/products/product2.jpeg',
        title: 'Rustic Vase Set',
        price: '£155',
    },
    {
        image: '/images/products/product3.jpeg',
        title: 'The Silky Vase',
        price: '£125',
    },
    {
        image: '/images/products/product4.jpeg',
        title: 'The Lucy',
        price: '£399',
    },
];

interface button {
    button: string;
}

const Product: React.FC<button> = ({ button }) => {
    return (
        <div className="min-h-screen">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.title}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
                {/* Button Container */}
                <div className="flex justify-center mt-6">
                    {button && (
                        <button className="px-6 py-3 w-full sm:w-40 bg-[#F9F9F9] text-[#2A254B] font-[16px] rounded-md mt-2">
                            {button}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
