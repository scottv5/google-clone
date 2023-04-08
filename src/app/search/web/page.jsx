import Link from "next/link";

const getUrl = (searchTerm = "") => {
  return `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_ALL_KEY}&q=${searchTerm}`;
};

const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(getUrl(searchParams.searchTerm));
  const data = await res.json();
  console.log(data);

  return (
    <>
      {data.items.map(({ cacheId, link, title }) => {
        return (
          <div key={cacheId}>
            <Link href={link}>{title}</Link>
          </div>
        );
      })}
    </>
  );
};

export default WebSearchPage;
