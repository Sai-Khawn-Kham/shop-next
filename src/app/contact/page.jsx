import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const Contact = () => {
   return (
      <>
         <Container>
            <Breadcrumb current={"Contact"} />
            <div className="my-20">
               <h2 className="font-bold text-3xl uppercase">
                  get in touch with us
               </h2>
               <p className="text-gray-500 mb-5">
                  Have a question or need help? We’re here for you!
               </p>
               <div className="grid grid-cols-2 gap-5">
                  <div className="border border-gray-400 rounded p-5">
                     <h3 className="font-semibold">Chat with us</h3>
                     <p className="text-gray-500">
                        Connect with us for personalized support.
                     </p>
                     <p className="text-cyan-500 hover:underline cursor-pointer">
                        support@trendflow.com
                     </p>
                     <hr className="border-t-gray-500 mt-3 mb-5" />

                     <h3 className="font-semibold">Call us</h3>
                     <p className="text-gray-500">Need Help? Call Us Now!</p>
                     <p className="text-cyan-500 hover:underline cursor-pointer">
                        +95 945 6789 120
                     </p>
                     <hr className="border-t-gray-500 mt-3 mb-5" />

                     <h3 className="font-semibold">Visit us</h3>
                     <p className="text-gray-500">
                        We're Waiting to Welcome You!
                     </p>
                     <p className="text-cyan-500 hover:underline cursor-pointer">
                        789 Prestige Towers, Suite 405, Downtown District,
                        Central City, 12345
                     </p>
                  </div>
                  <div className="flex flex-col gap-5">
                     <input type="text" className="text-sm placeholder:text-gray-500 py-1.5 px-3 border border-gray-300 rounded" placeholder="Name" />
                     <input type="tel" className="text-sm placeholder:text-gray-500 py-1.5 px-3 border border-gray-300 rounded" placeholder="Phone Number" />
                     <input type="textarea" className="grow text-sm placeholder:text-gray-500 py-1.5 px-3 border border-gray-300 rounded" placeholder="Message" />
                     <button className="bg-gray-950 text-gray-50 text-sm font-semibold py-1.5 rounded">Send Message</button>
                  </div>
               </div>
            </div>
            <div className="my-20">
               <Image
                  src="/assets/map.png"
                  width={1120}
                  height={300}
                  alt="map"
               />
            </div>
         </Container>
      </>
   );
};

export default Contact;
