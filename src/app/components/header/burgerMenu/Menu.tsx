import React from "react";
import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../../../utils/anim";
import MenuLink from "./MenuLink";
const menu = [
  {
    title: "Accueil",
    to: "/",
  },
  {
    title: "Nous trouver",
    to: "/contact",
  },
  {
    title: "Actualités",
    to: "/news",
  },
];
const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <motion.div
      className={`fixed flex z-[999] h-full w-full flex-col justify-between left-0 bottom-0 bg-bg`}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="flex justify-end p-5">
        <motion.svg
          className="cursor-pointer w-24 h-24"
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="transition-colors duration-500"
            d="M1.5 1.5L67 67"
            stroke="white"
          />
          <path
            className="transition-colors duration-500"
            d="M66.5 1L0.999997 66.5"
            stroke="white"
          />
        </motion.svg>
      </div>

      <div className="absolute left-1/2 top-1/2 w-full translate-x-[-50%] translate-y-[-50%]">
        {menu.map((el, index) => {
          return (
            <MenuLink
              closeMenu={closeMenu}
              data={el}
              index={index}
              key={index}
            />
          );
        })}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className="text-white flex justify-center gap-3 p-5"
      >
        <a
          href="https://www.facebook.com/people/Basilic-Pizzeria/100057529964645/"
          target="_blank"
        >
          FB
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
