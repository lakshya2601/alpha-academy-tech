import React from "react";
import CardComponent from "../Cards/page";

const Home2 = () => {
  return (
    <div className="bg-[#effcfd] min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="flex flex-row w-full justify-between items-center border-b border-red-500 px-10 py-6">
        <h1 className="text-4xl md:text-5xl font-serifRegular">
          Alpha Academy
          <br />
          in Nutshell
        </h1>
        <div className="text-lg font-medium">Lakshya</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <CardComponent />
      </main>
    </div>
  );
};

export default Home2;
