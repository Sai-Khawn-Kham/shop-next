const { create } = require("zustand");

const useAccountsStore = create((set) => ({
   accounts: [
      {
         id: 1,
         name: "Admin",
         email: "admin@gmail.com",
         password: "asdffdsa"
      }
   ],
   users: [],
   registerAcc: (newAcc) => set((state) => ({ accounts: [ ...state.accounts, newAcc ]})),
   loginAcc: (oldAcc) => set((state) => ({ users: [ oldAcc ]})),
   logoutAcc: () => set((state) => ({ users: [] })),
   changePassword: (accEmail, newPassword) => set((state) => ({
      accounts: state.accounts.map((account) => account.email == accEmail ? { ...account, password: newPassword } : account ),
      users: state.users.map((user) => user.email == accEmail ? { ...user, password: newPassword } : user )
   })),
   changePhone: (accEmail, newPhone) => set((state) => ({
      accounts: state.accounts.map((account) => account.email == accEmail ? { ...account, phone: newPhone } : account ),
      users: state.users.map((user) => user.email == accEmail ? { ...user, phone: newPhone } : user )
   })),
   changeAddress: (accEmail, newAddress) => set((state) => ({
      accounts: state.accounts.map((account) => account.email == accEmail ? { ...account, address: newAddress } : account ),
      users: state.users.map((user) => user.email == accEmail ? { ...user, address: newAddress } : user )
   })),
}))

export default useAccountsStore;