"use client";
import Image from "next/image";
import React from "react";
import AddBtn from "./AddBtn";
import { useRouter } from "next/navigation";

const ProductCard = ({ product, detail }) => {
   const router = useRouter();
   const handleClick = (e) => {
      router.push(detail);
   };
   return (
      <div
         onClick={handleClick}
         className="flex flex-col gap-2 shadow hover:shadow-xl border border-gray-300 hover:border-gray-500 rounded-lg overflow-hidden cursor-pointer"
      >
         <div>
            <Image
               src={product.img}
               alt={product.path}
               width={365}
               height={320}
            />
         </div>
         <div className="flex justify-baseline gap-2 px-2">
            <h3 className="font-semibold capitalize">
               {product.path.replaceAll("-", " ")}
            </h3>
            {product.status && (
               <div className="bg-gray-950 text-gray-50 rounded text-sm px-3">
                  {product.status}
               </div>
            )}
         </div>
         <p className="px-2 flex gap-2 text-sm">
            <span className={`${product.price.discount&&"line-through"} text-gray-500`}>
               {product.price.original}
            </span>
            <span className="font-medium">{product.price.discount}</span>
         </p>
         {/* <AddBtn id={product.id} cart={product.cart} /> */}
      </div>
   );
};

export default ProductCard;
