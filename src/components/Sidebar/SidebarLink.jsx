import React from "react";
import { Link } from "react-router-dom";

export const SidebarLink = ({ name, to, icon }) => {
  return (
    <Link to={to}>
      <div className="flex w-full h-8 items-center gap-6 mx-4 my-4 text-neutral-900 hover:text-red-400 transition ease-in-out delay-80">
        {icon}
        {name}
      </div>
      <div className=" "></div>
    </Link>
  );
};
