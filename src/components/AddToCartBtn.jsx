"use client";

import React from "react";
import useCartsStore from "@/store/useCartsStore";
import Swal from "sweetalert2";

const AddToCartBtn = ({ product, size = "S", color, className = "", quantity = 1, }) => {
   const { carts, addCart, quantityIncrease } = useCartsStore();
   const addedItem = carts.find((cart) => cart.path == product.path && cart.size == size && cart.color == color );

   const handleAddToCart = (e) => {
      e.stopPropagation();
      if (addedItem) {
         Swal.fire({
            icon: "question",
            title: "Already added!",
            text: "Confirm to increase the quantity",
            confirmButtonColor: "#444",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            cancelButtonColor: "#888",
         }).then((result) => {
            if (result.isConfirmed) {
               quantityIncrease(addedItem.id);
            }
         });
      } else {
         addCart({
            id: carts.length + 1,
            path: product.path,
            quantity: quantity,
            size: size,
            category: product.category,
            color: color ? color : product.colors[0],
            price: product.price,
            img: product.img,
            total: product.price.discount
               ? product.price.discount
               : product.price.original,
         });
      }
   };
   return (
      <button
         onClick={handleAddToCart}
         className={`w-full ${className} ${
            addedItem
               ? "bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-gray-100"
               : "bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-900"
         } duration-300 py-1 px-2 flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer`}
      >
         {addedItem ? "Added to Cart" : "Add to Cart"}
      </button>
   );
};

export default AddToCartBtn;
