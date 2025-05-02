import ConfirmOrder from "@/components/ConfirmOrder";
import React from "react";

const OrderConfirmationPage = ({ params }) => {
   return (
      <ConfirmOrder params={params.confirm} />
   );
};

export default OrderConfirmationPage;
