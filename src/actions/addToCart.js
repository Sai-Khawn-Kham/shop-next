"use server";
const { revalidateTag } = require("next/cache");

const addToCart = async (currentState, formData) => {
   const id = formData.get("id");
   const cart = formData.get("cart");
   const bool = cart == "false";
   const res = await fetch(process.env.NEXT_PUBLIC_PRODUCT_URL+"/"+id, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         cart: bool,
      }),
   });
   if (res.ok) {
      const json = await res.json();
      revalidateTag("products");
      return json;
   } else {
      console.log(res.statusText);
      return res.statusText;
   }
};

export default addToCart;
