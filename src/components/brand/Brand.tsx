import { FC } from "react";
import { atlassian, google, shopify, slack, dropbox } from "./imports";
import Image from "next/image";

const Brand: FC = () => {
  const brands = [google, atlassian, shopify, slack, dropbox];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {brands.map((image, idx) => (
        <div
          key={idx}
          className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center"
        >
          <Image src={image} />
        </div>
      ))}
    </div>
  );
};

export default Brand;
