"use client"
import addedToCart from "@/actions/addedToCart";
import React, { useActionState } from "react";

const AddedBtn = ({ id }) => {
   const [state, formAction, isPending] = useActionState(addedToCart);
   return (
      <form action={formAction}>
         <input type="hidden" name="id" value={id} />
         <button
            disabled={isPending}
            className="w-full border py-1 px-2 rounded-lg bg-gray-950 text-gray-50 flex items-center justify-center gap-2"
         >
            {isPending ? "Added..." : "Added"}
         </button>
      </form>
   );
};

export default AddedBtn;
