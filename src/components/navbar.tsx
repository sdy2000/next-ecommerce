import Link from "next/link";
import Image from "next/image";

import {Menu, SearchBar, NavbarIcons} from "./navbar/";

export const Navbar = () => {
  return (
    <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILE */}
      <div className="h-full flex md:hidden items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold tracking-wide">LAMA</div>
        </Link>

        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl font-bold tracking-wide">LAMA</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
        <SearchBar />
        <NavbarIcons />
        </div>
      </div>
    </nav>
  );
};
