import React from "react";
import Container from "./Container";
import Image from "next/image";
import { BsX } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
   return (
      <>
         <Container className={"py-20 flex justify-between border-t border-gray-300"}>
            <div>
               <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={38}
                  height={32}
                  priority
               />
               <p className="uppercase text-2xl font-semibold">trendflow</p>
            </div>
            <div className="flex gap-10">
               <div>
                  <h4 className="font-medium mb-5">Terms & Conditions</h4>
                  <div className="flex flex-col text-gray-500">
                     <Link href={""}>Return and Refunds</Link>
                     <Link href={""}>Privacy Policy</Link>
                     <Link href={""}>Cookie Policy</Link>
                  </div>
               </div>
               <div>
                  <h4 className="font-medium mb-5">Store</h4>
                  <div className="flex flex-col text-gray-500">
                     <Link href={""}>About</Link>
                     <Link href={""}>Contact Us</Link>
                     <Link href={""}>FAQ</Link>
                  </div>
               </div>
               <div>
                  <h4 className="font-medium mb-5">Social</h4>
                  <div className="flex flex-col text-gray-500">
                     <Link href={""}>Facebook</Link>
                     <Link href={""}>Instagram</Link>
                     <Link href={""}>X</Link>
                  </div>
               </div>
            </div>
         </Container>
         <footer className="mt-auto bg-gray-950 text-gray-50 flex justify-center items-center py-2">
            <div>
               Copy Right © 2025{" "}
               <a href="mms-it.com" className="hover:underline">
                  MMS IT
               </a>
               , All Rights Reserved.
            </div>
         </footer>
      </>
   );
};

export default Footer;
