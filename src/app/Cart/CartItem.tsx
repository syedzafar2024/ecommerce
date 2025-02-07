// File: components/CartItem.tsx
import React from "react";

interface CartItemProps {
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onQuantityChange: (quantity: number) => void;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  productName,
  price,
  quantity,
  imageUrl,
  onQuantityChange,
  onDelete,
}) => {
  return (
    <div className="cart-item grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center py-2 border-b border-gray-300">
      <div className="cart-item-image flex items-center gap-2">
        <img src={imageUrl} alt={productName} className="w-15 h-15 rounded-md"/>
      </div>
      <div className="cart-item-details">
        <span className="product-name pl-2 font-bold">{productName}</span>
        <span className="product-price text-right">Rs. {price.toLocaleString()}</span>
      </div>
      <div className="cart-item-quantity text-center">
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => onQuantityChange(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="cart-item-subtotal">
        <span>Rs. {(price * quantity).toLocaleString()}</span>
      </div>
      <div className="cart-item-delete text-center text-red-500 cursor-pointer" onClick={onDelete}>
        🗑️
      </div>
    </div>
  );
};

export default CartItem;
