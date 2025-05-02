import React from "react";
import Container from "@/components/Container";

const HeroSection = () => {
   return (
      <div className="bg-cover h-40 md:h-[436px] relative" style={{ backgroundImage: "url('/assets/hero.png')" }}>
         <div className="absolute bottom-0 text-gray-50">
            <Container className="py-1 md:py-5">
               <p className="text-xl/tight md:text-6xl/tight font-bold">Own your look</p>
               <p className="text-xl/tight md:text-6xl/tight font-bold">Own your moment</p>
               <p className="text-sm/tight text-gray-100">
                  Step into outfits that bring comfort, confidence and a sense of belonging.
               </p>
            </Container>
         </div>
      </div>
   );
};

export default HeroSection;
