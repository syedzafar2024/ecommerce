// File: pages/BillingPage.tsx
import BillingForm from "@/app/Checkout/BillingForm";
import OrderSummary from "@/app/Checkout/OrderSummary";
import React from "react";

const BillingPage: React.FC = () => {
  return (
    <div className="billing-page">
      <div className="billing-container">
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default BillingPage;
