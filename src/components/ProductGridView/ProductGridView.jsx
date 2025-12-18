// "use client";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/cartSlice";
// import { ShoppingBag, Search, Heart } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { QuickViewProductOverviewModal } from "../QuickViewProductOverviewModal/QuickViewProductOverviewModal";
// import { Separator } from "../ui/separator";

// export default function ProductGrid({ products, title = "Featured Products" }) {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <>
//       <div className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
//         {title && (
//           <h2 className="text-3xl font-semibold mb-12 text-center md:text-left">{title}</h2>
//         )}

//         <div className="flex flex-col gap-8">
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               className="flex flex-col md:flex-row gap-6 group bg-white"
//             >
//               {/* Product Image */}
//               <div className="w-full md:w-72 h-72 flex-shrink-0 overflow-hidden relative bg-gray-100">
//                 {/* Sale Badge */}
//                 {product.comparePrice && (
//                   <div className="absolute top-0 left-0 z-10 overflow-hidden w-24 h-24">
//                     <div className="bg-red-500 text-white text-xs font-bold px-8 py-1 transform -rotate-45 -translate-x-6 translate-y-4 shadow-md text-center">
//                       Sale
//                     </div>
//                   </div>
//                 )}

//                 <img
//                   onClick={() => router.push(`/productOverview/${product.id}`)}
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover object-center cursor-pointer"
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="flex flex-col justify-start flex-1">
//                 <h3
//                   onClick={() => router.push(`/productOverview/${product.id}`)}
//                   className="text-2xl font-normal text-black mb-2 cursor-pointer hover:text-gray-600 transition-colors"
//                 >
//                   {product.name}
//                 </h3>

//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="text-red-500 text-xl font-normal">
//                     ${product.price}
//                   </span>
//                   {product.comparePrice && (
//                     <span className="text-gray-400 line-through text-lg">
//                       ${product.comparePrice}
//                     </span>
//                   )}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4 mt-auto md:mt-0">
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
//                     aria-label="Add to cart"
//                   >
//                     <ShoppingBag className="w-5 h-5" />
//                   </button>

//                   <button
//                     onClick={() => {
//                       setSelectedProduct(product);
//                       setIsQuickViewOpen(true);
//                     }}
//                     className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
//                     aria-label="Quick view"
//                   >
//                     <Search className="w-5 h-5" />
//                   </button>

//                   <button
//                     className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
//                     aria-label="Add to wishlist"
//                   >
//                     <Heart className="w-5 h-5" />
//                   </button>
//                 </div>

                  
//               </div>
            
//             </div>
//             // {index < products.length - 1 && <Separator className="my-6" />}
//           ))}
         
//         </div>
  
       
//       </div>

//       <QuickViewProductOverviewModal
//         product={selectedProduct}
//         isOpen={isQuickViewOpen}
//         onClose={() => setIsQuickViewOpen(false)}
//       />
//     </>
//   );
// }











"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { ShoppingBag, Search, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { QuickViewProductOverviewModal } from "../QuickViewProductOverviewModal/QuickViewProductOverviewModal";
import { Separator } from "../ui/separator";
import ProductPagination from "../Shadcn/Pagination/ProductPagination";


export default function ProductGrid({ products, title = "Featured Products" }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Slice products for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl font-semibold mb-12 text-center md:text-left">{title}</h2>
        )}

        <div className="flex flex-col gap-8">
          {paginatedProducts.map((product, index) => (
            <div key={product.id} className="flex flex-col md:flex-row gap-6 group bg-white">
              {/* Product Image */}
              <div className="w-full md:w-72 h-72 flex-shrink-0 overflow-hidden relative bg-gray-100">
                {product.comparePrice && (
                  <div className="absolute top-0 left-0 z-10 overflow-hidden w-24 h-24">
                    <div className="bg-red-500 text-white text-xs font-bold px-8 py-1 transform -rotate-45 -translate-x-6 translate-y-4 shadow-md text-center">
                      Sale
                    </div>
                  </div>
                )}
                <img
                  onClick={() => router.push(`/productOverview/${product.id}`)}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center cursor-pointer"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-start flex-1">
                <h3
                  onClick={() => router.push(`/productOverview/${product.id}`)}
                  className="text-2xl font-normal text-black mb-2 cursor-pointer hover:text-gray-600 transition-colors"
                >
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-500 text-xl font-normal">${product.price}</span>
                  {product.comparePrice && (
                    <span className="text-gray-400 line-through text-lg">${product.comparePrice}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto md:mt-0">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsQuickViewOpen(true);
                    }}
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    aria-label="Quick view"
                  >
                    <Search className="w-5 h-5" />
                  </button>

                  <button
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Separator between products */}
              {index < paginatedProducts.length - 1 && <Separator className="my-6 md:hidden" />}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <ProductPagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      <QuickViewProductOverviewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
