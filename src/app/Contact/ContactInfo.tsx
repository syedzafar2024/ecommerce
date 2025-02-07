// File: components/ContactInfo.tsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info">
      <h2>Get In Touch With Us</h2>
      <p>
        For more information about our products & services, please feel free to
        drop us an email or call. Our staff are here to help you!
      </p>
      <div className="info-item">
        <FaMapMarkerAlt className="icon" />
        <div>
          <h4>Address</h4>
          <p>203 DR. Z Avenue, New York, USA</p>
        </div>
      </div>
      <div className="info-item">
        <FaPhoneAlt className="icon" />
        <div>
          <h4>Phone</h4>
          <p>
            MOBILE: (+84) 546-6789 <br /> HOTLINE: (+84) 456-6789
          </p>
        </div>
      </div>
      <div className="info-item">
        <FaClock className="icon" />
        <div>
          <h4>Working Time</h4>
          <p>
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
