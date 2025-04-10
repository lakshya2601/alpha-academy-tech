import React from "react";
import CardComponent from "../Cards/cards2";

const Home3 = () => {
  return (
    <div className="w-full h-full md:h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[200px] justify-between px-6 md:px-[80px] mt-6 md:mt-[80px] mb-6 md:mb-[50px] items-center text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-serifRegular text-foreground mb-4 md:mb-0 leading-snug">
  Empowering Your <br />
  <span className="text-foreground">Financial Future</span>
</h1>


        <p className="w-full md:w-2/3 text-base border-foreground border-t-2 border-b-2 border-r-0 border-l-0 py-4">
        At Alpha Academy, we are driven by a commitment to help you grow and protect your wealth. From identifying promising investment opportunities to building robust financial strategies, we bring deep expertise and data-driven insights to the table. Our purpose is to guide you at every step of your financial journey — because your goals are our mission.
        </p>
      </div>
      <CardComponent />
    </div>
  );
};

export default Home3;
