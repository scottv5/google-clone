import Link from "next/link";
import { BsGrid3X3GapFill } from "react-icons/bs";

const HomeHeader = () => {
  return (
    <header className="flex justify-end items-center space-x-6 p-4 max-w-6xl mx-auto">
      <div className="space-x-3">
        <Link className="cursor-pointer hover:underline py-2" href="">
          Gmail
        </Link>
        <Link className="cursor-pointer hover:underline py-2" href="">
          Images
        </Link>
      </div>
      <div className="flex space-x-3">
        <div className="cursor-pointer text-2xl p-2 bg-transparent hover:bg-slate-200 rounded-full transition-colors duration-200">
          <BsGrid3X3GapFill />
        </div>
        <button className="cursor-pointer py-2 px-4 bg-emerald-400 text-white rounded hover:brightness-105 hover:shadow-md transition-all duration-200">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
