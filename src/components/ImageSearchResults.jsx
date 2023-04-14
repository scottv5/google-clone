import Link from "next/link";
import Image from "next/image";

import PaginationButtons from "./PaginationButtons";

const ImageSearchResults = ({ data }) => {
  const results = data.items;
  const noHttpResults = results.filter(
    (result) => result.link.slice(0, 5) === "https"
  );
  console.log(noHttpResults);
  return (
    <div className="w-full p-4 pb-10 pt-0 sm:px-14">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {data.searchInformation?.formattedTotalResults} results (
        {data.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className="flex flex-wrap">
        {noHttpResults.map(
          (
            {
              image: {
                contextLink,
                thumbnailLink,
                thumbnailHeight,
                thumbnailWidth,
              },
              displayLink,
              title,
              link,
            },
            i
          ) => {
            return (
              <Link
                key={i}
                href={contextLink}
                className="w-full sm:w-64 pr-6 pb-6 mx-2 my-1 group"
              >
                <div className="h-40 my-3 shadow-sm hover:shadow-md transition-shadow duration-150 flex items-center justify-center">
                  <Image
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    src={link || thumbnailLink}
                    width={thumbnailWidth || 100}
                    height={thumbnailHeight || 100}
                    alt={title}
                    className="object-contain"
                  />
                </div>
                <h2 className="font-semibold truncate group-hover:underline decoration-blue-600 text-blue-600 text-lg">
                  {title}
                </h2>
                <div className="text-gray-500">{displayLink}</div>
              </Link>
            );
          }
        )}
      </div>
      <PaginationButtons />
    </div>
  );
};

export default ImageSearchResults;
