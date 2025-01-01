import React from "react";
import CardComponent from "../Cards";

const Home2 = () => {
  return (
    <div className="bg-[#effcfd] h-full flex flex-col w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center h-auto md:h-[100px] px-6 md:px-[80px] mt-6 md:mt-[80px] mb-6 md:mb-[50px] text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-serifRegular text-foreground mb-4 md:mb-0">
          Alpha Academy
          <br className="block md:hidden" />
          in Nutshell
        </h1>
        <div className="text-xl md:text-3xl font-thin italic font-faustina">
          &quot;A great quote will be here&quot;
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-6 flex flex-col items-center justify-center">
        <CardComponent />
      </main>
    </div>
  );
};

export default Home2;
