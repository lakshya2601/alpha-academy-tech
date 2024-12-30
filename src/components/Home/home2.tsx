import React from "react";
import CardComponent from "../Cards";

const Home2 = () => {
  return (
    <div className="bg-[#effcfd] h-full flex flex-col w-full">
      {/* Header Section */}
      <div className="flex flex-row w-full justify-between items-center h-[100px] px-[80px] mt-[80px] mb-[50px]">
        <h1 className="text-4xl md:text-5xl font-serifRegular text-foreground ">
          Alpha Academy
          <br />
          in Nutshell
        </h1>
        <div className="text-3xl font-thin italic font-faustina">
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
