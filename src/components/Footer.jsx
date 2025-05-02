import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className="mt-auto bg-gray-50">
         <Container className={"py-5 flex flex-col md:flex-row justify-between items-center md:items-start gap-5 border-t border-gray-300"}>
            <div className="flex flex-col items-center md:items-start">
               <Link href={"/"}>
                  <Image
                     src="/assets/Logo.png"
                     alt="logo"
                     width={38}
                     height={32}
                     priority
                  />
               </Link>
               <Link href={"/"} className="uppercase text-2xl font-semibold">trendflow</Link>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
               <div>
                  <h4 className="font-medium text-center mb-1">Terms & Conditions</h4>
                  <div className="flex flex-col items-center text-gray-500">
                     <div>Return and Refunds</div>
                     <div>Privacy Policy</div>
                     <div>Cookie Policy</div>
                  </div>
               </div>
               <div>
                  <h4 className="font-medium text-center mb-1">Store</h4>
                  <div className="flex flex-col items-center text-gray-500">
                     <Link className="hover:underline active:text-cyan-500" href={"/about"}>About</Link>
                     <Link className="hover:underline active:text-cyan-500" href={"/contact"}>Contact Us</Link>
                     <Link className="hover:underline active:text-cyan-500" href={"/faq"}>FAQ</Link>
                  </div>
               </div>
               <div>
                  <h4 className="font-medium text-center mb-1">Social</h4>
                  <div className="flex flex-col items-center text-gray-500">
                     <div>Facebook</div>
                     <div>Instagram</div>
                     <div>X</div>
                  </div>
               </div>
            </div>
         </Container>
         <div className="mt-auto bg-gray-950 text-gray-50 flex justify-center items-center gap-1 py-1.5">
            <span>© 2025</span>
            <Link href="https://mms-it.com/" target="_blank" className="hover:underline">MMS IT</Link>
            <span>, All Rights Reserved.</span>
         </div>
      </footer>
   );
};

export default Footer;
