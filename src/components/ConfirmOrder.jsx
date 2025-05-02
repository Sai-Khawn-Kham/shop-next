"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import OrderCard from "@/components/OrderCard";
import useOrdersStore from "@/store/useOrdersStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const OrderConfirmation = ({ params }) => {
   const { orders } = useOrdersStore();
   const parameters = params.split("-");
   const orderId = parameters[parameters.length-1];
   const order = orders.find((el) => el.id == orderId)
   const router = useRouter();

   useEffect(() => {
      if(!order) {
         router.push("/")
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
            <div className="flex flex-col w-2/5 min-h-[410px] border border-gray-400 rounded">
               <h2 className="text-center text-2xl font-semibold mt-3 mb-1">TRENDDLOW</h2>
               <p className="text-center text-gray-50 bg-gray-500 py-1">123 Main St, Apt 4B, San Francisco, CA 94107, USA</p>
               <div className="px-3">
                  <div className="flex justify-between items-center my-1">
                     <h3 className="text-xl font-medium uppercase">order id#{order.orderId}</h3>
                     <div className="bg-orange-200 text-orange-800 text-sm rounded-lg flex justify-center items-center py-0.5 px-1.5">Pending</div>
                  </div>
                  <div className="">
                     <p>Customer Name: {order.customer.name}</p>
                     <p>Customer Email: {order.customer.email}</p>
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
         </div>
         <div className="flex justify-center items-center mb-10 mt-5">
            <Link href={"/products"} className="font-semibold underline">Browse more products</Link>
         </div>
      </>
   );
};

export default OrderConfirmation;
