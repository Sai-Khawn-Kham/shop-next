import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
   return (
      <Link href={`/categories/${category.path}`} className="border border-gray-300 hover:border-gray-600 active:border-cyan-500 rounded">
         <Image
            src={category.img}
            alt={category.path}
            width={265}
            height={200}
         />
      </Link>
   );
};

export default CategoryCard;
