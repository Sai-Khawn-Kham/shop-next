const { create } = require("zustand");

const useFaqStore = create((set) => ({
   faqs: [
      {
        id:1,
        title: "How do I track my order?",
        para: "Once your order is shipped, you’ll receive an email with a tracking number to follow your package.",
        open: false
      },
      {
        id:2,
        title:"Can I return or exchange an item?",
        para: "Yes! We offer easy returns and exchanges within 30 days of your purchase. Simply visit our returns page for more details.",
        open: false
      },
      {
        id:3,
        title: "How do I know my size?",
        para:"Check out our size guide for detailed measurements. If you’re still unsure, our customer service team is happy to help!",
        open: false
      },
      {
        id:4,
        title:"How can I contact customer support?",
        para: "You can reach us via email at support@trendflow.com or by using the chat feature on our website. We’re here to help!",
        open: false
      },
      {
        id:5,
        title:"Can I cancel my order?",
        para:"Orders are processed quickly, but if you need to cancel, contact us as soon as possible, and we’ll try to help before it ships.",
        open: false
      },
      {
        id:6,
        title:"Do you offer international shipping?",
        para:"Currently, we only ship within the country, but we're working on expanding to more locations soon!",
        open: false
      }
   ],
   openFaq: (faqId) => set((state) => ({ faqs: state.faqs.map((faq) => faq.id == faqId ? { ...faq, open:!faq.open } : { ...faq, open:false })}))
}))

export default useFaqStore;