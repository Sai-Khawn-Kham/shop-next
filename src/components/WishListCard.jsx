import useWishListStore from "@/store/useWishListStore";
import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
import Swal from "sweetalert2";
import { BsCheck, BsTrash } from "react-icons/bs";
import Image from "next/image";

const WishListCard = ({wishList}) => {
   const [sizeChoose,setSizeChoose] = useState("S")
   const [colorChoose,setColorChoose] = useState(wishList.colors[0])
   const { removeFromWishList } = useWishListStore()
   
   const handleRemove = () => {
      Swal.fire({
         icon: "question",
         title: "Remove this product from Cart?",
         text: "You won't be able to revert this!",
         confirmButtonColor: "#444",
         confirmButtonText: "Delete",
         showCancelButton: true,
         cancelButtonColor: "#888"
      }).then((result) => {
         if(result.isConfirmed){
            removeFromWishList(wishList.id)
         }
      })
   }
   return (
         <div className="grid grid-cols-4 px-2 py-4 border-t border-t-gray-300">
            <Link href={`/products/${wishList.path}`}>
               <Image
                  src={wishList.img}
                  width={112}
                  height={135}
                  alt={wishList.path}
                  className="w-28 border border-gray-300 hover:border-gray-400 active:border-cyan-500 rounded"
               />
            </Link>
            <div className="col-span-2 flex flex-col justify-between">
               <div className="flex flex-col gap-1">
                  <h3 className="font-semibold capitalize">{wishList.path.replaceAll("-"," ")}</h3>
                  <div className="flex gap-3">
                     <p className={`${wishList.price.discount&&"text-gray-500 line-through"}`}>{wishList.price.original.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</p>
                     <p>{wishList.price.discount&&wishList.price.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</p>
                  </div>
               </div>
               <div className="flex flex-col gap-1 text-gray-500">
                  <div className="flex items-center gap-1.5">
                     Size:
                     <div className="flex gap-1">
                        {wishList.sizes.map((size,index) => (
                           <span key={index} onClick={() => setSizeChoose(size)} className={`${sizeChoose==size?"bg-gray-800 text-gray-100":""} cursor-pointer size-4.5 text-xs rounded border border-gray-400 flex justify-center items-center`}>{size}</span>
                        ))}
                     </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                     Color:
                     <div className="flex gap-1">
                        {wishList.colors.map((color,index) => (
                           <div key={index} onClick={() => setColorChoose(color)} style={{backgroundColor: color}} className={`size-4.5 cursor-pointer rounded border border-gray-400`}>
                              {colorChoose == color && (
                                 <BsCheck className="text-gray-500" />
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex flex-col justify-between my-5 items-center">
               <AddToCartBtn
                  product={wishList}
                  size={sizeChoose}
                  color={colorChoose}
                  className="rounded"
               />
               <button onClick={handleRemove} className="w-full border rounded py-1 px-2 bg-gray-500 hover:bg-gray-600 active:bg-gray-800 duration-300 text-gray-100 flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer">
                  <BsTrash />Remove
               </button>
            </div>
         </div>
   );
};

export default WishListCard;
