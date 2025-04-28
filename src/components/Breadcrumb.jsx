import Link from "next/link";
import React from "react";

const Breadcrumb = ({ current, links }) => {
   return (
      <div className="border-b border-gray-300 py-2">
         <Link className="hover:underline active:text-cyan-500" href={"/"}>Home</Link>
         {" / "}
         {links && links.map((link, index) => (
            <Link key={index} href={link.path} className="capitalize hover:underline active:text-cyan-500">{link.name}</Link>
         ))}
         {links && " / "}
         <span className="text-gray-500 capitalize">{current}</span>
      </div>
   );
};

export default Breadcrumb;
