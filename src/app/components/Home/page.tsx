import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen w-full flex flex-row">
      {/* Text Content Section */}
      <div className="flex flex-col items-start justify-center pl-20 py-16 text-[#033246] font-mona h-full max-w-[640px] tracking-tight">
        <h1 className="text-6xl font-extrabold">Get paid early</h1>
        <p className="text-6xl leading-snug font-medium mt-4">
          Save automatically all your pay.
        </p>
        <p className="mt-5 text-[#919dab] text-lg">
          Supports small businesses with simple invoicing, <br />
          powerful integrations, and cash flow management tools.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative mt-24 size-[600px]">
        <Image
          src="/home/home-page-bg-image.png"
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
