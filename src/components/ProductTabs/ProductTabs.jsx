"use client";
import { useState } from "react";
import ProductCard from "../ProductsCard/ProductsCard";

export default function ProductTabs({ products }) {
  const tabs = [
    { key: "latest", label: "LATEST PRODUCTS" },
    { key: "topRated", label: "TOP RATING" },
    { key: "bestseller", label: "BEST SELLER" },
    { key: "featured", label: "FEATURED PRODUCTS" }
  ];

  const [activeTab, setActiveTab] = useState("latest");

  const filterProducts = () => {
    switch (activeTab) {
      case "latest":
        return products.filter(p => p.category === "latest");
      case "topRated":
        return products.filter(p => p.rating >= 4.5);
      case "bestseller":
        return products.filter(p => p.bestseller);
      case "featured":
        return products.filter(p => p.category === "featured");
      default:
        return products;
    }
  };

  return (
    <div className="w-full">
      <div className="mt-15">
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                relative group 
                transition-all
                text-xs sm:text-sm md:text-base 
                font-medium
                break-words whitespace-normal 
                w-full sm:w-auto
                bg-gray-200 sm:bg-transparent
                px-5 py-3
                
                
                ${activeTab === tab.key
                  ? "bg-gray-300 text-black font-semibold"
                  : "text-gray-700"
                }
              `}
            >
              {tab.label}
              <span
                className={`
                  hidden sm:block
                  absolute bottom-0 left-1/2 h-0.5 bg-black 
                  transition-all duration-300 transform -translate-x-1/2
                  ${activeTab === tab.key ? "w-full" : "w-0"}
                  group-hover:w-full
                `}
              />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
