"use client";
import useCartStore from "@/store/useCartStore";
import useWishListStore from "@/store/useWishListStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsHeart } from "react-icons/bs";

const ProductCard = ({ product, detail }) => {
   // const [state, formAction, isPending] = useActionState(addToCart);
   const router = useRouter();
   const { carts, addToCart } = useCartStore();
   const { wishLists, addToWishList } = useWishListStore();

   const handleRoute = (e) => {
      router.push(detail);
   };

   const handleAddToCart = (e) => {
      e.stopPropagation();
      addToCart({
         id: carts.length+1,
         name: product.path,
         quantity: 1,
         size: "S",
         category: product.category,
         color: product.colors[0],
         price: product.price,
         img: product.img,
         total: (product.price.discount?product.price.discount.replace(/[^\d]/g,""):product.price.original.replace(/[^\d]/g,""))
      })
   }

   const handleAddToWishList = (e) => {
      e.stopPropagation()
      addToWishList({
         id: wishLists.length+1,
         name: product.path,
         size: "S",
         category: product.category,
         color: product.colors[0],
         price: product.price,
         img: product.img
      })
   }
   return (
      <div
         // action={formAction}
         onClick={handleRoute}
         className="flex flex-col gap-2 shadow hover:shadow-xl border border-gray-300 hover:border-gray-400 rounded-lg overflow-hidden cursor-pointer"
      >
         <div className="relative inline-block">
            <Image
               src={product.img}
               alt={product.path}
               width={365}
               height={320}
            />
            <div onClick={handleAddToWishList} className="absolute -top-0 -right-0 border border-gray-500 rounded-lg text-gray-500 p-1 flex justify-center items-center">
               <BsHeart />
            </div>
         </div>
         <div className="px-2">
            <div className="relative inline-block">
               <h3 className={`inline-block relative font-semibold capitalize`}>
                  {product.path.replaceAll("-", " ")}
               </h3>
               {product.status && (
                  <span className="text-[5px] px-0.5 py-0.5 absolute -top-1 -right-2.5 bg-red-400 text-gray-50 rounded-full">
                     {product.status}
                  </span>
               )}
            </div>
         </div>
         <p className="px-2 flex gap-2 text-sm">
            <span
               className={`${
                  product.price.discount && "line-through"
               } text-gray-500`}
            >
               {product.price.original}
            </span>
            <span className="font-medium">{product.price.discount}</span>
         </p>
         {/* <input type="hidden" name="name" value={product.path.replaceAll("-"," ")} />
         <input type="hidden" name="quantity" value={1} />
         <input type="hidden" name="size" value={"S"} />
         <input type="hidden" name="category" value={product.category} />
         <input type="hidden" name="color" value={product.colors[0]} />
         <input type="hidden" name="price" value={product.price.discount?product.price.discount:product.price.original} />
         <input type="hidden" name="img" value={product.img} /> */}
         <button
            onClick={handleAddToCart}
            className="w-full border py-1 px-2 bg-gray-950 text-gray-200 flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer"
         >
            Add to Cart
         </button>
      </div>
   );
};

export default ProductCard;
