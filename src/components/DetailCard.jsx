"use client";
import addToCart from "@/actions/addToCart";
import Image from "next/image";
import React, { useActionState, useState } from "react";
import { BsCheck } from "react-icons/bs";

const DetailCard = ({ current }) => {
   const [quantity, setQuantity] = useState(0);
   const [colorChoose,setColorChoose] = useState("");
   const [colorBg,setColorBg] = useState("")
   const [state, formAction, isPending] = useActionState(addToCart)
   
   const handleDecrease = () => {
      setQuantity(quantity-1)
   }

   const handleIncrease = () => {
      setQuantity(quantity+1)
   }
   return (
      <form action={formAction} className="my-20 grid grid-cols-2 gap-16">
         <div>
            <input type="hidden" name="img" value={current.img} />
            <Image
               src={current.img}
               width={500}
               height={500}
               alt={current.path}
            />
         </div>
         <div className="flex flex-col justify-between">
            <div className="flex justify-baseline gap-2">
               <h3 className="capitalize font-bold text-2xl">
                  {current.path.replaceAll("-", " ")}
               </h3>
               <div>
                  <div className="bg-gray-950 text-gray-50 rounded w-12 h-7 flex justify-center items-center">
                     {current.status}
                  </div>
               </div>
            </div>
            <p className="flex gap-2 text-sm">
               <input type="hidden" name="price" value={current.price.discount?current.price.discount:current.price.original} />
               <span
                  className={`${
                     current.price.discount && "line-through"
                  } text-gray-500`}
               >
                  {current.price.original}
               </span>
               <span className="font-medium">{current.price.discount}</span>
            </p>
            <div className="">
               <input type="hidden" name="color" value={colorChoose} />
               <p className="mb-1">Color</p>
               <div className="flex gap-3">
                  {current.colors.map((color, index) => (
                     <div
                        key={index}
                        onClick={() => {
                           setColorChoose(color)
                           setColorBg(color)
                        }}
                        className={`size-6 rounded border border-gray-500 flex items-center justify-center`}
                        style={{ backgroundColor: color }}
                     >{colorBg==color&&(<BsCheck className="text-gray-500" />)}</div>
                  ))}
               </div>
            </div>
            <div className="">
               <p className="mb-1">Size</p>
               <select name="size" className="border border-gray-400 rounded focus:outline-none">
                  {current.sizes.map((size, index) => (
                     <option key={index} value={size}>
                        {size}
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <input type="hidden" name="quantity" value={quantity} />
               <p>Quantity</p>
               <div className="flex">
                  <div onClick={handleDecrease} className="border border-gray-400 rounded px-2">-</div>
                  <span className="w-10 text-center">{quantity}</span>
                  <div onClick={handleIncrease} className="border border-gray-400 rounded px-2">+</div>
               </div>
            </div>
            <input type="hidden" name="name" value={current.path.replaceAll("-"," ")} />
            <input type="hidden" name="category" value={current.category} />
            <p>{current.description}</p>
            <button className="bg-gray-950 text-gray-50 py-1 rounded">{isPending?"Add to Cart...":"Add to Cart"}</button>
         </div>
      </form>
   );
};

export default DetailCard;
