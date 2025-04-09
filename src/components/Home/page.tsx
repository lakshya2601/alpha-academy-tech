import Image from "next/image";
import React from "react";
import { WingLogo } from "../Icons";

const HomePage = () => {
  return (
    <div className="mt-[80px] md:mt-0 h-full md:h-screen w-full flex flex-col md:flex-row animate-fadeIn relative">
      {/* Image Section - Moved to background */}
      

      {/* Text Content Section */}
      <div className="flex flex-col items-start justify-center px-6 md:pl-20 py-10 md:py-16 text-[#033246] h-full md:w-[45%] space-y-6 md:space-y-8 animate-slideInLeft z-10 bg-white/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-snug md:leading-[74px] font-serifRegular transform hover:scale-105 transition-transform duration-300">
          We <br /> valued your <br /> hard-earned money.
        </h1>
        <div className="text-xl md:text-4xl leading-snug transform hover:translate-y-[-5px] transition-transform duration-300">
          <p className="flex items-center justify-center md:justify-start">
            Give wings to your <br />
          </p>
          <p className="flex items-end justify-center md:justify-start gap-2">
            <WingLogo className="rotate-12 -scale-x-100 hover:rotate-45 transition-transform duration-300 size-10" />
            investment
            <WingLogo className="-rotate-12 scale-x-100 hover:-rotate-45 transition-transform duration-300 size-10" />
          </p>
        </div>
      </div>
      <div className="absolute inset-0 md:relative md:flex-1 md:mt-24 h-full md:h-auto z-0">
        <Image
          src="/PlaygroundImage3.png"
          alt="Homepage illustration"
          fill
          className="object-contain opacity-100 md:opacity-100"
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;
