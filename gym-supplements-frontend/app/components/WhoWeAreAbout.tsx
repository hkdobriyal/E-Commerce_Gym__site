// // Gym__website\app\components\WhoWeAreAbout.tsx
// "use client"; // Ensures it's a client component

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// function WhoWeAreAbout() {
//   return (
//     <section id="who-we-are-about">
//       <div className="px-8 py-16 space-y-16">
//         {/* Intro Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-32 max-w-screen-xl m-auto">
//           <div className="relative flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
//             <p className="text-black relative z-10 font-bold text-center text-4xl">
//               WHO WE ARE
//             </p>
//             <h1 className="font-bold text-2xl">
//               We Will Give You Strength and Health
//             </h1>
//             <p>
//               At MuscleAndHealth, we are committed to providing the highest quality gym
//               supplements to help you achieve your fitness goals.
//             </p>
//             <div>
//               <Link
//                 href="/contact"
//                 className="relative text-white flex items-center gap-2 bg-blue-600 font-bold px-8 py-4 
//                 after:h-[3.5rem] after:absolute after:w-[12rem] after:duration-300 after:ease-linear 
//                 after:border after:border-blue-600 hover:after:border-blue-600 
//                 after:-top-3 after:-right-4 hover:after:top-0 hover:after:right-0 mt-4"
//               >
//                 <span>CONTACT US</span>
//                 <FontAwesomeIcon icon={faArrowRight} />
//               </Link>
//             </div>
//           </div>

//           {/* Images Section */}
//           <div className="relative hidden lg:block">
//             <Image
//               width={1000}
//               height={1000}
//               src="/images/whoweare/running-boy2.png"
//               alt="Running Boy"
//               className="absolute w-[34rem] right-[46%] top-[50%] translate-x-1/2 -translate-y-1/2 z-[5]"
//             />
//             <Image
//               width={80}
//               height={80}
//               src="/images/whoweare/running-text.png"
//               alt="Running Text"
//               className="absolute top-[55%] translate-x-1/2 -translate-y-1/2 right-[78%]"
//             />
//           </div>
//         </div>

//         {/* History & Images Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto">
//           <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
//             <Image src="/images/whoweare-about/grid-1.png" alt="Our History" width={100} height={100} />
//             <h1 className="text-4xl font-bold">Our History</h1>
//             <p className="lg:px-20">Our history description here.</p>
//           </div>

//           <Image src="/images/whoweare-about/grid-2.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />
//           <Image src="/images/whoweare-about/grid-3.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />

//           <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
//             <Image src="/images/whoweare-about/grid-4.png" alt="Our Mission" width={100} height={100} />
//             <h1 className="text-4xl font-bold">Our Mission</h1>
//             <p className="lg:px-20">Our mission description here.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhoWeAreAbout;



"use client"; 
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function WhoWeAreAbout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="who-we-are-about" className="overflow-hidden">
      <div className="px-8 py-16 space-y-16">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-32 max-w-screen-xl m-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col gap-6 items-center text-center lg:items-start lg:text-left"
          >
            <p className="text-black font-bold text-4xl relative z-10">
              WHO WE ARE
            </p>
            <motion.h1
              className="font-bold text-2xl"
              animate={{ opacity: 1, scale: [0.8, 1.1, 1] }}
              transition={{ duration: 1.2 }}
            >
              We Will Give You Strength and Health
            </motion.h1>
            <p>
              At MuscleAndHealth, we are committed to providing high-quality
              gym supplements to help you achieve your fitness goals.
            </p>

            {/* Button with hover effect */}
            <div>
              <Link
                href="/contact"
                className="relative text-white flex items-center gap-2 bg-blue-600 font-bold px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>CONTACT US</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </motion.div>

          {/* Images Section with Parallax */}
          <div className="relative hidden lg:block">
            <Image
              width={1000}
              height={1000}
              src="/images/whoweare/running-boy2.png"
              alt="Running Boy"
              className="absolute w-[34rem] right-[46%] top-[50%] translate-x-1/2 -translate-y-1/2 z-[5]"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />
            <Image
              width={80}
              height={80}
              src="/images/whoweare/running-text.png"
              alt="Running Text"
              className="absolute top-[55%] translate-x-1/2 -translate-y-1/2 right-[78%]"
            />
          </div>
        </div>

        {/* History & Images Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto"
        >
          <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
            <Image src="/images/whoweare-about/grid-1.png" alt="Our History" width={100} height={100} />
            <h1 className="text-4xl font-bold">Our History</h1>
            <p className="lg:px-20">Our history description here.</p>
          </div>

          <Image src="/images/whoweare-about/grid-2.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />
          <Image src="/images/whoweare-about/grid-3.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />

          <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
            <Image src="/images/whoweare-about/grid-4.png" alt="Our Mission" width={100} height={100} />
            <h1 className="text-4xl font-bold">Our Mission</h1>
            <p className="lg:px-20">Our mission description here.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhoWeAreAbout;
