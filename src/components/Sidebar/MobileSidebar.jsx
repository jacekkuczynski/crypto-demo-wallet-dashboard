import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sidebarData } from "./sidebarData";
import { SidebarLink } from "./SidebarLink";
import { useRef } from "react";

export const MobileSidebar = ({ isOpen, ref }) => {
  const variants = {
    open: { opacity: 1, x: "+100%" },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={isOpen ? "closed" : "open"}
          variants={variants}
          ref={ref}
          className={`md:hidden z-50 relative flex flex-col bg-neutral-50 h-full px-4 `}
        >
          {sidebarData.map((link) => {
            return (
              <SidebarLink key={link.name} name={link.name} to={link.to} />
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
