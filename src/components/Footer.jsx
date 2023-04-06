import CountryLookup from "./CountryLookup";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-3 flex items-center justify-center sm:justify-normal">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between text-sm px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="lnk">Advertising</li>
          <li className="lnk">Business</li>
          <li className="lnk">How Search Works</li>
        </ul>

        <ul className="flex items-center space-x-6">
          <li className="lnk">Privacy</li>
          <li className="lnk">Terms</li>
          <li className="lnk">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
