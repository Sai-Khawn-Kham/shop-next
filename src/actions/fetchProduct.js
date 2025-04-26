"use server"

export const fetchProducts = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_PRODUCT_URL, {
      next: {
         tags: ["products"]
      }
   });
   const json = await res.json();
   return json;
};