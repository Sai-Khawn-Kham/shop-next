import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const About = () => {
   return (
      <>
         <Container>
            <Breadcrumb current={"About"} />
            <div className="my-10 grid grid-cols-2">
               <div>
                  <h1 className="text-3xl font-bold uppercase">
                     about trendFlow
                  </h1>
                  <p className="text-gray-500">
                     At TrendFlow, we make shopping personal. We combine expert
                     styling with smart technology to bring you clothes that fit
                     your vibe, save you time, and help you feel your best—every
                     day.
                  </p>
               </div>
            </div>
            <div className="my-10">
              <Image src="/assets/about.png" width={1120} height={400} alt="About" />
            </div>
         </Container>
      </>
   );
};

export default About;
