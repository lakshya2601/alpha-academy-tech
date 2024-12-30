import React from "react";
import CardComponent from "../Cards/cards2";

const Home3 = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="flex w-full h-[200px] justify-between px-[80px] mt-[80px] mb-[50px] items-center">
        <h1 className="text-4xl md:text-5xl font-serifRegular text-foreground">
          One More main <br />
          text here
        </h1>

        <p className="w-2/3 text-base border-foreground border-t-2 border-b-2 border-r-0 border-l-0 py-4">
          Since our inception, we have been successful in spotting several great
          investment opportunities early and have managed to generate
          sustainable wealth for our clients. Our team enjoys doing this day in
          and day out and we believe this is our &quot;Dharma&quot;.
        </p>
      </div>
      <CardComponent />
    </div>
  );
};

export default Home3;
