import Link from "next/link";
import Image from "next/image";

const getUrl = (searchTerm = "") => {
  return `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_ALL_KEY}&q=${searchTerm}`;
};

const ImageSearchPage = async ({ searchParams }) => {
  const res = await fetch(getUrl(searchParams.searchTerm));
  const data = await res.json();
  const imageUrls = data.items
    .map((item) => item.pagemap.cse_image)
    .filter((item) => item !== undefined);
  //console.log(imageUrls[0][0].src);

  return (
    <div className="flex">
      {imageUrls.map((image, i) => {
        console.log(image[0].src);
        return (
          <div key={i}>
            <Link href={""}>
              <Image src={image[0].src} width={100} height={100} alt="" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSearchPage;
