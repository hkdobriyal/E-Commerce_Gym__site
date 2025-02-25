// // Gym__website\app\components\Footer.tsx
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// function Footer() {
//   const [year, setYear] = useState(new Date().getFullYear());

//   useEffect(() => {
//     setYear(new Date().getFullYear());
//   }, []);

//   const handleScroll = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if (typeof window !== "undefined") {
//       const section = document.getElementById("SupplementsSection");
//       if (section) section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="footer">
//       {/* Main Footer Section */}
//       <div className="bg-white">
//         <footer className="px-6 py-12 lg:py-20 text-center flex flex-col lg:flex-row lg:text-left gap-12 lg:justify-between lg:px-32">
//           {/* Left Section - Logo & Social Links */}
//           <div className="space-y-6 lg:w-96">
//             <div className="space-y-4">
//               <div>
//                 <Link href="/">
//                   <Image
//                     src="/images/logo/logoblack.png"
//                     alt="logo"
//                     width={160}
//                     height={160}
//                     className="m-auto lg:m-0"
//                   />
//                 </Link>
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div className="flex items-center gap-4 justify-center lg:justify-start">
//               <Link
//                 href="https://www.facebook.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-facebook-f"></i>
//               </Link>
//               <Link
//                 href="https://www.instagram.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-instagram"></i>
//               </Link>
//               <Link
//                 href="https://www.youtube.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-youtube"></i>
//               </Link>
//             </div>
//           </div>

//           {/* Footer Links Section */}
//           <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
//             {/* Supplement Category */}
//             <div className="space-y-6">
//               <div className="relative">
//                 <h1 className="font-bold text-xl">Supplement Category</h1>
//                 <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
//               </div>
//               <div className="flex flex-col gap-4 items-center lg:items-baseline">
//                 {[
//                   "Protein Supplements",
//                   "Amino Acids (BCAA & EAA)",
//                   "Pre-Workout Supplements",
//                   "Creatine",
//                   "Multivitamins & Omega-3",
//                 ].map((category, index) => (
//                   <Link key={index} href="#SupplementsSection" onClick={handleScroll} className="hover:text-blue-500 font-medium">
//                     {category}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-6">
//               <div className="relative">
//                 <h1 className="font-bold text-xl">Contact Us</h1>
//                 <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
//               </div>
//               <div className="space-y-4 text-center lg:text-left">
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Address: </span>Patparganj Road, New Delhi 110092, DL, India
//                 </p>
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Phone: </span>+91 9999596220
//                 </p>
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Email: </span>
//                   info@muscleandhealth.in
//                 </p>

//                 {/* WhatsApp QR Code */}
//                 <div className="flex justify-center lg:justify-start">
//                   <Image
//                     src="/images/QR_Code/WhatsAppqr.png"
//                     alt="WhatsApp QR Code"
//                     width={100}
//                     height={100}
//                     className="border rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>

//         {/* Sub-Footer Section */}
//         <div className="bg-gray-300 text-black text-center py-4">
//           <p className="font-semibold">
//             © {year}{" "}
//             <span className="text-blu">
//               <Link href="/" className="inline-block">
//                 MuscleAndHealth
//               </Link>{" "}
//             </span>
//             . All rights reserved.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;



"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector("#SupplementsSection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="footer"
      // className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white py-10"
      className="bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 text-white py-10"
    >
      <footer className="px-6 py-12 lg:py-20 text-center flex flex-col lg:flex-row lg:text-left gap-12 lg:justify-between lg:px-32 relative z-10">
        {/* Left Section - Logo & Social Links */}
        <div className="space-y-6 lg:w-96">
          <Link href="/">
            <Image
              src="/images/logo/logoblack.png"
              alt="logo"
              width={160}
              height={160}
              className="m-auto lg:m-0 hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            {[
              { href: "https://www.facebook.com", icon: "fa-facebook-f", color: "bg-blue-600" },
              { href: "https://www.instagram.com", icon: "fa-instagram", color: "bg-pink-500" },
              { href: "https://www.youtube.com", icon: "fa-youtube", color: "bg-red-600" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-lg ${item.color} text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <i className={`fa-brands ${item.icon}`}></i>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Supplement Category */}
          <div className="space-y-6">
            <h1 className="font-bold text-xl relative after:block after:h-[4px] after:w-16 after:bg-blue-500 after:mt-2 after:mx-auto lg:after:mx-0 text-center lg:text-left">
              Supplement Category
            </h1>
            <div className="flex flex-col gap-4 items-center lg:items-baseline">
              {[
                "Protein Supplements",
                "Amino Acids (BCAA & EAA)",
                "Pre-Workout Supplements",
                "Creatine",
                "Multivitamins & Omega-3",
              ].map((category, index) => (
                <Link
                  key={index}
                  href="#SupplementsSection"
                  onClick={handleScroll}
                  className="text-lg hover:text-[#ff0336] transition-all duration-300 font-medium"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h1 className="font-bold text-xl relative after:block after:h-[4px] after:w-16 after:bg-blue-500 after:mt-2 after:mx-auto lg:after:mx-0 text-center lg:text-left">
              Contact Us
            </h1>
            <div className="space-y-4 text-center lg:text-left">
              <p className="w-72 mx-auto lg:mx-0 text-sm sm:text-base">
                <span className="font-bold">Address:</span> Patparganj Road, New Delhi 110092, DL, India
              </p>
              <p className="w-72 mx-auto lg:mx-0 text-sm sm:text-base">
                <span className="font-bold">Phone:</span> +91 9999596220
              </p>
              <p className="w-72 mx-auto lg:mx-0 text-sm sm:text-base">
                <span className="font-bold">Email:</span> info@muscleandhealth.in
              </p>

              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/images/QR_Code/WhatsAppqr.png"
                  alt="WhatsApp QR Code"
                  width={100}
                  height={100}
                  className="border rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sub-Footer Section */}
      <div className="bg-gray-600 text-gray-300 text-center py-4 absolute  left-0 right-0">
        <p className="font-semibold text-sm sm:text-base">
          © {year}{" "}
          <Link
            href="/"
            className="text-blu/60 hover:text-blu transition-all duration-300"
          >
            MuscleAndHealth
          </Link>{" "}
          . All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
