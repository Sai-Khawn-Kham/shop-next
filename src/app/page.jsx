import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import ExploreOurLatestStyle from "@/components/ExploreOurLatestStyle";
import ShopByCategory from "@/components/ShopByCategory";
import React from "react";

const Home = () => {
   return (
      <>
         <HeroSection />
         <Container>
            <ShopByCategory />
            <ExploreOurLatestStyle />
         </Container>
      </>
   );
};

export default Home;
