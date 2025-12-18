"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import Breadcrumb from './Breadcrumb';
import { categories } from './CategoriesData';

const CarouselBanner = ({ 
  title = "Products", // Default title for the page
  backgroundImage = null,
  showCategory = false,
  minHeight= "520px",
  onCategoryChange = () => {} 
}) => {
  const [activeCategory, setActiveCategory] = useState(null); // null = show default title
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  // Infinite carousel navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  // Get visible categories based on screen size
  const getVisibleCategories = () => {
    const visible = [];
    const count = 5; // 5 on desktop, will be 1 on mobile via CSS
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % categories.length;
      visible.push(categories[index]);
    }
    return visible;
  };

  const visibleCategories = getVisibleCategories();

  // Default background gradient if no image provided
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(rgba(80, 70, 60, 0.6), rgba(80, 70, 60, 0.6)), url(${backgroundImage})` }
    : { background: 'linear-gradient(135deg, #8b7355 0%, #6d5d4b 100%)' };

  return (
    <div 
      className="relative w-full flex flex-col items-center justify-center px-4 md:px-8 py-16 bg-cover bg-center"
      style={{...backgroundStyle, minHeight: minHeight}}
    >
      {/* Decorative plant image positioning */}
      <div className="absolute top-8 right-8 w-64 h-64 opacity-30 pointer-events-none hidden md:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100 180 Q80 120 60 80 Q50 60 70 50 Q90 40 100 60 Q110 40 130 50 Q150 60 140 80 Q120 120 100 180" 
                fill="#2d5016" opacity="0.6"/>
          <path d="M100 180 Q120 130 140 100 Q150 85 135 75 Q120 65 110 80" 
                fill="#3d6b1f" opacity="0.5"/>
        </svg>
      </div>

      {/* Title - shows page title or active category name */}
      <h1 className="text-3xl md:text-5xl font-bold text-white  mb-5 relative z-10 text-center">
        {activeCategory ? activeCategory.name : title}
      </h1>

        <Breadcrumb activeCategoryName={activeCategory ? activeCategory.name : title} />

      {/* Carousel Container - Full Width */}
      <div 
        className="relative w-full px-4 md:px-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow - Only visible on hover */}
        <button
          onClick={handlePrev}
          className={`absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Previous categories"
        >

          
          <ChevronLeft className="text-white" size={32} strokeWidth={2.5} />
        </button>

        {/* Carousel - Shows 5 on desktop, 1 on mobile */}

        {showCategory &&(
            <div className="flex gap-10 md:gap-16 lg:gap-22 justify-center items-center overflow-hidden">
          {visibleCategories.map((category, index) => (
            <div 
              key={category.id} 
              className={`flex-shrink-0 ${
                index === 0 ? 'block' : 'hidden md:block'
              }`}
            >
              <CategoryCard
                category={category}
                isActive={activeCategory?.id === category.id}
                onClick={() => handleCategoryClick(category)}
              />
            </div>
          ))}
        </div>

        )}
        
        {/* Right Arrow - Only visible on hover */}
        <button
          onClick={handleNext}
          className={`absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Next categories"
        >
          <ChevronRight className="text-white" size={32} strokeWidth={2.5} />
        </button>
      </div>

      {/* Breadcrumb */}
      
    </div>
  );
};

export default CarouselBanner;