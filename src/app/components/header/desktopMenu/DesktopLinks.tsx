import AnimatedLink from "@/app/utils/AnimatedLinks";
// import { useLenis } from "@studio-freight/react-lenis";
import React from "react";

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "Nos Pizzas", href: "/#pizzas" },
  { title: "Nous trouver", href: "/contact" },
  { title: "Actualités", href: "/news" },
];

const DesktopLinks = () => {
  //   const lenisInstance = useLenis();

  //   // Function for smooth scrolling
  //   const handleClick = (targetElement) => {
  //     if (targetElement) {
  //       const scrollToOptions = {
  //         // Customize scroll options if needed
  //         offset: 0,
  //         lerp: 0.1,
  //         duration: 1.5,
  //         easing: (rawValue) => rawValue, // Example easing function
  //         immediate: false,
  //         lock: false,
  //         force: false,
  //       };

  //       lenisInstance.scrollTo(targetElement, scrollToOptions);
  //     }
  //   };
  return (
    <div
      className={` flex min-w-[47.063rem] text-[18px] justify-evenly font-bold`}
    >
      <div className="contents uppercase">
        {navLinks.map((link, i) => {
          return (
            <div key={i} className="relative">
              <AnimatedLink
                href={link.href}
                title={link.title}
                hoveredColor="text-primary"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopLinks;
