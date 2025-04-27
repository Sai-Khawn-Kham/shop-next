const { create } = require("zustand");

const useWishListStore = create((set) => ({
   wishLists: [],
   addToWishList: (newWishList) => set((state) => ({ wishLists: [...state.wishLists, newWishList]})),
   removeFromWishList: (wishListId) => set((state) => ({ wishLists: state.wishLists.filter((el) => el.id !== wishListId )}))
}))

export default useWishListStore;