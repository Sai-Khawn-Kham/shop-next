"use client"

import useCartsStore from "@/store/useCartsStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const CartCard = ({ cart }) => {
   const { quantityIncrease, quantityDecrease, removeCart, calSubTotal, calShipping, calTax, calNetTotal } = useCartsStore();

   const handleDecrease = () => {
      if(cart.quantity>1){
         quantityDecrease(cart.id)
         calSubTotal()
         calShipping()
         calTax()
         calNetTotal()
      } else {
         Swal.fire({
            title: "Remove product from Cart?",
            text: "Are you sure to remove!",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#444",
            cancelButtonColor: "#888"
         }).then((result) => {
            if(result.isConfirmed){
               removeCart(cart.id)
               calSubTotal()
               calShipping()
               calTax()
               calNetTotal()
            }
         })
      }
   }

   const handleIncrease = () => {
      quantityIncrease(cart.id)
      calSubTotal()
      calShipping()
      calTax()
      calNetTotal()
   }
   
   const handleRemove = () => {
      Swal.fire({
         title: "Remove product from Cart?",
         text: "Are you sure to remove!",
         icon: "question",
         showCancelButton: true,
         confirmButtonText: "Delete",
         confirmButtonColor: "#444",
         cancelButtonColor: "#888"
      }).then((result) => {
         if(result.isConfirmed){
            removeCart(cart.id)
            calSubTotal()
            calShipping()
            calTax()
            calNetTotal()
         }
      })
   }
   return (
      <div className="grid grid-cols-4 gap-1 md:px-2 py-2 border-t border-t-gray-300">
         <div className="flex justify-center items-center">
            <Link href={`/products/${cart.path}`} className="inline-block">
               <Image
                  src={cart.img}
                  width={112}
                  height={135}
                  alt={cart.path}
                  className="w-28 border border-gray-300 hover:border-gray-400 active:border-cyan-500 rounded"
               />
            </Link>
         </div>
         <div className="flex flex-col justify-between">
            <h3 className="font-semibold capitalize">{cart.path.replaceAll("-"," ")}</h3>
            <p>Size: <span className="text-sm">{cart.size}</span></p>
            <div className="flex items-center gap-1">
               Color: <div style={{backgroundColor: cart.color}} className={`size-4 rounded border border-gray-300`}></div>
            </div>
            <div className="flex gap-0.5">
               <button onClick={handleDecrease} className="bg-gray-300 size-5 border border-gray-300 rounded flex justify-center items-center cursor-pointer">-</button>
               <span className="bg-gray-300 h-5 w-7 border border-gray-300 rounded flex justify-center items-center">{cart.quantity}</span>
               <button onClick={handleIncrease} className="bg-gray-300 size-5 border border-gray-300 rounded flex justify-center items-center cursor-pointer">+</button>
            </div>
            <div>
               <button onClick={handleRemove} className="text-gray-500 hover:underline hover:text-red-800 cursor-pointer">remove</button>
            </div>
         </div>
         <div className="text-end">
            <p className={`${cart.price.discount&&"text-gray-500 line-through"}`}>{cart.price.original.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</p>
            <p>{cart.price.discount&&cart.price.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</p>
         </div>
         <div>
            <p className="text-end">
               {cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
            </p>
         </div>
      </div>
   );
};

export default CartCard;
