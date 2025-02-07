import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-mywite w-[1440px] h-[555px] border-t border-gray-300 text-center py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="text-balance py-28 ">
           <p>400 University Drive Suite 200 Coral Gables,
            <br></br> FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="text-py-6">
          <h3 className="text-md font-semibold mb-2 ">Links</h3>
          <ul className="text-balance justify-between py-8">
            <li className="justify-between py-4"><a href="#" className="hover:underline">Home</a></li>
            <li className="justify-between py-4"><a href="#" className="hover:underline">Shop</a></li>
            <li className="justify-between py-4"><a href="#" className="hover:underline">About</a></li>
            <li className="justify-between py-4"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="text-balance justify-between py-8">
            <li className="justify-between py-4"><a href="#" className="hover:underline">Payment Options</a></li>
            <li className="justify-between py-4"><a href="#" className="hover:underline">Returns</a></li>
            <li className="justify-between py-4"><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Enter Your Email Address</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-400 rounded-l focus:outline-none"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p>2022 Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
