"use server";

const fetchCart = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_CART_URL, {
      next: {
         tags: ["carts"],
      },
   });
   const json = await res.json();
   return json;
};

export default fetchCart;
