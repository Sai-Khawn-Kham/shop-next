const { create } = require("zustand");

const usePaymentStore = create((set) => ({
   payments: [
      {
         name: "payment",
         id: "cash",
         label: "Cash on delivery",
      },
      {
         name: "payment",
         id: "kpay",
         label: "KBZ Pay",
      },
      {
         name: "payment",
         id: "wave",
         label: "Wave Pay",
      }
   ]
}))

export default usePaymentStore;