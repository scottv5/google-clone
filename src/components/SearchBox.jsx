"use client";

import { RxCross2 } from "react-icons/rx";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [input, setInput] = useState(searchTerm || "");

  const onInputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const deleteInputHandler = () => {
    setInput("");
  };
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  return (
    <form
      className="flex items-center border border-gray-200 rounded-full shadow-lg px-3 py-2 sm:ml-10 flex-grow max-w-3xl"
      onSubmit={onFormSubmitHandler}
    >
      <input
        onChange={onInputChangeHandler}
        value={input}
        className="w-full focus:outline-none text-lg"
        type="text"
      />
      <div
        className="text-2xl text-red-400 cursor-pointer px-1 py-2"
        onClick={deleteInputHandler}
      >
        <RxCross2 />
      </div>
      <div
        className="text-2xl text-blue-400 cursor-pointer px-1 py-2"
        onClick={onFormSubmitHandler}
      >
        <HiOutlineMagnifyingGlass />
      </div>
    </form>
  );
};

export default SearchBox;
