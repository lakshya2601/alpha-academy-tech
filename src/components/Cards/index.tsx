"use client";
import Image from "next/image";
import React from "react";
import { sampleData } from "./data";
import { CardData } from "./data";

// Interface for the card data

// Card component
export const Cards: React.FC<CardData> = ({
  svg,
  title,
  description,
  subtitle,
}) => {
  return (
    <div className="w-[300px] min-h-[400px] bg-white rounded-[20px] hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between p-8">
      <div className="flex items-center justify-center py-6">
        <Image
          src={svg}
          alt={title}
          className="object-contain w-24 h-24"
          width={96}
          height={96}
          priority
        />
      </div>

      <div className="flex flex-col items-center text-center space-y-4 font-mona">
        <h2 className="text-lg font-sans font-extrabold text-black">
          {subtitle}
        </h2>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="text-base font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// CardList component
const CardList: React.FC<{ data: CardData[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px] ">
      {data.map((item, index) => (
        <Cards
          key={index}
          svg={item.svg}
          title={item.title}
          subtitle={item.subtitle}
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
