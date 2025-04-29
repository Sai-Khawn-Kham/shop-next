import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Detail from "@/components/Detail";

const TypeDetailPage = async ({ params }) => {
   return (
      <Container>
         <Breadcrumb
            current={params.detail.replaceAll("-", " ")}
            links={[
               { name: "Categories", path: "/categories" },
               { name: params.type, path: `/categories/${params.type}` },
            ]}
         />
         <Detail detail={params.detail} />
      </Container>
   );
};

export default TypeDetailPage;
