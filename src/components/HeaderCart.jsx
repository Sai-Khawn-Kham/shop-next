"use client"

import React from "react";
import useCartsStore from "@/store/useCartsStore";

const HeaderCart = () => {
   const { carts } = useCartsStore();
   return (
      <>
         {carts.length > 0 && (
            <span className="text-[7px] size-3 absolute -top-1 -right-1 bg-gray-800 text-gray-50 rounded-full flex justify-center items-center">
               {carts.length}
            </span>
         )}
      </>
   );
};

export default HeaderCart;
