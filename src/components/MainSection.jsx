import Image from "next/image";
import HomeSearchForm from "./HomeSearchForm";

const MainSection = () => {
  return (
    <div className="flex flex-col items-center space-y-5 mt-20">
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          height={100}
          width={300}
          alt="google"
        />
      </div>
      <HomeSearchForm />
    </div>
  );
};

export default MainSection;
