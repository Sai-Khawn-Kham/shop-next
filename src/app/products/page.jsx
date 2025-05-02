"use client"

import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import useProductStore from "@/store/useProductsStore";

const ProductsPage = () => {
   const {products} = useProductStore();
   return (
      <Container>
         <Breadcrumb current={"Products"} />
         <div className="my-10">
            <h2 className="text-2xl font-bold">All Products</h2>
            <p className="text-gray-500 mb-5">
               Explore everything we’ve got—styles that match your vibe, your mood, and your life.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} detail={`/categories/${product.category}/${product.path}`} />
               ))}
            </div>
         </div>
      </Container>
   );
};

export default ProductsPage;
