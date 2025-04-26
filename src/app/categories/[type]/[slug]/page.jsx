import { fetchProducts } from "@/actions/fetchProduct";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import DetailCard from "@/components/DetailCard";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";

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
            <DetailCard current={current} />
            <YouMayAlsoLike category={params.type} />
         </Container>
      </>
   );
};

export default Details;
