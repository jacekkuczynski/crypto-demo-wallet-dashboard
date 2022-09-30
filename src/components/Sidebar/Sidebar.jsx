import { sidebarData } from "./sidebarData";
import { SidebarLink } from "./SidebarLink";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* //hamburger */}
      <div
        className={` absolute md:hidden py-4 px-4 ${
          isOpen ? "hidden" : "block"
        } `}
      >
        <Bars3Icon
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="h-14"
        />
      </div>
      {/* mobile sidebar */}
      {
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          ref={ref}
          className={` md:hidden absolute z-50 flex flex-col justify-around bg-neutral-50 w-1/2 h-full px-8 py-8  `}
        >
          {sidebarData.map((link) => {
            return (
              <SidebarLink
                key={link.name}
                name={link.name}
                to={link.to}
                icon={link.icon}
              />
            );
          })}
        </motion.div>
      }
      {/* // desktop */}
      <div className="container hidden w-60 md:block bg-neutral-50">
        <div className="flex flex-col w-full h-full divide-y divide-dashed ">
          {sidebarData.map((link) => {
            return (
              <div className="hover:bg-neutral-100 transition ease-in-out delay-80 px-5 py-5">
                <SidebarLink
                  key={link.name}
                  name={link.name}
                  to={link.to}
                  icon={link.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
