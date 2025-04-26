import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import ExploreOurLatestStyle from "@/components/ExploreOurLatestStyle";
import ShopByCategory from "@/components/ShopByCategory";

export default function Home() {
   return (
      <>
         <HeroSection />
         <Container>
            <ShopByCategory />
            <ExploreOurLatestStyle />
         </Container>
      </>
   );
}
