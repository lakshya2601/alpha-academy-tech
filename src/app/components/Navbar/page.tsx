import React from "react";
import { DownIcon, MainLogo } from "../Icons";

interface NavbarOptionProps {
  label: string;
}

function NavbarOption({ label }: NavbarOptionProps) {
  return (
    <div className="flex gap-1 items-center hover:text-white font-bold group transition-all duration-300 cursor-pointer">
      <span>{label}</span>
      <span className="group-hover:rotate-180 transition-transform duration-300 ">
        <DownIcon className="hover:text-white" />
      </span>
    </div>
  );
}

function Navbar() {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <nav className="flex w-full h-[100px] justify-between bg-navbar-bg items-center fixed px-10">
      <div className="text-[#033246] font-mona font-semibold text-sm">
        <MainLogo className="text-slate-900 h-5" />
      </div>
      <div className="text-[#033246] font-mona font-medium text-sm flex gap-6">
        {options.map((option) => (
          <NavbarOption key={option} label={option} />
        ))}
      </div>
      <button className="px-4 py-2 bg-[#033246] text-white font-mona font-semibold text-sm rounded hover:bg-white hover:text-[#033246] transition-colors duration-300">
        Button Here
      </button>
    </nav>
  );
}

export default Navbar;
