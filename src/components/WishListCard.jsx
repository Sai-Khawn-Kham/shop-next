import React from "react";

const WishListCard = ({cart}) => {
   return (
      <>
         <div className="grid grid-cols-4">
            <div>
               <img src={cart.img} width={120} height={137} alt={cart.name} />
            </div>
            <div>
               <h3 className="font-semibold capitalize">{cart.name}</h3>
            </div>
         </div>
         <hr className="border-t-gray-300" />
      </>
   );
};

export default WishListCard;
