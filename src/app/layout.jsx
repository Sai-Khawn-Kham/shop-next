import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import React from 'react'
import NextTopLoader from "nextjs-toploader";

const RootLayout = ({ children }) => {
  return (
   <html lang="en">
      <head>
         <meta charSet="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>K.Shop</title>
      </head>
      <body className="flex flex-col min-h-screen">
         <NextTopLoader />
         <Header />
         <section className="mt-12">
            {children}
         </section>
         <Footer />
         <Toaster
            toastOptions={{
               // Default
               className: "",
               duration: 2000,
               style: {
                  background: "#363636",
                  color: "#fff",
               },
               // Default for specific types
               success: {
                  duration: 2000,
                  theme: {
                     primary: "green",
                     secondary: "black",
                  },
               },
            }}
         />
      </body>
   </html>
);
}

export default RootLayout
