"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="shadow-xl overflow-hidden">
      {/* Background Banner with Motion Effect */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="shadow-lg bg-blu/50 bg-cover bg-no-repeat lg:h-[16rem] py-8 px-12 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left lg:gap-32"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-black font-bold text-2xl lg:text-4xl lg:w-[42rem] lg:leading-snug"
        >
          We Always Provide Best Fitness Supplements For You
        </motion.h1>

        {/* Button with Hover Animation */}
        <Link
          href="#SupplementsSection"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#SupplementsSection")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 hover:bg-[#ff0336] hover:text-white transition-all duration-300 ease-in-out"
        >
          <span>ORDER NOW</span>
          <span className="text-[#FF0336]">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-black px-8 pt-32 lg:grid lg:grid-cols-2 lg:gap-32 max-w-screen-xl m-auto"
      >
        <div className="relative">
          <Image
            src="/images/whychooseus/arjun1.png"
            alt="Why Choose Us"
            width={1000}
            height={1000} 
            priority
            className="m-auto mb-14 h-[40rem] lg:w-[28rem] rounded-3xl hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 py-16">
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-bold w-full text-center text-4xl shadow-lg py-2 -mt-10 mb-16"
          >
            WHY CHOOSE US?
          </motion.h3>

          <p className="text-black">
            At <strong>MuscleandHealth</strong>, we support your fitness journey with high-quality supplements and excellent service.
          </p>

          {/* Features List with Staggered Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-12 lg:px-0">
            {[
              { img: "supplement.png", text: "Premium-Quality Supplements" },
              { img: "fast-delivery.png", text: "Fast Delivery Across India" },
              { img: "grid-3.png", text: "Expert Recommendations" },
              { img: "grid-1.png", text: "Trusted by Fitness Enthusiasts" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-4"
              >
                <Image
                  src={`/images/whychooseus/${item.img}`}
                  alt={item.text}
                  width={70}
                  height={70} 
                  priority
                  className="bg-[#2b2b2b] hover:bg-blu ease-linear duration-300 rounded-full p-4"
                />
                <h1 className="font-bold text-lg">{item.text}</h1>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;
