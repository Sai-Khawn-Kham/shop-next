const { create } = require("zustand");

const useCartStore = create((set) => ({
   carts: [],
   subTotal: 0,
   shipping: 0,
   tax: 0,
   netTotal: 0,
   addToCart: (newCart) => set((state) => ({ carts: [ ...state.carts, newCart ]})),
   removeFromCart: (cartId) => set((state) => ({ carts: state.carts.filter((el) => el.id !== cartId)})),
   quantityDecrease: (cartId) => set((state) => ({ carts: state.carts.map((el) => el.id == cartId ? { ...el, quantity: el.quantity-1, total: ((el.quantity-1)*((el.price.discount ? el.price.discount.replace(/[^\d]/g,"") : el.price.original.replace(/[^\d]/g,""))))} : el)})),
   quantityIncrease: (cartId) => set((state) => ({ carts: state.carts.map((el) => el.id == cartId ? { ...el, quantity: el.quantity+1, total: ((el.quantity+1)*((el.price.discount ? el.price.discount.replace(/[^\d]/g,"") : el.price.original.replace(/[^\d]/g,""))))} : el)})),
   calSubTotal: () => set((state) => ({ subTotal: state.carts.reduce((prev,curr) => {
      const key = Object.keys(curr).find((el) => el.startsWith('total'))
      const total = key ? curr[key] : 0
      return prev + total
   },0)})),
   calShipping: () => set((state) => ({shipping: state.subTotal*0.06})),
   calTax: () => set((state) => ({tax: state.subTotal*0.05})),
   calNetTotal: () => set((state) => ({netTotal: state.subTotal + state.shipping + state.tax})),
}))

export default useCartStore;