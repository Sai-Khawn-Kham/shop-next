import React from "react";

const FaqCard = ({ faq }) => {
   return (
    <div className='border border-gray-400 rounded p-4'>
      <h3 className='font-bold mb-2'>{faq.title}</h3>
      <p className='text-gray-500'>{faq.para}</p>
  </div>
   );
};

export default FaqCard;
