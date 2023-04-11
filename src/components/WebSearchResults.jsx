import Link from "next/link";
import Parser from "html-react-parser";

const WebSearchResults = ({ data }) => {
  const results = data.items;
  console.log(data);
  return (
    <div className="w-full px-3 pb-10 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {data.searchInformation?.formattedTotalResults} results (
        {data.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results &&
        results.map(({ cacheId, link, title, formattedUrl, htmlSnippet }) => {
          return (
            <div key={cacheId} className="mb-8 max-w-xl">
              <div className="group flex flex-col">
                <Link className="truncate text-sm" href={link}>
                  {formattedUrl}
                </Link>
                <Link
                  className="group-hover:underline decoration-blue-700 text-xl truncate font-medium text-blue-700"
                  href={link}
                >
                  {title}
                </Link>
                <p className="text-gray-600">{Parser(htmlSnippet)}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WebSearchResults;
