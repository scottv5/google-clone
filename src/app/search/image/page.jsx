import Link from "next/link";
import Image from "next/image";

import ImageSearchResults from "@/components/ImageSearchResults";

const getUrl = (searchTerm = "", startIndex = 1) => {
  return `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_ALL_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`;
};

const ImageSearchPage = async ({ searchParams }) => {
  const res = await fetch(getUrl(searchParams.searchTerm, searchParams.start));
  if (!res.ok) throw new Error();
  const data = await res.json();

  if (!data.items) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">no results found</h1>
        <p className="text-lg">Try searching for something else</p>
        <Link className="text-blue-500" href="/">
          Home
        </Link>
      </div>
    );
  }
  return <ImageSearchResults data={data} />;
};

export default ImageSearchPage;
