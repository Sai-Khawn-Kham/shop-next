import { fetchProducts } from "@/actions/fetchProduct";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";

export default async function Type({ params }) {
   const products = await fetchProducts();
   const current = products.filter((product) => product.category == params.type);
   return (
      <>
         <Container>
            <Breadcrumb
               current={params.type}
               links={[{ name: "Categories", path: "/categories" }]}
            />
            <div className="my-20">
               <h2 className="text-2xl font-bold mb-5 capitalize">{params.type}</h2>
               {/* <p className="mb-5">
                  Explore everything we’ve got—styles that match your vibe, your
                  mood, and your life.
               </p> */}
               <div className="grid grid-cols-4 gap-5">
                  {current.map((product) => (
                     <ProductCard key={product.id} product={product} detail={`/categories/${params.type}/${product.path}`} />
                  ))}
               </div>
            </div>
         </Container>
      </>
   );
}
