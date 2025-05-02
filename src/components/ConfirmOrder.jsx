"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import OrderCard from "@/components/OrderCard";
import useAccountsStore from "@/store/useAccountsStore";
import useOrdersStore from "@/store/useOrdersStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const OrderConfirmation = ({ params }) => {
   const { users } = useAccountsStore();
   const { orders } = useOrdersStore();
   const parameters = params.split("-");
   const orderId = parameters[parameters.length-1];
   const order = orders.find((el) => el.id == orderId)
   const router = useRouter();

   useEffect(() => {
      if(users.length==0){
         router.push("/")
      } else {
         if(!order) {
            router.push("/")
         }
      }
   }, [])
   
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
            <div className="flex flex-col w-2/5 min-h-[410px] border border-gray-400 rounded p-3">
               <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-bold uppercase">order id#{order.orderId}</h3>
                  <div className="bg-orange-200 text-orange-800 rounded-lg flex justify-center items-center py-0.5 px-1.5">Pending</div>
               </div>
               <p className="text-gray-500">Thank you for your purchase. We're processing your order now!</p>
               <div className="grow">
                  {order.carts.map((cart) => (
                     <OrderCard key={cart.id} cart={cart} />
                  ))}
               </div>
               <div className="grid grid-cols-2 border-b border-gray-300 py-4 text-gray-700">
                  <p>SubTotal</p>
                  <p className="text-end">{order.subTotal}</p>
                  <p>Shipping</p>
                  <p className="text-end">{order.shipping}</p>
                  <p>Tax</p>
                  <p className="text-end">{order.tax}</p>
               </div>
               <div className="flex justify-between font-semibold my-3">
                  <p>Total</p>
                  <p className="text-end">{order.netTotal}</p>
               </div>
            </div>
         </div>
         <div className="flex justify-center items-center mb-10 mt-5">
            <Link href={"/products"} className="font-semibold underline">Browse more products</Link>
         </div>
      </>
   );
};

export default OrderConfirmation;
