"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link.js";

const lettersSpace = 100;

const AnimatedLink = ({ title, href, hoveredColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer overflow-hidden"
    >
      {href ? (
        <Link href={href}>
          <AnimatedWord
            title={title}
            animation={letterAnimation}
            isHovered={isHovered}
          />
        </Link>
      ) : (
        <AnimatedWord
          title={title}
          animation={letterAnimation}
          isHovered={isHovered}
        />
      )}
      <div className={`absolute top-0 ${hoveredColor}`}>
        {href ? (
          <Link href={href}>
            <AnimatedWord
              title={title}
              animation={letterAnimation2}
              isHovered={isHovered}
            />
          </Link>
        ) : (
          <AnimatedWord
            title={title}
            animation={letterAnimation2}
            isHovered={isHovered}
          />
        )}
      </div>
    </motion.div>
  );
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -lettersSpace,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};
const letterAnimation2 = {
  rest: {
    y: lettersSpace,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
  hover: {
    y: 0,
  },
};
const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};
const AnimatedWord = ({
  title,
  animation,
  isHovered,
}: {
  title: string;
  animation: any;
  isHovered: boolean;
}) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      {title.split("").map((char, i) => {
        return char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            variants={animation}
            className="relative inline-block whitespace-nowrap"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default AnimatedLink;
