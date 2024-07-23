"use client";

import Image from "next/image";
import { GiEmptyChessboard } from "react-icons/gi";

export const CartModal = () => {
  //!TEMPORARY
  const cartItems = true;

  return (
    <>
      {cartItems ? (
        <>
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
          {/* ITEM LIST */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="/woman.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <span className="p-1 bg-gray-50 rounded-sm">$49</span>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2 </span>
                  <span className="text-blue-500 hover:text-red-500 duration-300 cursor-pointer">
                    Remove
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/woman.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <span className="p-1 bg-gray-50 rounded-sm">$49</span>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2 </span>
                  <span className="text-blue-500 hover:text-red-500 duration-300 cursor-pointer">
                    Remove
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>

              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 text-wrap">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
              <button className="rounded-md py-3 px-4 bg-black text-white ring-white ring-1 hover:text-black hover:bg-white hover:ring-black duration-300">Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <GiEmptyChessboard className="text-3xl" />
          <p className="text-sm text-nowrap">Cart is Empty</p>
        </div>
      )}
    </>
  );
};
