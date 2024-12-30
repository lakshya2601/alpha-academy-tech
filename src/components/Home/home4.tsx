import React from "react";
import CardComponent from "../Cards/cards2";

const Home4 = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="flex w-full h-[300px] justify-between px-[80px] mt-[80px] mb-[50px] items-center">
        <h1 className="text-4xl md:text-6xl font-serifRegular text-foreground ">
          One text here
        </h1>
        <div className="w-2/3 flex flex-col gap-7">
          <div className=" text-[35px] font-faustina">
            We strive to bring superior long-term returns to our clients.
          </div>{" "}
          <p className=" text-base border-[#96a8b0] border-t-[1px] border-b-[1px] border-r-0 border-l-0 py-4">
            Since our inception, we have been successful in spotting several
            great investment opportunities early and have managed to generate
            sustainable wealth for our clients. Our team enjoys doing this day
            in and day out and we believe this is our &quot;Dharma&quot;.
          </p>
        </div>
      </div>
      <CardComponent />
    </div>
  );
};

export default Home4;
