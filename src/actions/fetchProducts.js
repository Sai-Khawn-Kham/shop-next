"use server";

const fetchProducts = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_URL, {
      next: {
         tags: ["products"],
      },
   });
   if (res.ok) {
      const json = await res.json();
      return json;
   } else {
      return res.statusText;
   }
};

export default fetchProducts;
