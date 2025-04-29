import useFaqsStore from "@/store/useFaqsStore";
import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const FaqCard = ({ faq }) => {
   const { openFaq } = useFaqsStore();

   const handleOpen = () => {
      openFaq(faq.id);
   };

   return (
      <div className="relative border-t last:border-b border-r border-l border-gray-400 first:rounded-t last:rounded-b py-1.5 px-3">
         <h3 onClick={handleOpen} className="font- cursor-pointer">{faq.title}</h3>
            <div
               onClick={handleOpen}
               className="absolute top-2.5 right-3 cursor-pointer"
            >
               {faq.open ? (<BsChevronUp />) : (<BsChevronDown />)}
            </div>
         <p className={`${faq.open ? "block" : "hidden"} text-gray-500 px-1`}>{faq.para}</p>
      </div>
   );
};

export default FaqCard;
