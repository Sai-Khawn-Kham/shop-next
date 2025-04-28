import fetchCategories from "@/actions/fetchCategory";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryCard from "@/components/CategoryCard";
import Container from "@/components/Container";
import React from "react";

const Categories = async () => {
   const categories = await fetchCategories();

   return (
      <>
         <Container>
            <Breadcrumb current={"Categories"} />
            <div className="my-10">
               <h2 className="font-bold text-2xl">All Categories</h2>
               <p className="mb-5">Relaxed fits for everyday wear.</p>
               <div className="grid grid-cols-4 gap-5">
                  {categories.map((category) => (
                     <CategoryCard key={category.id} category={category} />
                  ))}
               </div>
            </div>
         </Container>
      </>
   );
};

export default Categories;
