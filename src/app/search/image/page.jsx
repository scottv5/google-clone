import Link from "next/link";
import Image from "next/image";

const getUrl = (searchTerm = "") => {
  return `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_ALL_KEY}&q=${searchTerm}`;
};

const ImageSearchPage = async ({ searchParams }) => {
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

  const imageUrls = data.items.map((item) => {
    if (item.pagemap && item.pagemap.cse_image) return item.pagemap.cse_image;
  });

  return (
    <div className="flex">
      {imageUrls.map((image, i) => {
        return (
          <div key={i}>
            {image && image[0].src.slice(0, 5) === "https" ? (
              <Link href={data.items[i].link}>
                <Image
                  placeholder="blur"
                  blurDataURL="/spinner.svg"
                  src={image[0].src}
                  width={100}
                  height={100}
                  alt="image not found"
                />
              </Link>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSearchPage;
