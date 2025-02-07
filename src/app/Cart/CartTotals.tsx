// File: components/CartTotals.tsx
import React from "react";

const CartTotals: React.FC = () => {
  const subtotal = 250000; // Example value
  const total = subtotal; // Example value

  return (
    <div className="cart-totals flex-[1] bg-yellow-100 p-5 rounded-lg">
      <h2>Cart Totals</h2>
      <div className="totals-row flex justify-between mb-2">
        <span>Subtotal</span>
        <span>Rs. {subtotal.toLocaleString()}</span>
      </div>
      <div className="totals-row flex justify-between mb-2">
        <span>Total</span>
        <span>Rs. {total.toLocaleString()}</span>
      </div>
      <button className="checkout-button w-full py-2 bg-black text-white rounded">Check Out</button>
    </div>
  );
};

export default CartTotals;
