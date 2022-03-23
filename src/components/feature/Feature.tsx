import { FC } from "react";

interface FeatureProps {
  title: string;
  text: string;
}

const Feature: FC<FeatureProps> = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature w-full flex justify-between items-start flex-row my-4 mx-0 mobile:m-4">
      <div className="gpt3__features-container__feature-title flex max-w-[180px] mr-8">
        <div className="w-[38px] h-[3px] bg-gradient-bar shadow-md mb-1" />
        <h1 className="font-manrope font-extrabold leading-[22px] text-sm mobile:text-lg mobile:leading-6 tracking-[-0.04] text-white">
          {title}
        </h1>
      </div>
      <div className="gpt3__features-container_feature-text flex-[2] max-w-[390px] flex">
        <p className="font-manrope font-normal mobile:text-sm text-sm leading-5 mobile:leading-6 text-text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Feature;
