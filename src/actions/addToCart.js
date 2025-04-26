"use server";

import React from 'react'

const addToCart = async (currentState, formData) => {
   const num = await fetch(process.env.NEXT_PUBLIC_CART_URL).then((res) => res.json()).length
   const id = num + 1;
   const img = formData.get("img")
   const price = formData.get("price")
   const color = formData.get("color")
   const size = formData.get("size")
   const quantity = formData.get("quantity")
   const name = formData.get("name")
   const category = formData.get("category")
   const res = await fetch(process.env.NEXT_PUBLIC_CART_URL, {
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
   })
   if(res.ok){
      const json = await res.json();
      return json
   } else {
      return res.statusText
   }
}

export default addToCart

// const { revalidateTag } = require("next/cache");

// const addToCart = async (currentState, formData) => {
//    const id = formData.get("id");
//    const cart = formData.get("cart");
//    const bool = cart == "false";
//    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCT_URL+"/"+id, {
//       method: "PATCH",
//       headers: {
//          "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//          cart: bool,
//       }),
//    });
//    if (res.ok) {
//       const json = await res.json();
//       revalidateTag("products");
//       return json;
//    } else {
//       console.log(res.statusText);
//       return res.statusText;
//    }
// };

// export default addToCart;
