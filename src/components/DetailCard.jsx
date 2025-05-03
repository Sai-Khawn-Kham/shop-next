"use client";

import useWishListsStore from "@/store/useWishListsStore";
import Image from "next/image";
import React, { useState } from "react";
import { BsCheck, BsHeart, BsHeartFill } from "react-icons/bs";
import AddToCartBtn from "./AddToCartBtn";
import toast from "react-hot-toast";

const DetailCard = ({ product }) => {
   const [ quantity, setQuantity ] = useState(1);
   const [ colorChoose, setColorChoose ] = useState(product.colors[0]);
   const [ selected, setSelected ] = useState("S");
   const { wishLists, addToWishList } = useWishListsStore();

   const handleDecrease = () => {
      if(quantity > 1){
         setQuantity(quantity - 1);
      } else {
         toast.error("Can't decrease")
      }
   };

   const handleIncrease = () => {
      setQuantity(quantity + 1);
   };

   const handleSelect = (e) => {
      setSelected(e.target.value)
   }

   const handleAddToWishList = () => {
      if(wishLists.find((wishList) => wishList.path == product.path)){
         toast.error("Already added")
      } else {
         addToWishList({
            id: wishLists.length+1,
            img: product.img,
            path: product.path,
            price: product.price,
            category: product.category,
            colors: product.colors,
            sizes: product.sizes,
         })
      }
   }
   return (
      <div className="my-10 grid md:grid-cols-2 gap-5 md:gap-10">
         <div className="flex justify-center items-center">
            <Image src={product.img} width={395} height={477} alt={product.path} />
         </div>
         <div className="flex flex-col justify-between gap-2">
            <div className="flex justify-baseline gap-2">
               <h3 className="capitalize font-bold text-2xl">{product.path.replaceAll("-", " ")}</h3>
               {product.status && (
                  <div className="bg-gray-950 text-gray-50 rounded w-12 h-7 flex justify-center items-center">
                     {product.status}
                  </div>
               )}
            </div>
            <p className="flex gap-2 text-sm">
               <span className={`${product.price.discount && "line-through"} text-gray-500`}>
                  {product.price.original.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
               </span>
               <span className="font-medium">
                  {product.price.discount && product.price.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
               </span>
            </p>
            <div className="">
               <p className="mb-1">Color</p>
               <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                     <div
                        key={index}
                        onClick={() => {
                           setColorChoose(color);
                        }}
                        style={{ backgroundColor: color }}
                        className={`size-6 rounded border border-gray-500 flex items-center justify-center cursor-pointer`}
                     >
                        {colorChoose == color && (<BsCheck className="text-gray-500" />)}
                     </div>
                  ))}
               </div>
            </div>
            <div className="">
               <p className="mb-1">Size</p>
               <select
                  name="size"
                  value={selected}
                  onChange={handleSelect}
                  className="border border-gray-400 rounded focus:outline-none cursor-pointer"
               >
                  {product.sizes.map((size, index) => (
                     <option key={index} value={size}>{size}</option>
                  ))}
               </select>
            </div>
            <div>
               <p>Quantity</p>
               <div className="flex">
                  <div onClick={handleDecrease} className="border border-gray-400 rounded px-2 cursor-pointer">-</div>
                  <span className="w-10 text-center">{quantity}</span>
                  <div onClick={handleIncrease} className="border border-gray-400 rounded px-2 cursor-pointer">+</div>
               </div>
            </div>
            <p className="text-gray-500">{product.description}</p>
            <div>
               <span onClick={handleAddToWishList} className="cursor-pointer">
                  {wishLists.find((wishList) => wishList.path == product.path) ? (
                     <>
                        <BsHeartFill className="inline-block" /> Added to wishlist
                     </>
                  ):(
                     <>
                        <BsHeart className="inline-block" /> Add to wishlist
                     </>
                  )}
               </span>
            </div>
            <AddToCartBtn
               product={product}
               size={selected}
               color={colorChoose}
               quantity={quantity}
               className="rounded"
            />
         </div>
      </div>
   );
};

export default DetailCard;
