// File: pages/auth.tsx

import LoginForm from "@/app/myaccount/LoginForm";
import RegisterForm from "@/app/myaccount/RegisterForm";
import React from "react";

const AuthPage: React.FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-container flex justify-between gap-10 max-w-4xl bg-white p-10 border border-gray-300 rounded-lg shadow-md">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};

export default AuthPage;
