// File: components/CartSidebar.tsx

import React from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Props = {
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
};

const CartSidebar: React.FC<Props> = ({ cartItems, onRemoveItem }) => {
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="m-5 p-4">
      <h2 className="align-text-top">Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>
                {item.quantity} x Rs. {item.price.toLocaleString()}
              </p>
            </div>
            <button
              className="remove-item"
              onClick={() => onRemoveItem(item.id)}
              aria-label={`Remove ${item.name}`}
            >              
            </button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>Rs. {calculateSubtotal().toLocaleString()}</span>
        </div>
        <div className="cart-actions py-20">
          <button className="view-cart p-2">View Cart</button>
          <button className="checkout px-20 border-spacing-2">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
