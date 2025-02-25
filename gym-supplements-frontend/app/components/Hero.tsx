// // Gym__website\app\components\Hero.tsx
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function Hero() {
//   return (
//     <section id="hero">
//       <div
//         style={{ backgroundImage: `url('/images/hero/bg.jpg')` }} // ✅ Fixed: Directly using relative path
//         className="h-[130vh] bg-fixed bg-[30%_30%] bg-cover flex justify-center items-center text-white p-8"
//       >
//         <div className="absolute inset-0 h-[130vh] bg-black bg-opacity-50"></div>
//         <div className="hidden lg:flex gap-4 flex-row-reverse -rotate-90 text-white absolute top-2/4 -right-8 items-center"></div>
//         <div className="flex flex-col gap-12 items-center lg:items-start relative lg:ml-[36rem]">
//           <h1 className="font-bold text-[2.5rem] text-white lg:text-5xl flex flex-col gap-2 text-center lg:text-left leading-snug lg:space-y-2">
//             <span>FUEL YOUR GAINS</span>
//           </h1>
//           <Link
//             href="#SupplementsSection"
//             onClick={(e) => {
//               e.preventDefault();
//               const section = document.querySelector("#SupplementsSection");
//               if (section) {
//                 section.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//             className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[hsla(0,0%,100%,.362)] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
//           >
//             <span>EXPLORE NOW</span>
//             <span className="text-green-500">
//               <i className="fa-solid fa-arrow-right"></i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;



"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        style={{ backgroundImage: `url('/images/hero/bg.jpg')` }}
        className="h-[130vh] bg-fixed bg-[30%_30%] bg-cover flex justify-center items-center text-white p-8 relative"
      >
        <div className="absolute inset-0 h-[130vh] bg-black bg-opacity-50"></div>
        <div className="hidden lg:flex gap-4 flex-row-reverse -rotate-90 text-white absolute top-2/4 -right-8 items-center"></div>
        <div className="flex flex-col gap-12 items-center lg:items-start relative lg:ml-[36rem]">
          <motion.h1
            className="font-bold text-[2.5rem] lg:text-5xl flex flex-col gap-2 text-center lg:text-left leading-snug lg:space-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span>FUEL YOUR GAINS</span>
          </motion.h1>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="#SupplementsSection"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#SupplementsSection");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[hsla(0,0%,100%,.362)] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
            >
              <span>EXPLORE NOW</span>
              <span className="text-green-500">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
