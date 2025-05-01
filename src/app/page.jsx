import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import ExploreOurLatestStyles from "@/components/ExploreOurLatestStyles";
import ShopByCategory from "@/components/ShopByCategory";
import React from "react";

const HomePage = () => {
   return (
      <>
         <HeroSection />
         <Container>
            <ShopByCategory />
            <ExploreOurLatestStyles />
         </Container>
      </>
   );
};

export default HomePage;
