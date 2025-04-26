import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
   return (
      <Link href={`/categories/${category.path}`}>
         <Image
            src={category.image}
            alt={category.path}
            width={265}
            height={200}
         />
      </Link>
   );
};

export default CategoryCard;
