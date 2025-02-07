// File: pages/CartPage.tsx
"use client"
import React from "react";
import CartTable from "@/app/Cart/CartTable";
import CartTotals from "@/app/Cart/CartTotals";

const CartPage: React.FC = () => {
  return (
    <section className="flex-1 text-sm">
    <div className="cart-page">
      <div className="cart-container">
        <CartTable />
        <CartTotals />
      </div>
    </div>
    </section>
  );
};

export default CartPage;
