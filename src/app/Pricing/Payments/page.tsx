"use client";
import { TickIcon } from "@/components/Icons";
import React, { useState } from "react";

type PricingCardProps = {
  title: string;
  price: string;
  frequency: string;
  features: string[];
  popular?: string;
  selected: boolean;
  onSelect: () => void;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  frequency,
  features,
  selected,
  popular,
  onSelect,
}) => {
  const baseClasses =
    "relative bg-white rounded-lg shadow-lg transition-all duration-300 w-full sm:w-[90%] md:w-[30%] lg:w-[20%]";
  const selectedClasses = selected
    ? "scale-105 border-2 border-[#02556b]"
    : "border border-gray-300";
  const headerBg = selected ? "bg-[#f7f6f7]" : "bg-white";

  return (
    <div className={` ${baseClasses} ${selectedClasses}`} onClick={onSelect}>
      {popular && (
        <span className="absolute top-4 right-4 bg-[#effcfd] text-[#02556b] border border-[#02556b] text-xs md:text-text-[8px] lg:text-xs font-bold px-3 py-1 md:px-1 md:py-[1px] rounded-full ">
          {popular}
        </span>
      )}
      <div className={`border-b-2 rounded-t-lg p-6 ${headerBg}`}>
        <h3 className="text-xl font-semibold text-[#02556b] mb-4">{title}</h3>
        <p className="text-5xl font-bold text-gray-800 mb-4">
          {price}
          <span className="text-xs font-thin">/{frequency}</span>
        </p>
        <button className="mt-3 px-4 py-2 bg-[#033246] text-white font-semibold text-sm rounded-lg hover:bg-white hover:text-[#033246] hover:border hover:border-[#033246] transition-colors duration-300 w-full">
          Get Started
        </button>
      </div>
      <ul className="text-gray-600 space-y-2 p-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <TickIcon /> <span>{feature}</span>
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
      title: "Free Plan",
      price: "₹0",
      frequency: "month",
      features: [
        "Basic Features",
        "1 Project",
        "Community Support",
        "No Guidance",
      ],
    },
    {
      title: "Monthly Plan",
      price: "₹100",
      frequency: "month",
      popular: "Most Popular",
      features: [
        "Advanced Features",
        "5 Projects",
        "Email Support",
        "Our Guidance",
      ],
    },
    {
      title: "Yearly Plan",
      price: "₹800",
      frequency: "year",
      features: [
        "All Features",
        "Unlimited Projects",
        "Priority Support",
        "Priority Guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-7 sm:px-8">
      {/* Header Section */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#02556b] mb-8 mt-[100px] text-start w-full leading-[40px] sm:leading-[50px] md:leading-[70px]">
        We&apos;ve got <br /> the perfect plan for you
      </h2>

      {/* Pricing Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full items-center justify-center">
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
