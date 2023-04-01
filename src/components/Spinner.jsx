import Image from "next/image";

const Spinner = ({ width, height }) => {
  return (
    <Image
      src="/spinner.svg"
      alt="spinner animation"
      width={width}
      height={height}
    />
  );
};

export default Spinner;
