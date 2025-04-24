"use server"

const { revalidateTag } = require("next/cache");

const addToCart = async (currentState, formData) => {
   const id = formData.get("id");
   const res = await fetch(process.env.NEXT_PUBLIC_CART_URL, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         id: id,
      })
   });
   if(res.ok){
      const json = await res.json();
      revalidateTag("carts");
      return json;
   } else {
      return res.statusText;
   }
}

export default addToCart;