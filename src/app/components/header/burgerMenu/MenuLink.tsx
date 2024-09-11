import { motion } from "framer-motion";
import { rotateX, mountAnim } from "../../../utils/anim";
import Link from "next/link";

interface MenuItem {
  title: string;
  to: string;
}

interface MenuLinkProps {
  data: MenuItem; // Use the defined type here
  index: number;
  closeMenu: () => void;
}

export default function MenuLink({ data, index, closeMenu }: MenuLinkProps) {
  const { title, to } = data;

  return (
    <motion.div
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className="border-t border-white flex justify-center cursor-pointer origin-top last-of-type:border-b last-of-type:border-white"
    >
      <Link
        className="text-white uppercase text-4xl"
        onClick={() => closeMenu()}
        href={to}
      >
        {title}
      </Link>
    </motion.div>
  );
}
