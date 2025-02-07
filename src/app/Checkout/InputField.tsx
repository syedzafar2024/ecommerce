// File: components/InputField.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  required = false,
}) => {
  return (
    <div className="input-field">
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="input"
      />
    </div>
  );
};

export default InputField;
