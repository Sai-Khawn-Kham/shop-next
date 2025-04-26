import Link from "next/link";
import React from "react";

const Breadcrumb = ({ current, links }) => {
   return (
      <div className="border-b border-gray-300 py-2">
         <Link href={"/"}>Home</Link>
         {" / "}
         {links &&
            links.map((link, index) => (
               <span key={index}>
                  <Link href={link.path} className="capitalize">{link.name}</Link>
                  {" / "}
               </span>
            ))}
         <span className="text-gray-500 capitalize">
            {current}
         </span>
      </div>
   );
};

export default Breadcrumb;
