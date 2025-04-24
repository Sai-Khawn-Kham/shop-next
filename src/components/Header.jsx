import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { BsSearch, BsHeart, BsBag, BsPerson } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
   return (
      <header className="bg-gray-50 py-3">
         <Container className={`flex justify-between items-center`}>
            <Link href={"/"}>
               <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={38}
                  height={32}
                  priority
               />
            </Link>
            <div className="flex gap-3">
               <Link href={"/"}>HOME</Link>
               <Link href={"/products"}>PRODUCTS</Link>
               <div>ABOUT</div>
               <div>FAQ</div>
               <div>CONTACT</div>
            </div>
            <div className="flex gap-3">
               <BsSearch />
               <BsHeart />
               <BsBag />
               <BsPerson />
            </div>
         </Container>
      </header>
   );
};

export default Header;
