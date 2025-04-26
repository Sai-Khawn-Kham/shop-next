"use server"

export const fetchFaq = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_FAQ_URL, {
      next: {
         tags: ["faqs"]
      }
   });
   const json = await res.json();
   return json;
};