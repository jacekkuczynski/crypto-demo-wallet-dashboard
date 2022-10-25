import { sidebarData } from "./sidebarData";
import { SidebarItem } from "./SidebarItem";
import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import { UsersCash } from "../UsersCash/UsersCash";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    setIsOpen(false);
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
          className={` md:hidden absolute z-50 flex flex-col justify-around bg-neutral-100 w-1/2 h-full px-8 py-8  `}
        >
          {sidebarData.map((link) => {
            return (
              <Link key={link.name} to={link.to}>
                <SidebarItem name={link.name} icon={link.icon} />
              </Link>
            );
          })}
          <LogoutBtn />
          <UsersCash />
        </motion.div>
      }
      {/* // desktop */}
      <div className="container hidden w-60 md:block bg-neutral-100">
        <div className="flex flex-col w-full  h-full ">
          <div>
            {sidebarData.map((link) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  key={link.name}
                  end
                  to={link.to}
                >
                  <div className="hover:bg-neutral-200 hover:rounded-lg transition ease-in-out delay-80 px-5 py-5">
                    <SidebarItem name={link.name} icon={link.icon} />
                  </div>
                </NavLink>
              );
            })}
            <div className="hover:bg-neutral-200 hover:rounded-lg transition ease-in-out delay-80 px-5 py-5">
              <LogoutBtn />
            </div>
          </div>
          <div className="my-16">
            <UsersCash />
          </div>
        </div>
      </div>
    </>
  );
};
