// File: components/LoginForm.tsx

import React from "react";

const LoginForm: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-5">Log In</h2>
      <form>
        <div className="form-group py-6">
          <label htmlFor="username">Username or email address</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group py-6">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group remember-me">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-white text-black rounded-box hover:bg-gray-800"
        >
          
        </button>
        <a href="/forgot-password" className="forgot-password">
          Lost Your Password?
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
