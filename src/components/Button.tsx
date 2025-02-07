import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition-all duration-200"
    >
      {text}
    </button>
  );
};

export default Button;
