"use client";
import addToCart from "@/actions/addToCart";
import React, { useActionState } from "react";
import { BsBag } from "react-icons/bs";

const AddBtn = ({ id }) => {
   const [state, formAction, isPending] = useActionState(addToCart);
   return (
      <form action={formAction}>
         <input type="hidden" name="id" value={id} />
         <button
            disabled={isPending}
            className="w-full border py-1 px-2 rounded-lg bg-gray-950 text-gray-200 flex items-center justify-center gap-2 disabled:opacity-80"
         >
            {isPending ? (<><BsBag />Add to cart...</>) : <><BsBag />Add to cart</>}
         </button>
      </form>
   );
};

export default AddBtn;
