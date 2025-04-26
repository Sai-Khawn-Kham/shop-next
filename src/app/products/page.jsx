import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/actions/fetchProduct";

const Products = async () => {
   const products = await fetchProducts();
   return (
      <>
         <Container>
            <Breadcrumb current={"Products"} />
            <div className="my-20">
               <h2 className="text-2xl font-bold">All Products</h2>
               <p className="mb-5">
                  Explore everything we’ve got—styles that match your vibe, your
                  mood, and your life.
               </p>
               <div className="grid grid-cols-4 gap-5">
                  {products.map((product) => (
                     <ProductCard key={product.id} product={product} detail={`/products/${product.category}`} />
                  ))}
               </div>
            </div>
         </Container>
      </>
   );
};

export default Products;
