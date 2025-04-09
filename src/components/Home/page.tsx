import Image from "next/image";
import React from "react";
import { WingLogo } from "../Icons";

const HomePage = () => {
  return (
    <div className="mt-[80px] md:mt-0 h-full md:h-screen w-full flex flex-col md:flex-row">
      {/* Text Content Section */}
      <div className="flex flex-col items-start justify-center px-6 md:pl-20 py-10 md:py-16 text-[#033246] h-full md:w-[45%] space-y-5">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-snug md:leading-[74px] font-serifRegular">
          We <br /> valued your <br /> hard-earned money.
        </h1>
        <div className="text-xl md:text-4xl leading-snug">
          <p className="flex items-center justify-center md:justify-start">
            Give wings to your <br />
          </p>
          <p className="flex items-end justify-center md:justify-start">
            <WingLogo className="rotate-12 -scale-x-100" />
            investment
            <WingLogo className="-rotate-12 scale-x-100" />
          </p>
        </div>
        {/* <p className="mt-3 text-sm md:text-lg text-[#919dab] font-mona">
          Supports small businesses with simple invoicing, <br />
          powerful integrations, and cash flow management tools.
        </p> */}
      </div>

      {/* Image Section */}
      <div className="flex-1 relative mt-10 md:mt-24 h-[300px] md:h-auto">
        <Image
          src="/home-page-bg-image.png"
          alt="Homepage illustration"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;
