import React from "react";

const OrderDate = ({ date }) => {
   const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
   }).format(date);
   return (
      <td className="py-1 text-base/tight flex flex-col justify-center items-center">
         <span>{formattedDate.split(",")[0]}</span>
         <span>{formattedDate.split(",")[1]}</span>
      </td>
   );
};

export default OrderDate;
