// File: pages/cart.tsx
"use client"
import CartSidebar from "@/app/cartsidebar/CartSidebar";



export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/img/Group 146.png",
    },
  ];

  const handleRemoveItem = (id: number) => {
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <div className="bg-mywite size-96 absolute top-20 right-10">
      <CartSidebar cartItems={cartItems} onRemoveItem={handleRemoveItem} />
    </div>
  );
}
