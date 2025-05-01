import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { BsHeart, BsBag, BsPerson } from "react-icons/bs";
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
               <Link className="text-gray-600 hover:underline active:text-cyan-500" href={"/"}>HOME</Link>
               <Link className="text-gray-600 hover:underline active:text-cyan-500" href={"/products"}>PRODUCTS</Link>
               <Link className="text-gray-600 hover:underline active:text-cyan-500" href={"/about"}>ABOUT</Link>
               <Link className="text-gray-600 hover:underline active:text-cyan-500" href={"/faq"}>FAQ</Link>
               <Link className="text-gray-600 hover:underline active:text-cyan-500" href={"/contact"}>CONTACT</Link>
            </div>
            <div className="flex gap-3">
               <Link href={"/wishlist"} className="relative inline-block text-gray-600 hover:text-gray-950 active:text-cyan-500">
                  <BsHeart className="size-4.5" />
                  <HeaderWishList />
               </Link>
               <Link href={"/cart"} className="relative inline-block text-gray-600 hover:text-gray-950 active:text-cyan-500">
                  <BsBag className="size-4.5" />
                  <HeaderCart />
               </Link>
                  <Link href={"/account"} className="relative inline-block text-gray-600 hover:text-gray-950 active:text-cyan-500">
                     <BsPerson className="size-4.5" />
                  </Link>
            </div>
         </Container>
      </header>
   );
};

export default Header;
