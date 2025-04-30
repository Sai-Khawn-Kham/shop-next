"use client"

import useCartsStore from "@/store/useCartsStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const OrderCard = ({ cart }) => {
   const { calSubTotal } = useCartsStore();

   useEffect(() => {
     calSubTotal()
   }, [])
   
   return (
      <div className="grid grid-cols-4 py-4 border-b border-gray-300">
         <div className="">
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
         <div className="flex flex-col gap-3">
            <h3 className="font-bold capitalize">{cart.path.replaceAll("-"," ")}</h3>

            <div className="text-gray-500 flex gap-2">
               <div className="flex items-center gap-1">
                  Size:
                  <span>{cart.size}</span>
               </div>
               <div className="flex items-center gap-1">
                  Color:
                  <div style={{backgroundColor: cart.color}} className={`size-3.5 rounded border border-gray-300`}></div>
               </div>
            </div>
            <div className="flex gap-1 text-gray-500">
               Qty:
               <span>{cart.quantity}</span>
            </div>
         </div>

         <div className="">
         </div>

         <div>
            <p className="text-end font-medium">
               {cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
            </p>
         </div>
      </div>
   );
};

export default OrderCard;
