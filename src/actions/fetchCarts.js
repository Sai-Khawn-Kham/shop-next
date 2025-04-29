"use server";

const fetchCarts = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_CARTS_URL, {
      next: {
         tags: ["carts"],
      },
   });
   if (res.ok) {
      const json = await res.json();
      return json;
   } else {
      return res.statusText;
   }
};

export default fetchCarts;
