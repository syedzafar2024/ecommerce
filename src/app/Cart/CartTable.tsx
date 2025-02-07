// File: components/CartTable.tsx
import React from "react";
import CartItem from "./CartItem";

const CartTable: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      productName: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      imageUrl: "/sofa.png",
    },
  ];

  const handleQuantityChange = (id: number, quantity: number) => {
    console.log(`Product ID: ${id}, New Quantity: ${quantity}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete Product ID: ${id}`);
  };

  return (
    <div className="cart-table">
      <div className="cart-header grid grid-cols-[2fr_1fr_1fr_1fr_auto] p-2 bg-gray-100 font-bold">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
        <span></span>
      </div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          productName={item.productName}
          price={item.price}
          quantity={item.quantity}
          imageUrl={item.imageUrl}
          onQuantityChange={(quantity) =>
            handleQuantityChange(item.id, quantity)
          }
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default CartTable;
