"use server"

const { revalidateTag } = require("next/cache");

const addedToCart = async (currentState, formData) => {
   const id = formData.get("id");
   const res = await fetch(process.env.NEXT_PUBLIC_CART_URL+"/"+id,{
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
   });
   if(res.ok){
      const json = await res.json();
      revalidateTag("carts")
      return json;
   } else {
      return res.statusText;
   }
}

export default addedToCart;