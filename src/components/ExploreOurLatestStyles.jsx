"use client"

import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import useProductStore from "@/store/useProductsStore";

const ExploreOurLatestStyles = () => {
   const {products} = useProductStore();
   const current = products.slice(0,4);
   return (
      <div className="my-10">
         <h2 className="uppercase font-bold text-xl">explore our latest styles</h2>
         <p className="text-gray-500 mb-3">
            Find clothes that match your vibe and make every day better.
         </p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-3 md:mb-5">
            {current.map((product) => (
               <ProductCard key={product.id} product={product} detail={`/categories/${product.category}/${product.path}`} />
            ))}
         </div>
         <div className="text-center">
            <p className="text-gray-500">
               Discover all our styles and find the look that’s made for you!
            </p>
            <Link href={"/products"} className="underline text-gray-700 hover:text-gray-700 active:text-cyan-500">
               View all products
            </Link>
         </div>
      </div>
   );
};

export default ExploreOurLatestStyles;
