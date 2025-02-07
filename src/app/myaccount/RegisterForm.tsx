// File: components/RegisterForm.tsx

import React from "react";

const RegisterForm: React.FC = () => {
  return (
    <section className="flex-1 text-sm">
    <div className="auth-form flex-1 flex flex-col">
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      <form>
        <div className="form-group mb-5">
          <label className="block text-sm mb-1" htmlFor="email">Email address</label>
          <input className="w-full p-2 border border-gray-300 rounded-md text-sm" type="email" id="email" name="email" required />
        </div>
        <p>
          A link to set a new password will be sent to your email address.
        </p>
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <a href="/privacy-policy">privacy policy</a>.
        </p>
        <button type="submit" className="btn-primary w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Register</button>
      </form>
    </div>
    </section>
  );
};

export default RegisterForm;
