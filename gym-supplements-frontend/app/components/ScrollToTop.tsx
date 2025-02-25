// Gym__website\app\components\ScrollToTop.tsx
"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blu/40 to-blu/70 text-white shadow-lg transition-all duration-300 transform ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } hover:shadow-xl hover:scale-110 active:scale-90`}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up transition-transform duration-300 hover:-translate-y-1"></i>
    </button>
  );
};

export default ScrollToTop;
