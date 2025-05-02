const { create } = require("zustand");

const useWishListsStore = create((set) => ({
   wishLists: [],
   addToWishList: (newWishList) => set((state) => ({ wishLists: [...state.wishLists, newWishList]})),
   removeFromWishList: (wishListId) => set((state) => ({ wishLists: state.wishLists.filter((el) => el.id !== wishListId )})),
   emptyWishlists: () => set((state) => ({ wishLists: [] })),
}))

export default useWishListsStore;