"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const CategoriesList = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        
        if (scrollContainerRef.current.scrollLeft >= maxScrollLeft) {
          setScrollDirection(-1);
        } else if (scrollContainerRef.current.scrollLeft <= 0) {
          setScrollDirection(1);
        }

        scrollContainerRef.current.scrollBy({
          left: 200 * scrollDirection,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollDirection]);


  return (
    <div ref={scrollContainerRef} className="px-4 overflow-x-scroll scrollbar-hide transition-all ease-in-out duration-1000">
      <div className="flex gap-4 md:gap-8">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Link
      href="/list?cat=test"
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image src="/images/test-image3.jpg" alt="" fill />
      </div>
      <h3 className="mt-8 font-light text-clip tracking-wide">Category Name</h3>
    </Link>
  );
};
