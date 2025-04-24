"use client";
import addToCart from "@/actions/addToCart";
import React, { useActionState } from "react";

const AddBtn = ({ id }) => {
   const [state, formAction, isPending] = useActionState(addToCart);
   return (
      <form action={formAction}>
         <input type="hidden" name="id" value={id} />
         <button
            disabled={isPending}
            className="w-full border py-1 px-2 rounded-lg disabled:opacity-80"
         >
            {isPending ? "Add to cart..." : "Add to cart"}
         </button>
      </form>
   );
};

export default AddBtn;
