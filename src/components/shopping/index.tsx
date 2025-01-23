'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type CartItem = {
  _id: string;
  name: string;
  imageUrl: string;
  price: string;
  quantity: string;
  description: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  slug: { current: string };
};

const ShoppingCart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  // Load cart products from localStorage on the client side
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    }
  }, []);

  // Update quantity in the cart
  const updateQuantity = (id: string, quantity: string) => {
    const updatedCart = cartProducts.map((product) =>
      product._id === id ? { ...product, quantity } : product
    );
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate subtotal
  const subtotal = cartProducts.reduce(
    (total, product) => total + parseFloat(product.price) * parseInt(product.quantity || '1'),
    0
  );

  // Format currency
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(value);

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-10 px-4">
      <div className="w-full sm:w-[90%] mx-auto sm:p-6">
        <h1 className="text-[24px] sm:text-[36px] font-normal mb-6 text-[#2A254B]">Your shopping cart</h1>

        {/* Headers */}
        <div className="hidden sm:grid grid-cols-4 gap-4 text-[14px] font-normal mb-4">
          <div className="col-span-2 text-[#2A254B]">Product</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {/* Products */}
        {cartProducts.length > 0 ? (
          <div className="space-y-6">
            {cartProducts.map((pro: CartItem) => (
              <div key={pro._id} className="grid grid-cols-4 gap-16 items-center">
                <div className="flex col-span-2">
                  <Image
                    width={100}
                    height={134}
                    src={pro.imageUrl}
                    alt={pro.name}
                    className="w-[109px] h-[134px] object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-normal text-[16px] sm:text-[20px] text-[#2A254B]">{pro.name}</h2>
                    <p className="text-[#2A254B] sm:w-[230px] w-[170px] text-[14px]">{pro.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="number"
                    min="1"
                    value={pro.quantity || 1}
                    className="w-16 text-center bg-transparent sm:mt-0 mt-[78px]"
                    onChange={(e) => updateQuantity(pro._id, e.target.value)}
                  />
                </div>
                <div className="hidden sm:flex justify-end text-right text-[#2A254B] text-[18px] font-normal">
                  {formatCurrency(parseFloat(pro.price) * parseInt(pro.quantity || '1'))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}

        {/* Summary */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-[#2A254B] text-[20px] font-normal">
            <p>Subtotal</p>
            <p>{formatCurrency(subtotal)}</p>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="mt-4 bg-[#2A254B] text-white py-4 whitespace-nowrap px-6 w-40 hover:bg-gray-700">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
