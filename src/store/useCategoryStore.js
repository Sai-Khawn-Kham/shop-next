const { create } = require("zustand");

const useCategoryStore = create((set) => ({
   categories: [
      {
        id: 1,
        path: "shirts",
        img: "/assets/category/shirts.png"
      },
      {
        id: 2,
        path: "sweatshirts",
        img: "/assets/category/sweatshirts.png"
      },
      {
        id: 3,
        path: "hoodies",
        img: "/assets/category/hoodies.png"
      },
      {
        id: 4,
        path: "jackets",
        img: "/assets/category/jackets.png"
      },
      {
        id: 5,
        path: "bags",
        img: "/assets/category/bags.png"
      },
      {
        id: 6,
        path: "caps",
        img: "/assets/category/caps.png"
      }
   ]
}))

export default useCategoryStore;