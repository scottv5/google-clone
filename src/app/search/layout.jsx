import SearchHeader from "@/components/SearchHeader";

import "../globals.css";

export default function SearchLayout({ children }) {
  return (
    <div className="">
      <SearchHeader />
      {children}
    </div>
  );
}
