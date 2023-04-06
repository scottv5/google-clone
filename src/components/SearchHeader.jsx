import Link from "next/link";
import Image from "next/image";

import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full justify-between items-center p-6">
        <Link href="/" className="py-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            width={120}
            height={40}
            alt="google"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex">
          <Link href="" className="">
            <RiSettings3Line className="header-icon" />
          </Link>
          <Link href="" className="">
            <TbGridDots className="header-icon" />
          </Link>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all duration-150 ml-1 hidden sm:inline-flex">
          Sign In
        </button>
      </div>
      <div>
        <SearchHeaderOptions />
      </div>
    </header>
  );
};

export default SearchHeader;
