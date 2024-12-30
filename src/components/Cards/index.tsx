"use client";
import Image from "next/image";
import React from "react";
import { sampleData } from "./data";
import { CardData } from "./data";

// Interface for the card data

// Card component
export const Cards: React.FC<CardData> = ({ svg, title, description }) => {
  return (
    <div className="w-full h-[300px] bg-white rounded-[50px] hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center">
        <Image
          src={svg}
          alt={title}
          className="object-contain p-5 w-20 h-20"
          width={80}
          height={80}
          priority
        />
      </div>

      <div className="p-5  flex flex-col items-center text-center font-mona">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// CardList component
const CardList: React.FC<{ data: CardData[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-[100px]">
      {data.map((item, index) => (
        <Cards
          key={index}
          svg={item.svg}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

// Sample data for demonstration

// Main export for the combined component
const CardComponent: React.FC = () => {
  return <CardList data={sampleData} />;
};

export default CardComponent;
