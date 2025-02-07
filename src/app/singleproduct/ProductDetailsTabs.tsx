// "use client";
// import { useState } from "react";

// export default function ProductDetailsTabs() {
//   const [activeTab, setActiveTab] = useState("description");
//   function renderTabContent() {
//     switch (activeTab) {
//       case "description":
//         return (
//           <div className="tab-content p-5 font-sans">
//             <p>
//               Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
//               portable active stereo speaker takes the unmistakable look and
//               sound of Marshall, unplugs the chords, and takes the show on the
//               road.
//             </p>
//             <p>
//               Weighing in under 7 pounds, the Kilburn is a lightweight piece of
//               vintage styled engineering. Setting the bar as one of the loudest
//               speakers in its class, the Kilburn is a compact, stout-hearted
//               hero with a well-balanced audio which boasts a clear midrange and
//               extended highs for a sound that is both articulate and pronounced.
//             </p>
//           </div>
//         );
//       case "additional-info":
//         return (
//           <div className="tab-content">
//             <p>Here is the additional information about the product.</p>
//           </div>
//         );
//       case "reviews":
//         return (
//           <div className="tab-content">
//             <p>Customer Reviews [5]:</p>
//             <ul>
//               <li>Great quality and comfort.</li>
//               <li>Worth the price!</li>
//               <li>Elegant and durable design.</li>
//             </ul>
//           </div>
//         );
//       default:
//         return null;
//     }
//   }

//   return (
//     <div className="product-details-tabs flex gap-5 mb-5">
//       {/* Tab Headers */}
//       <div className=" tabs px-5 py-2 bg-gray-100 text-base rounded-md cursor-pointer">
//         <button
//           className={activeTab === "description" ? "active" : ""}
//           onClick={() => setActiveTab("description")}
//         >
//           Description
//         </button>
//         <button
//           className={activeTab === "additional-info" ? "active" : "px-5 py-2 bg-blue-500 text-white font-bold text-base rounded-md cursor-pointer"}
//           onClick={() => setActiveTab("additional-info")}
//         >
//           Additional Information
//         </button>
//         <button
//           className={activeTab === "reviews" ? "active" : ""}
//           onClick={() => setActiveTab("reviews")}
//         >
//           Reviews [5]
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="tab-content-container text-sm leading-6 text-gray-600">{renderTabContent()}</div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-2 gap-5">
//         <img
//           src="/img/Cloud sofa three seater + ottoman_2 1.png"
//           alt="Sofa Image 1"
//           className="w-full border-2 border-gray-300 rounded-md"
//         />
//         <img
//           src="/img/Cloud sofa three seater + ottoman_1 1.png"
//           alt="Sofa Image 2"
//           className="w-full border-2 border-gray-300 rounded-md"
//         />
//       </div>
//     </div>
//   );
// }
