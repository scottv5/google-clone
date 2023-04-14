"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const PaginationButtons = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const searchTerm = params.get("searchTerm");
  const startIndex = +params.get("start") || 1;

  return (
    <div className="flex justify-between w-52 text-blue-700 mx-auto sm:mx-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          &lt;Prev
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          className={`${startIndex <= 10 ? "mx-auto sm:mx-0" : ""}`}
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          Next&gt;
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
