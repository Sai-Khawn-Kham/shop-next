"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import useProductStore from "@/store/useProductsStore";
import React from "react";

const Type = ({type}) => {
   const { products } = useProductStore();
   const current = products.filter((product) => product.category==type)
   return (
      <Container>
         <Breadcrumb current={type} links={[{ name: "Categories", path: "/categories" }]} />
         <div className="my-10">
            <h2 className="text-2xl font-bold mb-5 capitalize">{type}</h2>
            <div className="grid grid-cols-4 gap-5">
               {current.map((product) => (
                  <ProductCard
                     key={product.id}
                     product={product}
                     detail={`/categories/${type}/${product.path}`}
                  />
               ))}
            </div>
         </div>
      </Container>
   );
};

export default Type;
