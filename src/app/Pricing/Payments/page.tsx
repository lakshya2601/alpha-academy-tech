"use client";
import { TickIcon } from "@/components/Icons";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";


type Feature = {
  name: string;
  included: boolean;
};

type PricingCardProps = {
  title: string;
  price: string;
  frequency: string;
  features: Feature[];
  popular?: string;
  selected: boolean;
  onSelect: () => void;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  selected,
  popular,
  onSelect,
}) => {
  const baseClasses =
    'relative bg-white rounded-lg shadow-lg transition-all duration-300 w-full sm:w-[90%] md:w-[30%] lg:w-[20%] hover:shadow-2xl hover:transform hover:scale-[1.02] cursor-pointer group';
  const selectedClasses = selected
    ? 'scale-105 border-2 border-[#02556b] shadow-xl ring-4 ring-[#02556b]/10'
    : 'border border-gray-300';
  const headerBg = selected ? 'bg-[#f7f6f7]' : 'bg-white bg-opacity-90 group-hover:bg-opacity-100';

  return (
    <div className={` ${baseClasses} ${selectedClasses}`} onClick={onSelect}>
      {popular && (
        <span className="absolute -top-3 right-4 bg-[#effcfd] text-[#02556b] border border-[#02556b] text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-sm transform -rotate-2 transition-transform group-hover:rotate-0">
          {popular}
        </span>
      )}
      <div className={`border-b-2 rounded-t-lg p-8 ${headerBg} transition-all duration-300`}>
        <h3 className="text-2xl font-bold text-[#02556b] mb-4 tracking-tight">{title}</h3>
        <p className="text-4xl font-bold text-gray-800 mb-4 flex items-baseline gap-2 group/price hover:text-[#02556b] transition-all duration-300 transform hover:scale-[1.05] cursor-pointer">
          <span className="group-hover/price:translate-y-[-2px] transition-transform duration-200">{price}</span>
          <span className="text-sm font-medium text-gray-500 group-hover/price:text-[#02556b] transition-colors duration-300">/month</span>
        </p>
        <button className="mt-6 px-6 py-3 bg-[#033246] text-white font-semibold text-sm rounded-lg hover:bg-white hover:text-[#033246] hover:border hover:border-[#033246] transition-all duration-300 w-full transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#02556b] focus:ring-offset-2">
          {selected ? "Selected Plan" : "Get Started"}
        </button>
      </div>
      <ul className="text-gray-600 space-y-4 p-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3 hover:text-[#02556b] transition-colors duration-200 group/item p-2 rounded-lg hover:bg-gray-50">
            {feature.included ? (
              <TickIcon className="text-[#02556b] group-hover/item:scale-110 transition-transform" />
            ) : (
              <FiX className="text-red-400 group-hover/item:scale-110 transition-transform" />
            )}
            <span className={`group-hover/item:font-medium ${!feature.included && 'text-gray-400'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Payments = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const plans = [
    {
      title: "MONTHLY PACKAGE",
      price: "₹15,000 +18% Tax",
      frequency: "month",
      features: [
        { name: "Completely Automated", included: true },
        { name: "Trades Indices", included: true },
        { name: "WhatsApp Support", included: true },
        { name: "Remote Support", included: true },
        { name: "1 Strategy (1/Month)", included: true },
      ],
    },
    {
      title: "QUARTERLY PACKAGE",
      price: "₹35,000 +18% Tax",
      frequency: "quarter",
      popular: "Most Popular",
      features: [
        { name: "Completely Automated", included: true },
        { name: "Trades Indices", included: true },
        { name: "WhatsApp Support", included: true },
        { name: "Remote Support", included: true },
        { name: "3 Strategy (1/Month)", included: true },
      ],
    },
    {
      title: "HALF YEARLY PACKAGE",
      price: "₹60,000 +18% Tax",
      frequency: "half year",
      features: [
        { name: "Completely Automated", included: true },
        { name: "Trades Indices", included: true },
        { name: "WhatsApp Support", included: true },
        { name: "Remote Support", included: true },
        { name: "6 Strategy (1/Month)", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-7 sm:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#02556b] mb-8 mt-[100px] text-start w-full leading-[40px] sm:leading-[50px] md:leading-[70px]">
        We&apos;ve got <br /> the perfect plan for you
      </h2>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 w-full items-center justify-center mt-12">
        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            {...plan}
            selected={selectedPlan === plan.title}
            onSelect={() => setSelectedPlan(plan.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Payments;
