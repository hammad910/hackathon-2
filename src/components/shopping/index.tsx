import Image from 'next/image';
import React from 'react';

const ShoppingCart: React.FC = () => {
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
        <div className="space-y-6">
          {/* Product 1 */}
          <div className="grid grid-cols-4 gap-16 items-center">
            <div className="flex col-span-2">
              <Image
                width={100}
                height={134}
                src="/images/shopping-img-1.jpeg"
                alt="Graystone vase"
                className="w-[109px] h-[134px] object-cover mr-4"
              />
              <div>
                <h2 className="font-normal text-[16px] sm:text-[20px] text-[#2A254B]">Graystone vase</h2>
                <p className="text-[#2A254B] sm:w-[230px] w-[170px] text-[14px]">A timeless ceramic vase with a soft color grey design</p>
                <p className="font-normal text-[18px] text-[#2A254B] mt-1">£85</p>
              </div>
            </div>
            <div className="text-center">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center bg-transparent sm:mt-0 mt-[78px]"
              />
            </div>
            <div className="hidden sm:flex text-right text-[#2A254B] text-[18px] font-normal">£85</div>
          </div>

          {/* Product 2 */}
          <div className="grid grid-cols-4 gap-16 items-center">
            <div className="flex col-span-2">
              <Image
                width={100}
                height={134}
                src="/images/shopping-img-2.jpeg"
                alt="Basic white vase"
                className="w-[109px] h-[134px] object-cover mr-4"
              />
              <div>
                <h2 className="font-normal text-[20px] text-[#2A254B]">Basic white vase</h2>
                <p className="text-[#2A254B] sm:w-[230px] w-[170px] text-[14px]">Beautiful and simple, this is one for the classics</p>
                <p className="font-normal text-[18px] text-[#2A254B] mt-1">£125</p>
              </div>
            </div>
            <div className="text-center">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 rounded-md text-center bg-transparent sm:mt-0 mt-[86px]"
              />
            </div>
            <div className="hidden sm:flex text-right text-[#2A254B] text-[18px] font-normal">£125</div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-[#2A254B] text-[20px] font-normal">
            <p>Subtotal</p>
            <p>£210</p>
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
