import useCartStore from "@/store/useCartStore";
import React from "react";

const CartCard = ({ cart }) => {
   const { quantityIncrease, quantityDecrease, removeFromCart, calSubTotal, calShipping, calTax, calNetTotal } = useCartStore();

   const handleDecrease = () => {
      quantityDecrease(cart.id)
      calSubTotal()
      calShipping()
      calTax()
      calNetTotal()
   }
   const handleIncrease = () => {
      quantityIncrease(cart.id)
      calSubTotal()
      calShipping()
      calTax()
      calNetTotal()
   }
   const handleRemove = () => removeFromCart(cart.id)
   return (
      <div className="grid grid-cols-4 px-2 py-4 border-t border-t-gray-300">
         <div>
            <img src={cart.img} alt={cart.name} className="w-28" />
         </div>
         <div className="flex flex-col justify-between">
            <h3 className="font-semibold capitalize">{cart.name.replaceAll("-"," ")}</h3>
            <div className="text-gray-500 flex gap-3">
               <p>Size: {cart.size}</p>
               <div className="flex items-center gap-1">
                  Color: <div className={`size-4 bg-${cart.color}-500 rounded border border-gray-300`}></div>
               </div>
            </div>
            <div className="flex gap-0.5">
               <button onClick={handleDecrease} className="bg-gray-300 size-5 border border-gray-300 rounded flex justify-center items-center">-</button>
               <span className="bg-gray-300 h-5 w-7 border border-gray-300 rounded flex justify-center items-center">{cart.quantity}</span>
               <button onClick={handleIncrease} className="bg-gray-300 size-5 border border-gray-300 rounded flex justify-center items-center">+</button>
            </div>
            <div onClick={handleRemove} className="text-gray-500 hover:underline">remove</div>
         </div>
         <div className="text-end">
            <p className={`${cart.price.discount&&"text-gray-500 line-through"}`}>{cart.price.original}</p>
            <p>{cart.price.discount}</p>
         </div>
         <div>
            <p className="text-end">
               {cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} MMK
            </p>
         </div>
      </div>
   );
};

export default CartCard;
