"use client"

import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard";
import useCategoriesStore from "@/store/useCategoriesStore";

const ShopByCategory = () => {
   const { categories } = useCategoriesStore()
   const current = categories.slice(0,4);
   return (
      <div className="my-10">
         <h2 className="uppercase font-bold text-xl">shop by category</h2>
         <p className="text-gray-500 mb-3">
            Explore our collections and find the perfect pieces for every
            moment.
         </p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-3 md:mb-5">
            {current.map((category) => (
               <CategoryCard key={category.id} category={category} />
            ))}
         </div>
         <div className="text-center">
            <p className="text-gray-500">
               Explore Our Collection – Find Exactly What You’re Looking For
            </p>
            <Link href={"/categories"} className="underline text-gray-700 hover:text-gray-700 active:text-cyan-500">
               View all categories
            </Link>
         </div>
      </div>
   );
};

export default ShopByCategory;
