import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
