const { create } = require("zustand");

const useOrdersStore = create((set) => ({
   orders: [
      {
         id: 1,
         orderId: "00001",
         carts: [
            {
               id: 1,
               path: "new-dawn",
               quantity: 3,
               size: "L",
               category: "sweatshirts",
               color: "black",
               price: 30000,
               img: "/assets/products/newDawn.png",
               total: 90000,
            },
            {
               id: 2,
               path: "the-ritual",
               quantity: 2,
               size: "XL",
               category: "shirts",
               color: "white",
               price: 20000,
               img: "/assets/products/theRitual.png",
               total: 40000,
            },
         ],
         subTotal: 130000,
         shipping: 7800,
         tax: 6500,
         netTotal: 144300,
         customer: {
            name: "admin",
            email: "admin@gmail.com",
            phone: "09691568932",
            address: "123 Main St, Apt 4B, San Francisco, CA 94107, USA",
            payment: "wave",
            additional: "Great Website"
         }
      }
   ],
   addOrder: (newOrder) => set((state) => ({orders: [ ...state.orders, newOrder ]}))
}))

export default useOrdersStore;