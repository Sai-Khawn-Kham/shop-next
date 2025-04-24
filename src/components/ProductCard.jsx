import Image from "next/image";
import React from "react";
import AddedBtn from "./AddedBtn";
import AddBtn from "./AddBtn";

const fetchCart = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_CART_URL, {
      next: {
         tags: ["carts"],
      },
   });
   const json = await res.json();
   return json;
};

const ProductCard = async ({ product }) => {
   const carts = await fetchCart();
   return (
      <div className="flex flex-col gap-2 shadow hover:shadow-xl hover:border border-gray-300 rounded-lg overflow-hidden">
         <div>
            <Image
               src={product.img}
               alt={product.name}
               width={365}
               height={320}
            />
         </div>
         <div className="flex gap-2 px-2">
            <h3 className="font-semibold">{product.name}</h3>
            {product.status && (
               <div className="bg-gray-950 text-gray-50 px-3 rounded text-sm/snug">
                  {product.status}
               </div>
            )}
         </div>
         {product.discount ? (
            <p className="flex gap-2 px-2 text-sm">
               <span className="line-through text-gray-500">
                  {product.price[0]}
               </span>
               <span className="font-medium">{product.price[1]}</span>
            </p>
         ) : (
            <p className="text-gray-500 px-2 text-sm">{product.price}</p>
         )}
         {carts.find((cart) => cart.id == product.id) ? (
            <AddedBtn id={product.id} />
         ) : (
            <AddBtn id={product.id} />
         )}
      </div>
   );
};

export default ProductCard;
