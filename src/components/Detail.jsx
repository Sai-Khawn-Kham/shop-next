"use client";

import DetailCard from "@/components/DetailCard";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import useProductStore from "@/store/useProductsStore";

const Detail = ({ detail }) => {
   const { products } = useProductStore();
   const product = products.find((product) => product.path == detail);
   return (
      <>
         <DetailCard product={product} />
         <YouMayAlsoLike category={product.category} />
      </>
   );
};

export default Detail;
