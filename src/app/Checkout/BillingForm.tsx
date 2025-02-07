// File: components/BillingForm.tsx
import React from "react";
import InputField from "./InputField";

const BillingForm: React.FC = () => {
  return (
    <div className="billing-form">
      <h2>Billing Details</h2>
      <form>
        <div className="form-row">
          <InputField label="First Name" type="text" required />
          <InputField label="Last Name" type="text" required />
        </div>
        <InputField label="Company Name (Optional)" type="text" />
        <InputField label="Country / Region" type="text" required />
        <InputField label="Street Address" type="text" required />
        <InputField label="Town / City" type="text" required />
        <InputField label="Province" type="text" required />
        <InputField label="ZIP Code" type="text" required />
        <InputField label="Phone" type="text" required />
        <InputField label="Email Address" type="email" required />
        <InputField label="Additional Information" type="text" />
      </form>
    </div>
  );
};

export default BillingForm;

