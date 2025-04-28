import { fetchProducts } from "@/actions/fetchProduct";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import DetailCard from "@/components/DetailCard";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";

const Details = async ({ params }) => {
   const products = await fetchProducts();
   const product = products.find((product) => product.path == params.slug);
   
   return (
      <>
         <Container>
            <Breadcrumb
               current={product.path.replaceAll("-", " ")}
               links={[
                  { name: "Categories", path: "/categories" },
                  { name: product.category, path: `/categories/${product.category}`},
               ]}
            />
            <DetailCard product={product} />
            <YouMayAlsoLike category={params.type} />
         </Container>
      </>
   );
};

export default Details;
