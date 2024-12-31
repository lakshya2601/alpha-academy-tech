"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DownIcon, MainLogo } from "../Icons";
import { options } from "./data";

interface NavbarOptionProps {
  label: string;
  isHovered: boolean;
  onHover: () => void;
  hasSubOptions: boolean; // New prop to determine arrow display
}

function NavbarOption({
  label,
  isHovered,
  onHover,
  hasSubOptions,
  route,
}: NavbarOptionProps & { route?: string }) {
  return (
    <div
      className={`flex gap-1 items-center hover:text-white font-bold group transition-all duration-300 cursor-pointer ${
        route ? "" : ""
      }`}
      onMouseEnter={hasSubOptions ? onHover : undefined} // Only trigger hover if sub-options exist
      onClick={route ? () => (window.location.href = route) : undefined} // Navigate to the route if it exists
    >
      <span>{label}</span>
      {hasSubOptions && ( // Show arrow icon only if sub-options exist
        <span
          className={`transition-transform duration-300  ${
            isHovered ? "rotate-180" : ""
          }`}
        >
          <DownIcon className="hover:text-white" />
        </span>
      )}
    </div>
  );
}

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [, setIsContainerHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsContainerHovered(false);
  };

  const handleSubOptionClick = (route: string) => {
    router.push(route);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleMouseLeave();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex w-full h-[100px] justify-between bg-navbar-bg items-center fixed px-10 z-40">
        <div className="text-[#033246] font-mona font-semibold text-sm">
          <MainLogo className="text-slate-900 h-5" />
        </div>

        <div className="text-[#033246] font-mona font-medium text-sm flex gap-6 ">
          {options.map((option, index) => (
            <NavbarOption
              key={option.label}
              label={option.label}
              isHovered={hoveredIndex === index}
              onHover={() => handleMouseEnter(index)}
              hasSubOptions={!!option.dropdown} // Check for sub-options
              route={option.route} // Pass the route
            />
          ))}
        </div>
        <button className="px-4 py-2 bg-[#033246] text-white font-mona font-semibold text-sm rounded-lg hover:bg-white hover:text-[#033246] hover:border hover:border-[#033246] transition-colors duration-300">
          Button Here
        </button>
      </nav>

      {hoveredIndex !== null &&
        options[hoveredIndex]?.dropdown && ( // Ensure dropdown menu appears only if sub-options exist
          <div className="fixed inset-0 bg-backdrop-blur bg-opacity-50 z-30 pt-[100px] flex justify-center items-start">
            <div
              className="bg-white rounded-lg shadow-xl p-4 w-[80%] text-center"
              ref={containerRef}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-row gap-2 items-center text-center justify-center">
                <div className="flex space-x-4 items-center text-center justify-center">
                  {options[hoveredIndex]?.dropdown?.map((subOption) => (
                    <p
                      key={subOption.name}
                      className="text-[#033246] hover:text-black cursor-pointer font-mona transition-colors duration-300 font-semibold text-sm"
                      onClick={() => handleSubOptionClick(subOption.route)}
                    >
                      {subOption.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Navbar;
