"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import useCartsStore from "@/store/useCartsStore";
import usePaymentsStore from "@/store/usePaymentsStore";
import React from "react";

const Checkout = () => {
   const { carts, subTotal, shipping, tax, netTotal } = useCartsStore();
   const { payments } = usePaymentsStore();

   return (
      <>
         <Container>
            <Breadcrumb
               links={[{ name: "Cart", path: "/cart" }]}
               current={"Checkout"}
            />
            <div className="my-10">
               <h2 className="text-2xl font-bold uppercase">checkout</h2>
               <p className="text-gray-500 mb-5">
                  Almost there! complete your order.
               </p>
               <div className="grid grid-cols-12 gap-5">
                  <form id="info" action={""} method="GET" className="col-span-8 border border-gray-300 rounded px-5">
                     
                     <div className="border-b border-gray-300 py-5 flex flex-col gap-2">
                        <label htmlFor="address" className="font-bold text-base/1">Shipping address</label>
                        <input type="text" name="address" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder="address" required />
                     </div>

                     <div className="border-b border-gray-300 py-5">
                        <h3 className="font-bold text-base/1 mb-3">Personal information</h3>
                        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                           <div className="flex flex-col gap-1">
                              <label htmlFor="name">Name</label>
                              <input type="text" name="name" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder="Kyaw Kyaw" required />
                           </div>
                           <div className="flex flex-col gap-1">
                              <label htmlFor="email">Email</label>
                              <input type="text" name="email" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder="example@gmail.com" required />
                           </div>
                           <div className="col-span-2 flex flex-col gap-1">
                              <label htmlFor="phone">Phone Number</label>
                              <input type="text" name="phone" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder="+95 9 678 123456" required />
                           </div>
                        </div>
                     </div>

                     <div className="border-b border-gray-300 py-5">
                        <h3 className="font-bold text-base/1 mb-4">Payment Method</h3>
                        <div className="flex flex-wrap gap-y-2 gap-x-3">
                           {payments.map((payment,index) => (
                              <label key={index} htmlFor={payment.id} className="border border-gray-300 flex items-center gap-1 py-1 px-2 rounded-md">
                                 <input type="radio" id={payment.id} name={payment.name} value={payment.id} required />
                                 {payment.label}
                              </label>
                           ))}
                        </div>
                     </div>

                     <div className="py-5">
                        <h3 className="font-bold text-base/1 mb-3">Additional Details</h3>
                        <textarea name="additional-details" className="w-full h-30 resize-none border border-gray-300 rounded p-3 focus:outline-none" required></textarea>
                     </div>
                  </form>
                  <div className="col-span-4">
                     <div className="border border-gray-300 rounded p-3 flex flex-col">
                        <div className="flex flex-col gap-3 h-52 overflow-auto hsb">
                           <h2 className="font-bold">Order Summary</h2>
                           <div className="flex justify-between items-center">
                              <p>Subtotal</p>
                              <p>{subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                           </div>
                           <div className="flex justify-between items-center">
                              <p>Shipping</p>
                              <p>{shipping.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                           </div>
                           <div className="flex justify-between items-center">
                              <p>Tax</p>
                              <p>{tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                           </div>
                        </div>
                        <div className="flex flex-col border-t border-t-gray-300">
                           <div className="flex justify-between my-2">
                              <p>Total</p>
                              <p>{netTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                           </div>
                           <button form="info" className="bg-gray-950 text-gray-50 py-1 rounded">
                              Place Order
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
};

export default Checkout;
