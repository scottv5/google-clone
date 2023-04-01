"use client";

import Spinner from "./Spinner";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const HomeSearchForm = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const handleRandomSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch("https://random-word-api.herokuapp.com/word");
      if (!res.ok) return;
      const wordArr = await res.json();
      if (!wordArr || !wordArr[0]) return;
      router.push(`/search/web?searchTerm=${wordArr[0]}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl rounded-full border border-gray-500 p-3 focus-within:shadow-md hover:shadow-md transition-shadow duration-200"
      >
        <HiOutlineMagnifyingGlass className="text-xl text-gray-500 mr-3" />

        <input
          onChange={handleInputChange}
          value={input}
          className="flex-grow p-1 focus:outline-none text-xl"
          type="text"
        />
      </form>

      <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 mt-8">
        <button onClick={handleSearchSubmit} className="btn">
          Googe Search
        </button>
        {isLoading ? (
          <div className="w-[144px] flex justify-center">
            <Spinner width={48} height={48} />
          </div>
        ) : (
          <button onClick={handleRandomSearchSubmit} className="btn">
            I&apos;m feeling lucky
          </button>
        )}
      </div>
    </>
  );
};

export default HomeSearchForm;
