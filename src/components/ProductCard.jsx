"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import useWishListsStore from "@/store/useWishListsStore";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ product, detail }) => {
   const { wishLists, addToWishList } = useWishListsStore();
   const router = useRouter();

   const handleRoute = (e) => {
      router.push(detail);
   };

   const handleAddToWishList = (e) => {
      e.stopPropagation();
      if (wishLists.find((wishList) => wishList.path == product.path)) {
         toast.error("Already added");
      } else {
         addToWishList({
            id: wishLists.length + 1,
            img: product.img,
            path: product.path,
            price: product.price,
            category: product.category,
            colors: product.colors,
            sizes: product.sizes,
         });
      }
   };

   return (
      <div
         onClick={handleRoute}
         className="flex flex-col gap-2 border border-gray-300 hover:border-gray-600 active:border-cyan-500 rounded-lg overflow-hidden cursor-pointer"
      >
         <div className="relative inline-block">
            <Image
               src={product.img}
               alt={product.path}
               width={260}
               height={314}
            />
            <div
               onClick={handleAddToWishList}
               className="absolute top-1 right-1 border border-gray-400 hover:border-gray-600 active:border-cyan-500 rounded-lg text-gray-500 p-1 flex justify-center items-center"
            >
               {wishLists.find((wishList) => wishList.path == product.path) ? (
                  <BsHeartFill />
               ) : (
                  <BsHeart />
               )}
            </div>
         </div>
         <div className="px-2">
            <div className="relative inline-block">
               <h3 className={`relative font-semibold capitalize line-clamp-1`}>
                  {product.path.replaceAll("-", " ")}
               </h3>
               {product.status && (
                  <span className="text-[5px] px-0.5 py-0.5 absolute -top-1.5 -right-1 bg-red-400 text-gray-50 rounded-full">
                     {product.status}
                  </span>
               )}
            </div>
         </div>
         <p className="px-2 flex gap-2 text-sm">
            <span className={`${product.price.discount && "line-through"} text-gray-500`}>
               {product.price.original.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            <span className="font-medium">
               {product.price.discount && product.price.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
         </p>
         <AddToCartBtn
            product={product}
            color={product.colors[0]}
         />
      </div>
   );
};

export default ProductCard;
