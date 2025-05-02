"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import WishListCard from "@/components/WishListCard";
import useWishListsStore from "@/store/useWishListsStore";
import React from "react";

const WishlistPage = () => {
   const { wishLists } = useWishListsStore();
   return (
      <Container>
         <Breadcrumb current={"Wishlist"} />
         <div className="my-10">
            <h2 className="text-2xl font-bold uppercase">your wishlist</h2>
            <p className="text-gray-500 mb-5">
               Your saved favorites are here, waiting for their moment.
            </p>
            <div className="grid md:grid-cols-12 gap-5">
               <div className="md:col-span-8 border border-gray-300 rounded px-2">
                  <p className="text-sm font-semibold text-gray-500 p-2">PRODUCT</p>
                  <div>
                     <div className="hidden last:flex h-32 justify-center items-center text-gray-500 font-semibold border-t border-t-gray-300">
                        There is no product in the Wishlist
                     </div>
                     {wishLists && wishLists.map((wishList) => (
                        <WishListCard key={wishList.id} wishList={wishList} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default WishlistPage;
