import { fetchProducts } from "@/actions/fetchProduct";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const Details = async ({ params }) => {
   const products = await fetchProducts();
   const current = products.filter((product) => product.path == params.slug)[0];
   return (
      <>
         <Container>
            <Breadcrumb
               current={current.path.replaceAll("-", " ")}
               links={[
                  { name: "Categories", path: "/categories" },
                  {
                     name: current.category,
                     path: `/categories/${current.category}`,
                  },
               ]}
            />
            <div className="my-20 grid grid-cols-2 gap-16">
               <div>
                  <Image
                     src={current.img}
                     width={500}
                     height={500}
                     alt={current.path}
                  />
               </div>
               <div>
                  <div className="flex justify-baseline gap-2">
                     <h3 className="capitalize font-bold text-2xl">
                        {current.path.replaceAll("-", " ")}
                     </h3>
                     <div>
                        <div className="bg-gray-950 text-gray-50 rounded w-12 flex justify-center items-center">
                           {current.status}
                        </div>
                     </div>
                  </div>
                  <p className="flex gap-2 text-sm">
                     <span
                        className={`${
                           current.price.discount && "line-through"
                        } text-gray-500`}
                     >
                        {current.price.original}
                     </span>
                     <span className="font-medium">
                        {current.price.discount}
                     </span>
                  </p>
                  <div>
                     <p>Color</p>
                     <div className="flex gap-3">
                        {current.colors.map((color,index) => (
                           <div key={index} className={`size-6 rounded border border-gray-500`} style={{backgroundColor: color}}></div>
                        ))}
                     </div>
                  </div>
                  <div>
                     <p>Size</p>
                     <div className="flex gap-3">
                        {current.sizes.map((size,index) => (
                           <div key={index} className={`size-6 rounded border border-gray-500`}>{size}</div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
};

export default Details;
