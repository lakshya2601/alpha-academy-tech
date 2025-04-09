"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DownIcon, HamburgerIcon, CloseIcon } from "../Icons"; // Assume you have these icons
import { options } from "./data";
import Link from "next/link";

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
      className={`flex gap-1 items-center md:hover:text-white font-bold group transition-all duration-300 cursor-pointer text-center justify-center ${
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsContainerHovered(false);
  };

  const handleSubOptionClick = (route: string) => {
    router.push(route);
    handleMouseLeave();
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
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
        <div className="text-[#033246] font-mona font-semibold text-sm flex flex-col items-center justify-center">
         <Link href="/"><div className="text-lg flex items-center gap-1">
            <span className="text-7xl flex items-center -translate-y-1.5">α</span>
            <div className="flex flex-col justify-center"> 
              <span className="leading-tight">Alpha</span>
              <span className="text-lg leading-tight">Academy</span>
            </div>
          </div></Link>
          
        </div>
        <div className="hidden md:flex text-[#033246] font-mona font-medium text-sm gap-6">
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

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#033246] focus:outline-none"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        <button className="hidden md:block px-4 py-2 ">
          {/* Button Here */}
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

      {isMobileMenuOpen && (
        <div 
          className={`fixed inset-0 bg-white z-30 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full pt-[120px] px-6 overflow-y-auto">
            {options.map((option, index) => {
              if (option.label === "Pricing" && option.dropdown) {
                return option.dropdown.map((subOption) => (
                  <div 
                    key={subOption.name} 
                    className="mb-6 border-b border-gray-100 last:border-b-0 pb-4"
                  >
                    <button
                      className="flex gap-1 items-center md:hover:text-white font-bold group transition-all duration-300 cursor-pointer text-center justify-center "
                      onClick={() => handleSubOptionClick(subOption.route)}
                    >
                      {subOption.name}
                    </button>
                  </div>
                ));
              }
              
              return (
                <div 
                  key={option.label} 
                  className="mb-6 border-b border-gray-100 last:border-b-0 pb-4"
                >
                  <div 
                    className="flex justify-between items-center py-2"
                    onClick={() => !option.route && handleMouseEnter(index)}
                  >
                    <NavbarOption
                      label={option.label}
                      isHovered={hoveredIndex === index}
                      onHover={() => {}}
                      hasSubOptions={!!option.dropdown}
                      route={option.route}
                    />
                  </div>
                  {hoveredIndex === index && option.dropdown && (
                    <div className="flex flex-col space-y-4 mt-3 pl-4 animate-fadeIn">
                      {option.dropdown.map((subOption) => (
                        <button
                          key={subOption.name}
                          className="text-[#033246] text-left text-lg font-mona hover:text-black active:scale-95 transform transition-all duration-200 py-2"
                          onClick={() => handleSubOptionClick(subOption.route)}
                        >
                          {subOption.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
