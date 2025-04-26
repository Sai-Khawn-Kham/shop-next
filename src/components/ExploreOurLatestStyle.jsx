import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/actions/fetchProduct";

const ExploreOurLatestStyle = async () => {
   const products = await fetchProducts();
   const current = products.slice(0,4);
   return (
      <div className="my-20">
         <h2 className=" uppercase font-bold">explore our latest styles</h2>
         <p className="text-gray-500 mb-3">
            Find clothes that match your vibe and make every day better.
         </p>
         <div className="grid grid-cols-4 gap-5 mb-5">
            {current.map((product) => (
               <ProductCard key={product.id} product={product} detail={`/products/${product.path}`} />
            ))}
         </div>
         <div className="text-center">
            <p className="text-gray-500">
               Discover all our styles and find the look that’s made for you!
            </p>
            <Link href={"/products"} className="underline">
               View all products
            </Link>
         </div>
      </div>
   );
};

export default ExploreOurLatestStyle;
