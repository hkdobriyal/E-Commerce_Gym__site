// // Gym__website\app\components\Cta.tsx
// "use client";
// import Link from "next/link";
// import React from "react";

// function Cta() {
//   return (
//     <section id="cta">
//       <div
//         style={{ backgroundImage: `url('/images/cta/bg.jpg')` }}
//         className="px-8 py-16 bg-[50%] bg-no-repeat bg-cover mt-8"
//       >
//         <div className="text-white flex flex-col gap-4 font-bold max-w-screen-xl m-auto">
//           <h1 className="text-4xl">Need Genuine Supplements?</h1>
//           <h3 className="text-2xl flex items-center gap-2">
//             <span className="text-[#ff0336]">Call:</span>
//             <span>+91 9999596220</span>
//           </h3>
//           <div>
//             <Link
//               href="#SupplementsSection"
//               onClick={(e) => {
//                 e.preventDefault();
//                 const section = document.querySelector("#SupplementsSection");
//                 if (section) {
//                   section.scrollIntoView({ behavior: "smooth" });
//                 }
//               }}
//               className="relative text-white flex items-center gap-2 bg-blu font-bold px-6 py-4 after:h-[3.5rem] after:absolute after:w-[13.25rem] after:duration-300 after:ease-linear after:border after:border-blu after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 mt-6 w-fit"
//             >
//               <span>PLACE ORDER NOW</span>
//               <span>
//                 <i className="fa-solid fa-arrow-right undefined"></i>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Cta;
// // Gym__website\app\components\Cta.tsx
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Cta() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="cta" className="relative">
      <div
        style={{
          backgroundImage: `url('/images/cta/bg.jpg')`,
          backgroundPosition: `100% `,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="px-8  py-16 md:py-24 bg-no-repeat mt-8 relative overflow-hidden"
      >
        <div className="text-white flex flex-col gap-6 font-semibold max-w-screen-xl m-auto text-center md:text-left z-10 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight transform animate-slideUp">
            Need Genuine Supplements?
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-white opacity-80 flex items-center justify-center md:justify-start gap-2 animate-fadeIn">
            <span className="text-blu">Call:</span>
            <span className="hover:text-blue-200 transition-all duration-300">+91 9999596220</span>
          </h3>
          <div className="mt-6 ">
            {/* <Link
              href="#SupplementsSection"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#SupplementsSection")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative inline-block px-10 py-4 bg-blu/70 text-white text-lg font-bold rounded-lg shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-blu motion-reduce:transform-none"
            >
              PLACE ORDER NOW
              <span className="absolute right-0 top-1/2 transform translate-y-[-50%] transition-all duration-300 hover:translate-x-3">
                ➜
              </span>
            </Link> */}
            <Link
  href="#SupplementsSection"
  onClick={(e) => {
    e.preventDefault();
    document.querySelector("#SupplementsSection")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="relative inline-flex items-center px-12 py-4 bg-blu/70 text-white text-lg font-bold rounded-lg shadow-xl transition-all duration-300 
             hover:scale-110 hover:shadow-2xl hover:bg-blu motion-reduce:transform-none group 
             outline outline-2 outline-transparent hover:outline-blu hover:outline-offset-4
             before:absolute before:inset-0 before:bg-white/10 before:scale-0 
             before:transition-transform before:duration-300 before:rounded-lg 
             hover:before:scale-100"
>
  PLACE ORDER NOW
  <span className="ml-2 relative transition-all duration-300 group-hover:translate-x-2">
    ➜
  </span>
</Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
