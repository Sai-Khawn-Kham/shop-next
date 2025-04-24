import Container from "@/components/Container";
import ExploreOurLatestStyle from "@/components/ExploreOurLatestStyle";
import HeroSection from "@/components/HeroSection";
import ShopByCategory from "@/components/ShopByCategory";

export default function Home() {
   return (
      <section className="">
         <HeroSection />
         <Container>
            <ShopByCategory />
            <ExploreOurLatestStyle />
         </Container>
      </section>
   );
}
