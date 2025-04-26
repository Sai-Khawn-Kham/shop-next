"use server"

const fetchCategories = async () => {
   const res = await fetch(process.env.NEXT_PUBLIC_CATEGORY_URL,{
      next: {
         tags: ["categories"]
      }
   });
   const json = await res.json();
   return json;
};

export default fetchCategories