import ProductCard from './productCard';

const products = [
    {
        image: '/images/products/product1.jpeg',
        title: 'The Dandy Chair',
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
        title: 'The Lucy Lamp',
        price: '£399',
    },
];

const Product = () => {
    return (
        <div className="min-h-screen mt-20">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <button className="px-6 py-3 bg-[#F9F9F9] text-[#2A254B] font-[16px] rounded-md">
                        View collection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
