import Image from "next/image";
import React from "react";
import { WingLogo } from "../Icons";

const HomePage = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      {/* Text Content Section */}
      <div className="flex flex-col items-start justify-center pl-10 md:pl-20 py-16 text-[#033246] h-full md:w-[45%] space-y-5">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug md:leading-[74px] font-serifRegular">
          We <br /> valued your <br /> hard-earned money.
        </h1>
        <div className="text-2xl md:text-4xl leading-snug">
          <p className="flex items-center text-center justify-center">
            Give wings to your <br />
          </p>
          <p className="flex items-end">
            <WingLogo className=" rotate-12 -scale-x-100" />
            investment
            <WingLogo className="-rotate-12 scale-x-100" />
          </p>
        </div>
        {/* <p className="mt-3 text-base md:text-lg text-[#919dab] font-mona">
          Supports small businesses with simple invoicing, <br />
          powerful integrations, and cash flow management tools.
        </p> */}
      </div>

      {/* Image Section */}
      <div className="flex-1 relative mt-10 md:mt-24">
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
