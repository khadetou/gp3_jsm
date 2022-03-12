import { FC, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Logo from "/public/assets/images/Logo.svg";
import { navbarItems } from "./navbarItems";

const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar tablet:py-8 tablet:px-24 mobile:py-8 mobile:px-16  flex justify-between items-center p-8 ">
      <div className="gpt3__navbar-links flex-1 flex justify-start items-center">
        <div className="gpt3__navbar-links logo mr-8">
          <Image src={Logo} width={63} height={16} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container hidden laptop:flex flex-row">
          {navbarItems.map(({ title, href }, key) => (
            <p
              className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer font-manrope"
              key={key}
            >
              <a href={href}>{title}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="gpt3__navbar-sign hidden mobile:flex justify-end items-center">
        <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer font-manrope">
          Sign in
        </p>
        <button
          type="button"
          className="py-2 px-4 text-white bg-[#ff4820] font-manrope font-medium text-lg leading-6 rounded-md border-0"
        >
          Sign up
        </button>
      </div>
      <div className="gpt3__navbar-menu flex laptop:hidden  ml-4 relative">
        {toggleMenu ? (
          <RiCloseLine
            className="cursor-pointer"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="cursor-pointer"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu-container mobile:top-10 flex justify-end items-end flex-col text-right right-0 p-8 absolute top-10 min-w-[210px] rounded shadow-2xlg bg-footer  animate-scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {navbarItems.map(({ title, href }, key) => (
                <p
                  className="text-white font-medium text-lg leading-6 capitalize cursor-pointer my-4 mx-0 font-manrope"
                  key={key}
                >
                  <a href={href}>{title}</a>
                </p>
              ))}
              <div className="gpt3__navbar-menue_container-links-sign block mobile:hidden">
                <p className="text-white font-medium text-lg leading-6 capitalize mx-0 my-4 cursor-pointer font-manrope">
                  Sign in
                </p>
                <button
                  type="button"
                  className="py-2 px-4 text-white bg-[#ff4820]  font-manrope font-medium text-lg leading-6 rounded-md border-0"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
