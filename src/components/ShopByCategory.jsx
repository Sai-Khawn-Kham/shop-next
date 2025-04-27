import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard";

const fetchCategories = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_CATEGORY_URL);
   const json = await res.json();
   return json;
};

const ShopByCategory = async () => {
   const categories = await fetchCategories();
   const current = categories.slice(0,4);
   return (
      <div className="my-10">
         <h2 className="uppercase font-bold">shop by category</h2>
         <p className="text-gray-500 mb-3">
            Explore our collections and find the perfect pieces for every
            moment.
         </p>
         <div className="grid grid-cols-4 gap-5 mb-5">
            {current.map((category) => (
               <CategoryCard key={category.id} category={category} />
            ))}
         </div>
         <div className="text-center">
            <p className="text-gray-500">
               Explore Our Collection – Find Exactly What You’re Looking For
            </p>
            <Link href={"/categories"} className="underline">
               View all categories
            </Link>
         </div>
      </div>
   );
};

export default ShopByCategory;
