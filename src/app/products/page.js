"use client"

import AnimatedButton from '@/components/Button/Button';
import CarouselBanner from '@/components/CrouselDynamicBanner/CarouselBanner';
import ProductGridView from '@/components/ProductGridView/ProductGridView';
import ProductList from '@/components/ProductList/ProductList';
import { products } from '@/components/ProductsCard/ProductsData';
import React, { useState } from 'react';


const Products = () => {

  const handleCategoryChange = (category) => {
    console.log('Selected category:', category);
  };

  return (

    

    <div>
      <CarouselBanner
        title="Products"
        backgroundImage="/ThemePictures/bigsofa.webp"
        onCategoryChange={handleCategoryChange}
        showCategory={true} 
      />

      

      <div className='px-3 py-10'>
        <ProductList products={products} paginationType="pagination" />
      </div>

    </div>



  );
};

export default Products;