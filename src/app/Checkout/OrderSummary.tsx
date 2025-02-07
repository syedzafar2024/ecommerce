// File: components/OrderSummary.tsx
import React from "react";

const OrderSummary: React.FC = () => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="product-summary">
        <div className="product">
          <span>Asgaard Sofa</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="subtotal">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>Rs. 250,000.00</span>
        </div>
      </div>
      <div className="payment-methods">
        <h3>Payment Methods</h3>
        <label>
          <input type="radio" name="payment" />
          Direct Bank Transfer
        </label>
        <label>
          <input type="radio" name="payment" />
          Cash on Delivery
        </label>
      </div>
      <button className="place-order-button">Place Order</button>
    </div>
  );
};

export default OrderSummary;
