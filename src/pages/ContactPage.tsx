// File: pages/ContactPage.tsx
import ContactForm from "@/app/Contact/ContactForm";
import ContactInfo from "@/app/Contact/ContactInfo";
import React from "react";
const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
