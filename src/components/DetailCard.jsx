"use client";
import useCartStore from "@/store/useCartStore";
import Image from "next/image";
import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

const DetailCard = ({ current }) => {
   const [quantity, setQuantity] = useState(0);
   const [colorChoose, setColorChoose] = useState("");
   const [colorBg, setColorBg] = useState("");
   // const [state, formAction, isPending] = useActionState(addToCart);
   const { carts, addToCart } = useCartStore();
   const [ selected, setSelected ] = useState("")

   const handleDecrease = () => {
      if(quantity > 1){
         setQuantity(quantity - 1);
      }
   };

   const handleIncrease = () => {
      setQuantity(quantity + 1);
   };

   const handleSelect = (e) => {
      setSelected(e.target.value)
   }

   const handleAddToCart = () => {
      addToCart({
         id: carts.length+1,
         name: current.path,
         quantity: quantity,
         size: selected,
         category: current.category,
         color: colorChoose,
         price: current.price,
         img: current.img,
         total: (current.price.discount?current.price.discount.replace(/[^\d]/g,""):current.price.original.replace(/[^\d]/g,""))*quantity
      })
   }
   return (
      <div
         // action={formAction}
         className="my-10 grid grid-cols-2 gap-16"
      >
         <div>
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
               {current.status && (
                  <div>
                     <div className="bg-gray-950 text-gray-50 rounded w-12 h-7 flex justify-center items-center">
                        {current.status}
                     </div>
                  </div>
               )}
            </div>
            <p className="flex gap-2 text-sm">
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
               <p className="mb-1">Color</p>
               <div className="flex gap-3">
                  {current.colors.map((color, index) => (
                     <div
                        key={index}
                        onClick={() => {
                           setColorChoose(color);
                           setColorBg(color);
                        }}
                        className={`size-6 rounded border border-gray-500 flex items-center justify-center`}
                        style={{ backgroundColor: color }}
                     >
                        {colorBg == color && (
                           <BsCheck className="text-gray-500" />
                        )}
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
                  className="border border-gray-400 rounded focus:outline-none"
               >
                  {current.sizes.map((size, index) => (
                     <option key={index} value={size}>
                        {size}
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <p>Quantity</p>
               <div className="flex">
                  <div
                     onClick={handleDecrease}
                     className="border border-gray-400 rounded px-2 cursor-pointer"
                  >
                     -
                  </div>
                  <span className="w-10 text-center">{quantity}</span>
                  <div
                     onClick={handleIncrease}
                     className="border border-gray-400 rounded px-2 cursor-pointer"
                  >
                     +
                  </div>
               </div>
            </div>
            {/* <input type="hidden" name="name" value={current.path.replaceAll("-", " ")} />
            <input type="hidden" name="quantity" value={quantity} />
            <input type="hidden" name="category" value={current.category} />
            <input type="hidden" name="color" value={colorChoose} />
            <input type="hidden" name="price" value={current.price.discount ? current.price.discount : current.price.original} />
            <input type="hidden" name="img" value={current.img} /> */}
            <p>{current.description}</p>
            <button onClick={handleAddToCart} className="bg-gray-950 text-gray-50 py-1 rounded">
               Add to Cart
            </button>
         </div>
      </div>
   );
};

export default DetailCard;
