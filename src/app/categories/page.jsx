import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";

const fetchCategories = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_CATEGORY_URL);
   const json = await res.json();
   return json;
};

export default async function Categories() {
   const categories = await fetchCategories()
   return (
      <section className="">
         <Container>
            <Breadcrumb current={"Categories"} />
            <div className="my-20">
               <h2 className="font-bold text-2xl">All Categories</h2>
               <p className="mb-5">Relaxed fits for everyday wear.</p>
               <div className="grid grid-cols-4 gap-5">
                  {categories.map((category) => (
                     <div key={category.id}><Image src={category.image} alt={category.name} width={265} height={200} /></div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
}
