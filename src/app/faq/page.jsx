"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import FaqCard from "@/components/FaqCard";
import useFaqsStore from "@/store/useFaqsStore";
import React from "react";

const FaqPage = () => {
   const {faqs} = useFaqsStore();
   return (
      <Container>
         <Breadcrumb current={"FAQ"} />
         <div className="my-10 grid grid-cols-2">
            <div>
               <h1 className="text-3xl font-bold uppercase">FAQ</h1>
               <p className="text-gray-500">
                  Got questions? We’ve got answers. Here’s everything you need to know about shopping with us.
               </p>
            </div>
         </div>
         <div className="my-10 grid grid-cols-2 gap-5">
            {faqs.map((faq) => <FaqCard key={faq.id} faq={faq} />)}
         </div>
      </Container>
   );
};

export default FaqPage;
