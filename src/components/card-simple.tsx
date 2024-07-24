import Link from "next/link";
import Image from "next/image";

export const CardSimple = () => {
  return (
    <Link
      href="/test"
      className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4"
    >
      <div className="relative w-full h-80">
        <Image
          src="/images/test-image1.jpg"
          alt=""
          fill
          priority
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
        />
        <Image
          src="/images/test-image2.jpg"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Product Name</span>
        <span className="font-semibold">$49</span>
      </div>
      <div className="text-sm text-gray-500">My description</div>
      <button className="rounded-2xl w-max ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white duration-200">
        Add to Cart
      </button>
    </Link>
  );
};
