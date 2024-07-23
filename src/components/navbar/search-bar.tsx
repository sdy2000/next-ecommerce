"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { IoSearch } from "react-icons/io5";

export const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search_value") as string;

    if (searchValue) {
      router.push(`/list?search=${searchValue}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md">
        <input
          type="text"
          placeholder="Search"
          name="search_value"
          className="flex-1 bg-transparent outline-none"
        />
        <button className="cursor-pointer">
          <IoSearch className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};
