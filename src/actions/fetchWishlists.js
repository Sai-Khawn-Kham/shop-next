"use server"

const fetchWishlists = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_WISHLISTS_URL, {
      next: {
         tags: ["wishlists"],
      },
   });
   if(res.ok){
      const json = await res.json();
      return json;
   } else {
      return res.statusText;
   }
};

export default fetchWishlists;