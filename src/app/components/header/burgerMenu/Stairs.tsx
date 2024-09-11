import React from "react";
import { motion } from "framer-motion";
import { height, background, mountAnim } from "../../../utils/anim";
const Stairs = () => {
  return (
    <motion.div className="top-0 left-0 fixed z-[2] h-[100vh] flex transition-all pointer-events-none">
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={height}
            {...mountAnim}
            custom={4 - index}
            className="w-[20vw] h-full bg-"
          ></motion.div>
        );
      })}
      <motion.div
        variants={background}
        {...mountAnim}
        className="w-full h-full absolute bg-black"
      ></motion.div>
    </motion.div>
  );
};

export default Stairs;
