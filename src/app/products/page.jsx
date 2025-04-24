import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";

const fetchProducts = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_PRODUCT_URL)
   const json = await res.json();
   return json;
};

export default async function Categories() {
   const products = await fetchProducts();
   return (
      <section className="">
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
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
}
