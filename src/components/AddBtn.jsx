"use client";
import addToCart from "@/actions/addToCart";
import React, { useActionState } from "react";
import { BsBag, BsBagCheck } from "react-icons/bs";

const AddBtn = ({ id, cart }) => {
   const [state, formAction, isPending] = useActionState(addToCart);

   const handleClick = (e) => {
      e.stopPropagation();
   };

   return (
      <form action={formAction}>
         <input type="hidden" name="id" value={id} />
         <input type="hidden" name="cart" value={cart} />
         <button
            onClick={handleClick}
            disabled={isPending}
            className="w-full border py-1 px-2 bg-gray-950 text-gray-200 flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer"
         >
            {isPending?(
               <>
                  {cart?(
                     <>
                        <BsBagCheck />
                        Added...
                     </>
                  ):(
                     <>
                        <BsBag />
                        Add to Cart...
                     </>
                  )}
               </>
            ):(
               <>
                  {cart?(
                     <>
                        <BsBagCheck />
                        Added
                     </>
                  ):(
                     <>
                        <BsBag />
                        Add to Cart
                     </>
                  )}
               </>
            )}
         </button>
      </form>
   );
};

export default AddBtn;
