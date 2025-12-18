// "use client";

// import { useState } from "react";
// import ProductCard from "../ProductsCard/ProductsCard";


// export default function ProductList({ products }) {
//   const [visibleCount, setVisibleCount] = useState(0);

//   const showMore = () => {
//     setVisibleCount(prev => prev + 8);
//   };

//   return (
//     <div className="w-full">

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.slice(0, visibleCount).map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>


//       {visibleCount < products.length && (
//         <div className="flex justify-center mt-6">
//           <button
//             className="px-6 py-2 border border-black cursor-pointer mb-10 hover:bg-black hover:text-white"
//             onClick={showMore}
//           >
//             Show More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import ProductCard from "../ProductsCard/ProductsCard";

// export default function ProductList({ products, paginationType = "showMore" }) {
//   const [visibleCount, setVisibleCount] = useState(paginationType === "showMore" ? 8 : 0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   const showMore = () => {
//     setVisibleCount(prev => prev + itemsPerPage);
//   };

//   // Pagination logic
//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentProducts = paginationType === "pagination" 
//     ? products.slice(startIndex, endIndex)
//     : products.slice(0, visibleCount);

//   const goToPage = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="w-full">
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {currentProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Show More Button */}
//       {paginationType === "showMore" && visibleCount < products.length && (
//         <div className="flex justify-center mt-6">
//           <button
//             className="px-6 py-2 border border-black cursor-pointer mb-10 hover:bg-black hover:text-white"
//             onClick={showMore}
//           >
//             Show More
//           </button>
//         </div>
//       )}

//       {/* Pagination */}
//       {paginationType === "pagination" && totalPages > 1 && (
//         <div className="flex justify-center items-center gap-2 mt-8 mb-10">
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 border border-black hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => goToPage(page)}
//               className={`px-4 py-2 border border-black ${
//                 currentPage === page
//                   ? "bg-black text-white"
//                   : "hover:bg-black hover:text-white"
//               }`}
//             >
//               {page}
//             </button>
//           ))}

//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 border border-black hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }






















"use client";

import { useState } from "react";
import ProductCard from "../ProductsCard/ProductsCard";
import ProductPagination from "../Shadcn/Pagination/ProductPagination";
import AnimatedButton from "../Button/Button";


export default function ProductList({ products, paginationType = "showMore" }) {
  const [visibleCount, setVisibleCount] = useState(paginationType === "showMore" ? 8 : 0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const showMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = paginationType === "pagination"
    ? products.slice(startIndex, endIndex)
    : products.slice(0, visibleCount);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      {paginationType === "showMore" && visibleCount < products.length && (
        <div className="flex justify-center mt-6">
          <AnimatedButton
            onClick={showMore}
            text="Load more"
            border={"border border-black"}
            padding="px-6"
            rounded="rounded-md"
            hoverBgColor="bg-black"
            hoverTextColor="text-white"
            className="mt-4"
  />
        </div>
      )}

      {/* Pagination */}
      {paginationType === "pagination" && (
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}