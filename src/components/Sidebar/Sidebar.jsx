import { sidebarData } from "./sidebarData";
import { SidebarLink } from "./SidebarLink";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { MobileSidebar } from "./MobileSidebar";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -300 },
};

const Sidebar = () => {
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
          className={`md:hidden z-50 relative flex flex-col bg-neutral-50 w-full h-full px-6 py-4 `}
        >
          {sidebarData.map((link) => {
            return (
              <SidebarLink key={link.name} name={link.name} to={link.to} />
            );
          })}
        </motion.div>
      }
      {/* <div
        ref={ref}
        className={`md:hidden z-50 relative flex flex-col bg-neutral-50 h-full px-4  ${
          isOpen ? "block " : "hidden"
        }`}
      >
        {sidebarData.map((link) => {
          return <SidebarLink key={link.name} name={link.name} to={link.to} />;
        })}
      </div> */}
      {/* // desktop */}
      <div className="hidden md:block bg-neutral-50 container  w-60 border ">
        <div className="w-full h-full divide-y divide-dashed flex flex-col justify-start ">
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
