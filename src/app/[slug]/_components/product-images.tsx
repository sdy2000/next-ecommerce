"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "/images/test-image1.jpg",
  },
  {
    id: 2,
    url: "/images/test-image2.jpg",
  },
  {
    id: 3,
    url: "/images/test-image3.jpg",
  },
  {
    id: 4,
    url: "/images/test-image1.jpg",
  },
];
export const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 border-t border-gray-200">
        {images.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer rounded-md overflow-hidden hover:scale-110 hover:ring ring-gray-600 duration-200"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover hover:scale-125 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
