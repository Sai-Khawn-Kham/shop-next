const { create } = require("zustand");

const useAccountsStore = create((set) => ({
   accounts: []
}))

export default useAccountsStore;