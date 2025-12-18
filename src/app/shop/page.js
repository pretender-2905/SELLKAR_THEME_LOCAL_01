"use client"

import AnimatedButton from '@/components/Button/Button';
import CarouselBanner from '@/components/CrouselDynamicBanner/CarouselBanner';
import ProductGridView from '@/components/ProductGridView/ProductGridView';
import ProductList from '@/components/ProductList/ProductList';
import { products } from '@/components/ProductsCard/ProductsData';
import React, { useState } from 'react';

const Shop = () => {
  const [showGrid, setshowGrid] = useState(false)

  return (
    <div>


      <CarouselBanner
        title="Shops"
        backgroundImage="/ThemePictures/carousel3.jpeg"
        showCategory={true}

      />

      <div className='flex gap-6 px-6 py-10'>
        {/* Left Sidebar - Categories - Hidden on mobile */}
        <div className='hidden md:block w-1/4 min-w-[200px]'>
          <h2 className='text-2xl font-semibold mb-6'>Categories</h2>
        </div>

        {/* Right Side - Product List */}
        <div className='flex-1'>
          <AnimatedButton
            text={showGrid ? "Show List" : "Show Grid"}
            padding="px-10"
            bgColor="bg-black"
            onClick={() => setshowGrid(!showGrid)} 
            textColor="text-white"
            className="mt-5 mb-5"
          />

          {showGrid ? (
            <ProductGridView products={products} paginationType="pagination" />
          ) : (<ProductList products={products} paginationType="pagination" />)

          }

        </div>


      </div>


    </div>
  );
};

export default Shop;