import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className="mt-auto bg-gray-50">
         <Container className={"py-5 flex justify-between border-t border-gray-300"}>
            <div>
               <Link href={"/"}>
                  <Image
                     src="/assets/logo.png"
                     alt="logo"
                     width={38}
                     height={32}
                     priority
                  />
               </Link>
               <Link href={"/"} className="uppercase text-2xl font-semibold">trendflow</Link>
            </div>
            <div className="flex gap-10">
               <div>
                  <h4 className="font-medium mb-5">Terms & Conditions</h4>
                  <div className="flex flex-col text-gray-500">
                     <div>Return and Refunds</div>
                     <div>Privacy Policy</div>
                     <div>Cookie Policy</div>
                  </div>
               </div>
               <div>
                  <h4 className="font-medium mb-5">Store</h4>
                  <div className="flex flex-col text-gray-500">
                     <Link className="hover:underline active:text-cyan-500" href={"/about"}>About</Link>
                     <Link className="hover:underline active:text-cyan-500" href={"/contact"}>Contact Us</Link>
                     <Link className="hover:underline active:text-cyan-500" href={"/faq"}>FAQ</Link>
                  </div>
               </div>
               <div>
                  <h4 className="font-medium mb-5">Social</h4>
                  <div className="flex flex-col text-gray-500">
                     <div>Facebook</div>
                     <div>Instagram</div>
                     <div>X</div>
                  </div>
               </div>
            </div>
         </Container>
         <div className="mt-auto bg-gray-950 text-gray-50 flex justify-center items-center gap-1 py-1.5">
            <span>© 2025</span>
            <Link href="//mms-it.com" className="hover:underline">MMS IT</Link>
            <span>, All Rights Reserved.</span>
         </div>
      </footer>
   );
};

export default Footer;
