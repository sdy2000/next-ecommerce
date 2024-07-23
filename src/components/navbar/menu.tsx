"use client";

import Link from "next/link";
import { useState } from "react";

import { FaList } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <MdClose
          className="cursor-pointer w-7 h-7"
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <FaList
          className="cursor-pointer w-5 h-5"
          onClick={() => setOpen((prev) => !prev)}
        />
      )}

      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home Page</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};
