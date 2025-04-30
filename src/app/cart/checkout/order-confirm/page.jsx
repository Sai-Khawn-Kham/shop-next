"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import OrderCard from "@/components/OrderCard";
import useCartsStore from "@/store/useCartsStore";
import Link from "next/link";
import React from "react";

const OrderConfirm = () => {
   const { carts, subTotal, shipping, tax, netTotal, calSubTotal, calShipping, calTax, calNetTotal } = useCartsStore();
   return (
      <>
         <Container>
            <Breadcrumb
               links={[
                  { name: "Cart", path: "/cart" },
                  { name: "Checkout", path: "/cart/checkout" },
               ]}
               current={"Order Confirmation"}
            />
         </Container>
         <div className="mt-10 flex justify-center items-center">
            <div className="w-2/5 min-h-120 border border-gray-400 rounded px-3">
               <div className="flex justify-between my-3">
                  <h2 className="text-2xl font-bold uppercase">order id#54545</h2>
                  <div className="py-1 px-3 bg-orange-200 text-orange-800 rounded-lg">Pending</div>
               </div>
               <p className="text-gray-500">Thank you for your purchase. We're processing your order now!</p>
               {carts.map((cart) => (
                  <OrderCard key={cart.id} cart={cart} />
               ))}
               <div className="grid grid-cols-2 border-b border-gray-300 py-4 text-gray-700">
                  <p>SubTotal</p>
                  <p className="text-end">{subTotal}</p>
                  <p>Shipping</p>
                  <p className="text-end">{shipping}</p>
                  <p>Tax</p>
                  <p className="text-end">{tax}</p>
               </div>
               <div className="flex justify-between font-semibold my-3">
                  <p>Total</p>
                  <p className="text-end">{netTotal}</p>
               </div>
            </div>
         </div>
         <div className="flex justify-center items-center mb-10 mt-5">
            <Link href={"/products"} className="font-semibold underline">Browse more products</Link>
         </div>
      </>
   );
};

export default OrderConfirm;
