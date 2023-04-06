"use client";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera } from "react-icons/ai";

const SearchHeaderOptions = () => {
  const pathName = usePathname();
  const searchTerm = useSearchParams().get("searchTerm");
  const router = useRouter();
  const isWebSearch = pathName.includes("/web");

  const onWebClickHandler = () => {
    if (!isWebSearch) router.push(`/search/web?searchTerm=${searchTerm}`);
  };
  const onImageClickHandler = () => {
    if (isWebSearch) router.push(`/search/image?searchTerm=${searchTerm}`);
  };
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center items-center sm:justify-start sm:pl-52 text-gray-700 text-sm">
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          isWebSearch ? "text-blue-600 border-blue-600" : ""
        }`}
        onClick={onWebClickHandler}
      >
        <HiOutlineMagnifyingGlass className="text-lg" />
        <div>All</div>
      </div>

      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          !isWebSearch ? "text-blue-600 border-blue-600" : ""
        }`}
        onClick={onImageClickHandler}
      >
        <AiOutlineCamera className="text-lg" />
        <div>Images</div>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
