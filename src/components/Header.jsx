import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { BsSearch, BsHeart, BsBag, BsPerson } from "react-icons/bs";
import Link from "next/link";
import HeaderCart from "./HeaderCart";
import HeaderWishList from "./HeaderWishList";

const Header = () => {
   return (
      <header className="fixed w-full bg-gray-50 py-2 z-50">
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
               <Link href={"/about"}>ABOUT</Link>
               <Link href={"/faq"}>FAQ</Link>
               <Link href={"/contact"}>CONTACT</Link>
            </div>
            <div className="flex gap-3">
               <BsSearch />
               <Link href={"/wishlist"} className="relative inline-block">
                  <BsHeart />
                  <HeaderWishList />
               </Link>
               <Link href={"/cart"} className="relative inline-block">
                  <BsBag />
                  <HeaderCart />
               </Link>
               <BsPerson />
            </div>
         </Container>
      </header>
   );
};

export default Header;
