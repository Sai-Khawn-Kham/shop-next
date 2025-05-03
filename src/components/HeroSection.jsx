import React from "react";
import Container from "@/components/Container";

const HeroSection = () => {
   return (
      <div className="bg-cover bg-center h-58 md:h-[330px] relative" style={{ backgroundImage: "url('/assets/hero.png')" }}>
         <div className="absolute bottom-0 text-gray-50">
            <Container className="py-1 md:py-5">
               <p className="text-2xl/tight md:text-4xl lg:text-6xl/tight font-bold">Own your look</p>
               <p className="text-2xl/tight md:text-4xl lg:text-6xl/tight font-bold">Own your moment</p>
               <p className="text-gray-100">
                  Step into outfits that bring comfort, confidence and a sense of belonging.
               </p>
            </Container>
         </div>
      </div>
   );
};

export default HeroSection;
