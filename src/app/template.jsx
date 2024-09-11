"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { text, translate, curve } from "./utils/anim";

const routes = {
  "/": "Home",
  "/news": "Actualités",
  "/contact": "Contact",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const Template = ({ children }) => {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="w-full h-screen overflow-hidden">
        <div
          style={{
            opacity: dimensions.width == null ? 1 : 0,
            display: dimensions.width == null ? "block" : "none",
          }}
          className="fixed inset-0 bg-black transition-opacity duration-0 delay-100"
        />
        <motion.p
          className="absolute left-1/2 top-1/4 text-white text-4xl z-[3] transform -translate-x-1/2 text-center"
          {...anim(text)}
        >
          {routes[pathname]}
        </motion.p>
        {dimensions.width != null && <SVG {...dimensions} />}
        {children}
      </div>
    </AnimatePresence>
  );
};

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      {...anim(translate)}
      className="fixed w-full h-[calc(100vh+600px)] pointer-events-none left-0 top-0"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default Template;
