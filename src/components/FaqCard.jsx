import useFaqStore from "@/store/useFaqStore";
import React from "react";

const FaqCard = ({ faq }) => {
   const { openFaq } = useFaqStore();

   const handleOpen = () => {
      openFaq(faq.id);
   };

   return (
      <div className="border-t last:border-b border-r border-l border-gray-400 first:rounded-t last:rounded-b py-1.5 px-3">
         <h3 onClick={handleOpen} className="font-semibold cursor-pointer">{faq.title}</h3>
         <p className={`${faq.open ? "block" : "hidden"} text-gray-500 px-1`}>{faq.para}</p>
      </div>
   );
};

export default FaqCard;
