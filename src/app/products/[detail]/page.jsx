import { fetchProducts } from "@/actions/fetchProduct";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import DetailCard from "@/components/DetailCard";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import React from "react";

const Details = async ({ params }) => {
   const products = await fetchProducts();
   const product = products.find((product) => product.path == params.detail);

   return (
      <>
         <Container>
            <Breadcrumb
               current={product.path.replaceAll("-", " ")}
               links={[{ name: "Products", path: "/products" }]}
            />
            <DetailCard product={product} />
            <YouMayAlsoLike category={params.type} />
         </Container>
      </>
   );
};

export default Details;
