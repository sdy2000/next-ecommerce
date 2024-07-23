"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";

import { Modal } from "@/components";
import { CartModal } from "./cart-modal";
import { toggleModal } from "@/lib/features";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const NavbarIcons = () => {
  const dispatch = useAppDispatch();
  const { modalId } = useAppSelector((store) => store.modalSlice);

  const router = useRouter();

  //!TEMPORARY
  const isLogIn = false;

  const handleProfile = () => {
    if (!isLogIn) router.push("/login");
    dispatch(toggleModal("open_navbar_profile"));
  };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <IoPersonCircleOutline className="w-6 h-6" onClick={handleProfile} />
      {modalId == "open_navbar_profile" && (
        <Modal className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <div>
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        </Modal>
      )}
      <IoMdNotificationsOutline className="w-6 h-6" />
      <IoCartOutline
        className="w-6 h-6"
        onClick={() => {
          dispatch(toggleModal("open_navbar_cart"));
        }}
      />
      {modalId == "open_navbar_cart" && <Modal><CartModal /></Modal>}
    </div>
  );
};
