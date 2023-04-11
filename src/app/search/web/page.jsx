import Link from "next/link";

import WebSearchResults from "@/components/WebSearchResults";

const getUrl = (searchTerm = "") => {
  return `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_ALL_KEY}&q=${searchTerm}`;
};

const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(getUrl(searchParams.searchTerm));
  if (!res.ok) throw new Error();
  const data = await res.json();
  if (!data.items)
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">no results found</h1>
        <p className="text-lg">Try searching for something else</p>
        <Link className="text-blue-500" href="/">
          Home
        </Link>
      </div>
    );

  return (
    <>
      <WebSearchResults data={data || ""} />
    </>
  );
};

export default WebSearchPage;
