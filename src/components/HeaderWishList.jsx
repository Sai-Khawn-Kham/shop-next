"use client";

import useWishListStore from "@/store/useWishListStore";
import React from "react";

const HeaderWishList = () => {
   const { wishLists } = useWishListStore();

   return (
      <>
         {wishLists.length > 0 && (
            <span className="text-[7px] size-3 absolute -top-1 -right-1 bg-gray-800 text-gray-50 rounded-full flex justify-center items-center">
               {wishLists.length}
            </span>
         )}
      </>
   );
};

export default HeaderWishList;
