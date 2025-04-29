import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Detail from "@/components/Detail";

const ProductsDetailPage = ({ params }) => {
   return (
      <Container>
         <Breadcrumb
            current={params.detail.replaceAll("-", " ")}
            links={[{ name: "Products", path: "/products" }]}
         />
         <Detail detail={params.detail} />
      </Container>
   );
};

export default ProductsDetailPage;
