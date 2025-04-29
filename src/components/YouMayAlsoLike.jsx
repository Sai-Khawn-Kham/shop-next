import React from "react";
import ProductCard from "./ProductCard";
import useProductStore from "@/store/useProductsStore";

const YouMayAlsoLike = ({category}) => {
   const {products} = useProductStore();
   const current = products.filter((product) => product.category==category).slice(0,4)
   return (
      <div className="my-10">
         <h1 className=" uppercase font-bold">you may also like</h1>
         <p className="mb-3">More styles picked just for you--explore and find your next favorite!</p>
         <div className="grid grid-cols-4 gap-5 overflow-auto hsb">
            {current.map((product) => (
               <ProductCard key={product.id} product={product} detail={`/categories/${product.category}/${product.path}`} />
            ))}
         </div>
      </div>
   );
};

export default YouMayAlsoLike;
