"use client"
import Breadcrumb from "@/components/Breadcrumb";
import CartCard from "@/components/CartCard";
import Container from "@/components/Container";
import useCartStore from "@/store/useCartStore";
import React, { useEffect } from "react";

const Cart = () => {
   const { carts, subTotal, calSubTotal, shipping, calShipping, tax, calTax, netTotal, calNetTotal } = useCartStore();

   useEffect(() => {
      calSubTotal()
      calShipping()
      calTax()
      calNetTotal()
   },[])
   return (
      <>
         <Container>
            <Breadcrumb current={"Cart"} />
            <div className="my-10">
               <h2 className="text-2xl font-bold uppercase">your cart</h2>
               <p className="text-gray-500 mb-5">
                  Double-check your favorites and get ready to shine!
               </p>
               <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-8 border border-gray-300 rounded px-2">
                     <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 p-2">
                        <p className="col-span-2">PRODUCT</p>
                        <p className="text-end">PRICE</p>
                        <p className="text-end">TOTAL</p>
                     </div>
                     <div>
                        <div className="hidden last:flex h-32 justify-center items-center text-gray-500 font-semibold border-t border-t-gray-300">
                           There is no product in the Cart
                        </div>
                        {carts && carts.map((cart) => (
                           <CartCard key={cart.id} cart={cart} />
                        ))}
                     </div>
                  </div>
                  <div className="col-span-4 border border-gray-300 rounded p-3 flex flex-col">
                     <div className="grow flex flex-col gap-3">
                        <h2 className="font-bold">Order Summary</h2>
                        <div className="flex justify-between items-center">
                           <p>Subtotal</p>
                           <p>{(subTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} MMK</p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p>Shipping</p>
                           <p>{shipping.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} MMK</p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p>Tax</p>
                           <p>{tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} MMK</p>
                        </div>
                     </div>
                     <div className="flex flex-col border-t border-t-gray-300">
                        <div className="flex justify-between my-2">
                           <p>Total</p>
                           <p>{netTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} MMK</p>
                        </div>
                        <button className="bg-gray-950 text-gray-50 py-1 rounded">Process to checkout</button>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
};

export default Cart;
