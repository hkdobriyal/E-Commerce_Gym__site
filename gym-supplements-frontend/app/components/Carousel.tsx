// // Gym__website\app\components\Carousel.tsx
// "use client";
// import React from "react";
// import Image from "next/image";

// // Image paths (Use direct paths instead of importing)
// const slides = [
//   "/images/Carousel/bcaa.jpg",
//   "/images/Carousel/c4.jpg",
//   "/images/Carousel/dx.png",
//   "/images/Carousel/gat.jpg",
//   "/images/Carousel/gnc2.jpg",
//   "/images/Carousel/gnc1.png",
//   "/images/Carousel/kl.jpg",
//   "/images/Carousel/mp.jpg",
//   "/images/Carousel/nt.jpg",
//   "/images/Carousel/on.jpg",
//   "/images/Carousel/sy1.png",
//   "/images/Carousel/pa.jpg",
//   "/images/Carousel/pa2.jpg",
//   "/images/Carousel/sy.jpg",
// ];

// const Carousel = () => {
//   return (
//     <div className="relative overflow-hidden bg-gray-900 py-10">
//       {/* Scrolling Container */}
//       <div className="flex w-full animate-scroll-left space-x-6">
//         {/* Duplicate slides for smooth looping */}
//         {[...slides, ...slides].map((src, index) => (
//           <div key={index} className="relative h-96 w-80 flex-shrink-0">
//             <Image
//               src={src}
//               alt={`Slide ${index}`}
//               fill
//               className="rounded-lg object-cover shadow-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;



"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

// Image paths
const slides = [
  "/images/Carousel/bcaa.jpg",
  "/images/Carousel/c4.jpg",
  "/images/Carousel/dx.png",
  "/images/Carousel/gat.jpg",
  "/images/Carousel/gnc2.jpg",
  "/images/Carousel/gnc1.png",
  "/images/Carousel/kl.jpg",
  "/images/Carousel/mp.jpg",
  "/images/Carousel/nt.jpg",
  "/images/Carousel/on.jpg",
  "/images/Carousel/sy1.png",
  "/images/Carousel/pa.jpg",
  "/images/Carousel/pa2.jpg",
  "/images/Carousel/sy.jpg",
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    gsap.to(carouselRef.current, {
      x: "-50%",
      ease: "linear",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden bg-gray-900 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div ref={carouselRef} className="flex w-full space-x-6">
        {[...slides, ...slides].map((src, index) => (
          <motion.div
            key={index}
            className="relative h-96 w-80 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
