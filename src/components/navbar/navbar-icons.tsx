"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CartModal } from "./cart-modal";

export const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  //!TEMPORARY
  const isLogIn = false;

  const handleProfile = () => {
    if (!isLogIn) router.push("/login");

    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <IoPersonCircleOutline className="w-6 h-6" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <IoMdNotificationsOutline className="w-6 h-6" />
      <IoCartOutline
        className="w-6 h-6"
        onClick={() => setIsCartOpen((prev) => !prev)}
      />
      {isCartOpen && <CartModal />}
    </div>
  );
};
