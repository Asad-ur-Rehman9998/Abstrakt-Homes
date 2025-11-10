// // import React from "react";
// // import { Zap, Wrench, Eye, Recycle } from "lucide-react";
// // import { Link } from "react-router-dom";

// // interface AluminiumContentProps {
// //   showViewAll?: boolean; // ✅ Prop to show/hide the button
// // }

// // const AluminiumContent: React.FC<AluminiumContentProps> = ({ showViewAll = false }) => {
// //   const aluminiumProducts = [
// //     {
// //       id: 1,
// //       name: "Aluminium Sliding Windows",
// //       image:
// //         "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
// //       description:
// //         "Sleek sliding windows with smooth operation and modern aesthetics for contemporary buildings.",
// //       features: ["Smooth sliding", "Corrosion resistant", "Lightweight", "Modern design"],
// //       price: "Contact for pricing",
// //     },
// //     {
// //       id: 2,
// //       name: "Aluminium Casement Windows",
// //       image:
// //         "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
// //       description:
// //         "Durable casement windows with excellent ventilation and security features.",
// //       features: ["Excellent ventilation", "High security", "Weather resistant", "Easy maintenance"],
// //       price: "Contact for pricing",
// //     },
// //   ];

// //   const benefits = [
// //     { icon: <Zap className="w-8 h-8" />, title: "Lightweight & Strong", description: "High strength-to-weight ratio" },
// //     { icon: <Wrench className="w-8 h-8" />, title: "Low Maintenance", description: "Corrosion resistant and durable" },
// //     { icon: <Eye className="w-8 h-8" />, title: "Modern Design", description: "Sleek and elegant look" },
// //     { icon: <Recycle className="w-8 h-8" />, title: "Eco Friendly", description: "100% recyclable materials" },
// //   ];

// //   return (
// //     <div className="text-gray-900">
// //       {/* Hero */}
// //       <section className="pb-12 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center rounded-xl">
// //         <div className="container mx-auto px-4 py-8">
// //           <h1 className="text-4xl font-bold mb-4">Aluminium Doors & Windows</h1>
// //           <p className="text-lg max-w-3xl mx-auto">
// //             Modern aluminium solutions offering strength, durability, and style.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Benefits */}
// //       <section className="py-12">
// //         <h2 className="text-3xl font-bold text-center mb-8">Why Choose Aluminium?</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {benefits.map((b, i) => (
// //             <div
// //               key={i}
// //               className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg"
// //             >
// //               <div className="flex justify-center mb-3 text-gray-700">{b.icon}</div>
// //               <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
// //               <p className="text-gray-600">{b.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Products */}
// //       <section className="py-12 bg-white">
// //         <h2 className="text-3xl font-bold text-center mb-8">Our Aluminium Products</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {aluminiumProducts.map((p) => (
// //             <div
// //               key={p.id}
// //               className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden"
// //             >
// //               <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
// //               <div className="p-4">
// //                 <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
// //                 <p className="text-gray-600 mb-3 text-sm">{p.description}</p>
// //                 <Link
// //                   to="/#contact"
// //                   className="inline-block mt-2 text-blue-600 hover:text-blue-700 font-semibold"
// //                 >
// //                   Get Quote →
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* ✅ Dynamic “View All Products” button */}
// //         {showViewAll && (
// //           <div className="text-center mt-10">
// //             <Link
// //               to="/category-layout?category=aluminium"
// //               className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
// //             >
// //               View All Products →
// //             </Link>
// //           </div>
// //         )}
// //       </section>
// //     </div>
// //   );
// // };

// // export default AluminiumContent;


// import React from "react";
// import { Zap, Wrench, Eye, Recycle } from "lucide-react";
// import { Link } from "react-router-dom";

// interface AluminiumContentProps {
//   showViewAll?: boolean;
// }

// const AluminiumContent: React.FC<AluminiumContentProps> = ({ showViewAll = false }) => {
//   const aluminiumProducts = [
//     {
//       id: 1,
//       name: "Aluminium Sliding Windows",
//       image:
//         "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
//       description:
//         "Sleek sliding windows with smooth operation and modern aesthetics for contemporary buildings.",
//       features: ["Smooth sliding", "Corrosion resistant", "Lightweight", "Modern design"],
//       price: "Contact for pricing",
//     },
//     {
//       id: 2,
//       name: "Aluminium Casement Windows",
//       image:
//         "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
//       description:
//         "Durable casement windows with excellent ventilation and security features.",
//       features: ["Excellent ventilation", "High security", "Weather resistant", "Easy maintenance"],
//       price: "Contact for pricing",
//     },
//   ];

//   const benefits = [
//     { icon: <Zap className="w-8 h-8" />, title: "Lightweight & Strong", description: "High strength-to-weight ratio" },
//     { icon: <Wrench className="w-8 h-8" />, title: "Low Maintenance", description: "Corrosion resistant and durable" },
//     { icon: <Eye className="w-8 h-8" />, title: "Modern Design", description: "Sleek and elegant look" },
//     { icon: <Recycle className="w-8 h-8" />, title: "Eco Friendly", description: "100% recyclable materials" },
//   ];

//   return (
//     <div className="text-gray-900">
//       {/* Hero */}
//       <section className="pb-12 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center rounded-xl mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24">
//         <div className="px-4 py-10">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-4">Aluminium Doors & Windows</h1>
//           <p className="text-base sm:text-lg max-w-3xl mx-auto">
//             Modern aluminium solutions offering strength, durability, and style.
//           </p>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Why Choose Aluminium?</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {benefits.map((b, i) => (
//             <div key={i} className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg">
//               <div className="flex justify-center mb-3 text-gray-700">{b.icon}</div>
//               <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
//               <p className="text-gray-600">{b.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Products */}
//       <section className="py-12 bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Aluminium Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {aluminiumProducts.map((p) => (
//             <div key={p.id} className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden">
//               <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
//                 <p className="text-gray-600 mb-3 text-sm">{p.description}</p>
//                 <Link
//                   to="/#contact"
//                   className="inline-block mt-2 text-blue-600 hover:text-blue-700 font-semibold"
//                 >
//                   Get Quote →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {showViewAll && (
//           <div className="text-center mt-10">
//             <Link
//               to="/category-layout?category=aluminium"
//               className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
//             >
//               View All Products →
//             </Link>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default AluminiumContent;


import React from "react";
import { Zap, Wrench, Eye, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToContact } from "../utils/scrollToContact";

interface AluminiumContentProps {
  showViewAll?: boolean;
  viewAllRoute?: string;
  viewAllLabel?: string;
}

const AluminiumContent: React.FC<AluminiumContentProps> = ({ showViewAll = false, viewAllRoute, viewAllLabel }) => {
  const aluminiumProducts = [
    {
      id: 1,
      name: "Aluminium Sliding Windows",
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Sleek sliding windows with smooth operation and modern aesthetics for contemporary buildings.",
      features: ["Smooth sliding", "Corrosion resistant", "Lightweight", "Modern design"],
      price: "Contact for pricing",
    },
    {
      id: 2,
      name: "Aluminium Casement Windows",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Durable casement windows with excellent ventilation and security features.",
      features: ["Excellent ventilation", "High security", "Weather resistant", "Easy maintenance"],
      price: "Contact for pricing",
    },
  ];

  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Lightweight & Strong", description: "High strength-to-weight ratio" },
    { icon: <Wrench className="w-8 h-8" />, title: "Low Maintenance", description: "Corrosion resistant and durable" },
    { icon: <Eye className="w-8 h-8" />, title: "Modern Design", description: "Sleek and elegant look" },
    { icon: <Recycle className="w-8 h-8" />, title: "Eco Friendly", description: "100% recyclable materials" },
  ];

  return (
    <div className="text-gray-900">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Aluminium Doors & Windows</h1>
          <p className="text-sm sm:text-lg max-w-2xl mx-auto">
            Modern aluminium solutions offering strength, durability, and style.
          </p>
        </div>
      </section>
      <div>

        {/* Benefits */}
        <section className="py-12 px-4 sm:px-6 md:px-10 mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Why Choose Aluminium?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-3 text-gray-700">{b.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
                <p className="text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="py-12 bg-white px-4 sm:px-6 md:px-10 mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Aluminium Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aluminiumProducts.map((p) => (
              <div
                key={p.id}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{p.description}</p>
                  <button
                    onClick={scrollToContact}
                    className="inline-block mt-2 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                  >
                    Get Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showViewAll && (
            <div className="text-center mt-10">
              <Link
                to={viewAllRoute || "/category-layout?category=aluminium"}
                className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              >
                {viewAllLabel || "View All Products"} →
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AluminiumContent;
