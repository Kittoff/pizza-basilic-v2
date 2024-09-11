"use client";
import React, { useState } from "react";
import Burger from "./Burger";
import Stairs from "./Stairs";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";

const BurgerHeader = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Burger
        openMenu={() => {
          setisMenuOpen(true);
        }}
      />

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <div>
            <Stairs />
            <Menu closeMenu={() => setisMenuOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerHeader;
