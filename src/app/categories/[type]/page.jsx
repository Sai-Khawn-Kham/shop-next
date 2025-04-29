import fetchProducts from "@/actions/fetchProducts";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import React from "react";

const Type = async ({ params }) => {
   const products = await fetchProducts();
   const current = products.filter((product) => product.category==params.type)
   
   return (
      <Container>
         <Breadcrumb
            current={params.type}
            links={[{ name: "Categories", path: "/categories" }]}
         />
         <div className="my-10">
            <h2 className="text-2xl font-bold mb-5 capitalize">
               {params.type}
            </h2>
            <div className="grid grid-cols-4 gap-5">
               {current.map((product) => (
                  <ProductCard
                     key={product.id}
                     product={product}
                     detail={`/categories/${params.type}/${product.path}`}
                  />
               ))}
            </div>
         </div>
      </Container>
   );
};

export default Type;
