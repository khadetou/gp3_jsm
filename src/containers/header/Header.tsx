import { FC } from "react";
import Image from "next/image";
import people from "/public/assets/images/people.png";
import ai from "/public/assets/images/ai.png";

const Header: FC = () => {
  return (
    <div
      className="gpt3_header tablet:py-8 px-24 flex flex-row section_padding"
      id="home"
    >
      <div
        className="
	  gpt3__header-content flex-1 flex justify-center items-start flex-col mr-20"
      >
        <h1 className=" font-manrope font-extrabold text-[62px] leading-[75px] tracking-[-0.04em] text-transparent bg-gradient-text bg-clip-text ">
          Let&apos:s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="font-manrope font-normal text-xl leading-7 text-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input w-full mt-8 mr-0 mb-4 flex flex-row">
          <input
            className="flex-[2] w-full min-h-[50px] font-manrope font-normal text-xl leading-7 bg-footer border-2 border-footer py-0 px-4 outline-none text-white rounded-tl-[5px] rounded-bl-[5px]"
            type="email"
            placeholder="Your Email Address"
          />
          <button
            className="flex-[0.6] w-full min-h-[50px] font-manrope font-normal text-sm leading-7 bg-[#FF4820] border-2 border-[#ff4820] py-0 px-1 text-white cursor-pointer outline-none border-tr-[5px] border-br-[5px]"
            type="button"
          >
            {" "}
            Get Started
          </button>
        </div>
        <div className="gpt3__header-content__people w-full flex justify-start items-center flex-row mt-8">
          <Image src={people} width={181.79} height={38} alt="people" />
          <p className="my-0 ml-4 mr-0 font-manrope font-medium text-xs leading-[38px] text-white text-center">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="gpt3__header-image flex-1 flex justify-center items-center">
        <Image src={ai} />
      </div>
    </div>
  );
};

export default Header;
