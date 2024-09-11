import React from "react";
import BurgerHeader from "./burgerMenu/BurgerHeader";
import DesktopMenu from "./desktopMenu/DesktopMenu";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:justify-center">
      <Image
        className="w-24 lg:w-[146px]"
        src="/logo.png"
        alt="pizza basilic logo"
        // layout="responsive"
        width={146}
        height={146}
      />
      <BurgerHeader />
      <DesktopMenu />
    </div>
  );
};

export default Header;
