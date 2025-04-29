"use server";

import { revalidateTag } from "next/cache";

const addCart = async (currentState, formData) => {
   const num = await fetch(process.env.NEXT_PUBLIC_CARTS_URL).then((res) => res.json()).length;
   const id = num + 1;
   const img = formData.get("img");
   const price = formData.get("price");
   const color = formData.get("color");
   const size = formData.get("size");
   const quantity = formData.get("quantity");
   const name = formData.get("name");
   const category = formData.get("category");
   const res = await fetch(process.env.NEXT_PUBLIC_CARTS_URL, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         id: id,
         name: name,
         quantity: quantity,
         size: size,
         category: category,
         color: color,
         price: price,
         img: img,
      }),
   });
   if(res.ok){
      const json = await res.json();
      revalidateTag("carts");
      return json;
   } else {
      return res.statusText;
   }
}

export default addCart;
