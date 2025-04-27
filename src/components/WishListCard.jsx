import useWishListStore from "@/store/useWishListStore";
import React from "react";

const WishListCard = ({wishList}) => {
   const { removeFromWishList } = useWishListStore()
   const handleRemove = () => {
      removeFromWishList(wishList.id)
   }
   return (
         <div className="grid grid-cols-4 px-2 py-4 border-t border-t-gray-300">
            <div>
               <img src={wishList.img} alt={wishList.name} className="w-28" />
            </div>
            <div className="col-span-2 flex flex-col justify-between">
               <h3 className="font-semibold capitalize">{wishList.name.replaceAll("-"," ")}</h3>
               <div className="flex gap-3">
                  <p className={`${wishList.price.discount&&"text-gray-500 line-through"}`}>{wishList.price.original}</p>
                  <p>{wishList.price.discount}</p>
               </div>
               <div className="flex gap-3 text-gray-500">
                  <p className="">Size: {wishList.size}</p>
                  <div className="flex items-center gap-1">
                     Color: <div style={{backgroundColor: wishList.color}} className={`size-4 rounded border border-gray-400`}></div>
                  </div>
               </div>
               <div onClick={handleRemove} className="text-gray-500 underline">Remove</div>
            </div>
            <div className="flex justify-center items-center">
               <button className="bg-gray-950 text-gray-50 py-1 px-3 rounded">Add to Cart</button>
            </div>
         </div>
   );
};

export default WishListCard;
