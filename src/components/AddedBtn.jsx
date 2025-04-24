"use client"
import addedToCart from "@/actions/addedToCart";
import React, { useActionState } from "react";
import { BsBagCheck } from "react-icons/bs";

const AddedBtn = ({ id }) => {
   const [state, formAction, isPending] = useActionState(addedToCart);
   return (
      <form action={formAction}>
         <input type="hidden" name="id" value={id} />
         <button
            disabled={isPending}
            className="w-full border py-1 px-2 rounded-lg bg-gray-950 text-gray-200 flex items-center justify-center gap-2 disabled:opacity-80"
         >
            {isPending ? (<><BsBagCheck />Added...</>) : (<><BsBagCheck />Added</>)}
         </button>
      </form>
   );
};

export default AddedBtn;
