// // // E-Commerce_Gym__site/gym-supplements-frontend/app/components/Header.tsx
// // "use client";
// // import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { RootState } from "../redux/store";
// // import { setToken, setUser } from "../redux/slices/authSlice";
// // import ProfileDropdown from "./ProfileDropdown";

// // const Header = () => {
// //   const dispatch = useDispatch();
// //   const token = useSelector((state: RootState) => state.auth.token);
// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       const savedUser = localStorage.getItem("user");
// //       if (savedUser && savedUser !== "undefined") {
// //         dispatch(setUser(JSON.parse(savedUser)));
// //       }
// //     }
// //   }, [dispatch]);

// //   return (
// //     <header className="bg-white shadow-md p-4 flex justify-between items-center">
// //       <h1 className="text-2xl font-bold">Gym Supplements</h1>

// //       <nav>
// //         <ul className="flex items-center space-x-6">
// //           <li><a href="/" className="text-gray-700 hover:text-gray-900">Home</a></li>
// //           <li><a href="/shop" className="text-gray-700 hover:text-gray-900">Shop</a></li>
// //           <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>

// //           {/* Toggle between Login and Profile Dropdown */}
// //           {token ? <ProfileDropdown /> : <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</a>}
// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;



// // E-Commerce_Gym__site/gym-supplements-frontend/app/components/Header.tsx
// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState, useEffect } from "react";
// // import { useTogglerContext } from "../context/toggler";
// // import { motion } from "framer-motion";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // User Profile Icon
// // import { useSelector } from "react-redux";
// // import { RootState } from "../redux/store";
// // import ProfileDropdown from "./ProfileDropdown";

// // const supplementCategories = [
// //   { name: "Whey Protein", slug: "whey-protein" },
// //   { name: "Mass Gainers", slug: "mass-gainers" },
// //   { name: "BCAA (Intra-workout)", slug: "bcaa-intra-workout" },
// //   { name: "Pre-Workout", slug: "pre-workout" },
// //   { name: "Creatine", slug: "creatine" },
// // ];

// // function Header() {
// //   const { setMobileNavbar } = useTogglerContext();
// //   const [isShopOpen, setIsShopOpen] = useState(false);
// //   const [isSticky, setIsSticky] = useState(false);
// //   const [isProfileOpen, setIsProfileOpen] = useState(false);

// //   // Fetch cart items from Redux store
// //   const cartItems = useSelector((state: RootState) => state.cart.items);
// //   const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

// //   // Fetch authentication status
// //   const user = useSelector((state: RootState) => state.auth.user);

// //   // Handle sticky header on scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsSticky(window.scrollY > 50);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <section id="header">
// //       <header
// //         className={`w-full text-black font-bold flex justify-between items-center py-3 px-8 fixed top-0 left-0 z-50 transition-all duration-300 ${
// //           isSticky
// //             ? "bg-blu/90 shadow-lg"
// //             : "bg-gradient-to-b from-blu via-blu/50 to-transparent"
// //         }`}
// //       >
// //         {/* Logo with Hover Animation */}
// //         <div>
// //           <Link href="/">
// //             <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
// //               <Image
// //                 src="/images/logo/logoblack.png"
// //                 alt="logo"
// //                 width={150}
// //                 height={150}
// //                 className="cursor-pointer"
// //               />
// //             </motion.div>
// //           </Link>
// //         </div>

// //         {/* Navigation Links */}
// //         <div className="hidden lg:flex items-center gap-8">
// //           <Link href="/" className="text-lg uppercase tracking-wide hover:text-white transition-all">
// //             Home
// //           </Link>

// //           {["About", "Contact"].map((item) => (
// //             <Link
// //               key={item}
// //               href={`/${item.toLowerCase()}`}
// //               className="text-lg uppercase tracking-wide hover:text-white transition-all"
// //             >
// //               {item}
// //             </Link>
// //           ))}

// //           {/* SHOP MENU with Animated Dropdown */}
// //           <div
// //             className="relative group"
// //             onMouseEnter={() => setIsShopOpen(true)}
// //             onMouseLeave={() => setIsShopOpen(false)}
// //           >
// //             <button className="hover:text-white text-lg uppercase flex items-center gap-2">
// //               Shop <i className="fa-solid fa-chevron-down"></i>
// //             </button>

// //             <motion.div
// //               initial={{ opacity: 0, y: -10 }}
// //               animate={{ opacity: isShopOpen ? 1 : 0, y: isShopOpen ? 0 : -10 }}
// //               transition={{ duration: 0.3 }}
// //               className={`absolute top-full left-0 bg-white text-black shadow-lg rounded-lg w-52 z-50 ${
// //                 isShopOpen ? "visible" : "invisible"
// //               }`}
// //             >
// //               <ul className="flex flex-col text-base">
// //                 {supplementCategories.map((category) => (
// //                   <Link
// //                     key={category.slug}
// //                     href={`/supplements/${category.slug}`}
// //                     className="block px-4 py-2 rounded-lg hover:bg-blu hover:text-white"
// //                   >
// //                     {category.name}
// //                   </Link>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           </div>
// //         </div>

// //         {/* Wishlist, Cart & User Icons */}
// //         <div className="flex items-center gap-6">
// //           <Link href="/wishlist">
// //             <FavoriteBorderIcon fontSize="medium" />
// //           </Link>

// //           <Link href="/cart" className="relative">
// //             <ShoppingCartIcon fontSize="medium" />
// //             {totalCartQuantity > 0 && (
// //               <span className="absolute top-0 right-[-10px] bg-red-500 text-xs text-white rounded-full px-2">
// //                 {totalCartQuantity}
// //               </span>
// //             )}
// //           </Link>

// //           {/* Authentication Section */}
// //           <div className="relative">
// //             {user ? (
// //               <button
// //                 onClick={() => setIsProfileOpen((prev) => !prev)}
// //                 className="text-lg uppercase hover:text-white flex items-center"
// //               >
// //                 <AccountCircleIcon fontSize="large" className="text-gray-700 hover:text-white" />
// //               </button>
// //             ) : (
// //               <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">
// //                 Login
// //               </Link>
// //             )}

// //             {isProfileOpen && <ProfileDropdown />}
// //           </div>
// //         </div>
// //       </header>
// //     </section>
// //   );
// // }

// // export default Header;





// // E-Commerce_Gym__site/gym-supplements-frontend/app/components/Header.tsx"use client";
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { setToken, setUser } from "../redux/slices/authSlice";
// import ProfileDropdown from "./ProfileDropdown";
// import { motion } from "framer-motion";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const supplementCategories = [
//   { name: "Whey Protein", slug: "whey-protein" },
//   { name: "Mass Gainers", slug: "mass-gainers" },
//   { name: "BCAA (Intra-workout)", slug: "bcaa-intra-workout" },
//   { name: "Pre-Workout", slug: "pre-workout" },
//   { name: "Creatine", slug: "creatine" },
// ];

// const Header = () => {
//   const dispatch = useDispatch();
//   const token = useSelector((state: RootState) => state.auth.token);
//   const user = useSelector((state: RootState) => state.auth.user);
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const [isShopOpen, setIsShopOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedUser = localStorage.getItem("user");
//       if (savedUser && savedUser !== "undefined") {
//         dispatch(setUser(JSON.parse(savedUser)));
//       }
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section id="header">
//       <header
//         className={`w-full text-black font-bold flex justify-between items-center py-3 px-8 fixed top-0 left-0 z-50 transition-all duration-300 ${
//           isSticky
//             ? "bg-blu/90 shadow-lg"
//             : "bg-gradient-to-b from-blu via-blu/50 to-transparent"
//         }`}
//       >
//         {/* Logo with Hover Animation */}
//         <div>
//           <Link href="/">
//             <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
//               <Image
//                 src="/images/logo/logoblack.png"
//                 alt="logo"
//                 width={150}
//                 height={150}
//                 className="cursor-pointer"
//               />
//             </motion.div>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden lg:flex items-center gap-8">
//           <Link href="/" className="text-lg uppercase tracking-wide hover:text-white transition-all">
//             Home
//           </Link>

//           {["About", "Contact"].map((item) => (
//             <Link
//               key={item}
//               href={`/${item.toLowerCase()}`}
//               className="text-lg uppercase tracking-wide hover:text-white transition-all"
//             >
//               {item}
//             </Link>
//           ))}

//           {/* SHOP MENU with Animated Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsShopOpen(true)}
//             onMouseLeave={() => setIsShopOpen(false)}
//           >
//             <button className="hover:text-white text-lg uppercase flex items-center gap-2">
//               Shop <i className="fa-solid fa-chevron-down"></i>
//             </button>

//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: isShopOpen ? 1 : 0, y: isShopOpen ? 0 : -10 }}
//               transition={{ duration: 0.3 }}
//               className={`absolute top-full left-0 bg-white text-black shadow-lg rounded-lg w-52 z-50 ${
//                 isShopOpen ? "visible" : "invisible"
//               }`}
//             >
//               <ul className="flex flex-col text-base">
//                 {supplementCategories.map((category) => (
//                   <Link
//                     key={category.slug}
//                     href={`/supplements/${category.slug}`}
//                     className="block px-4 py-2 rounded-lg hover:bg-blu hover:text-white"
//                   >
//                     {category.name}
//                   </Link>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>
//         </div>

//         {/* Wishlist, Cart & User Icons */}
//         <div className="flex items-center gap-6">
//           <Link href="/wishlist">
//             <FavoriteBorderIcon fontSize="medium" />
//           </Link>

//           <Link href="/cart" className="relative">
//             <ShoppingCartIcon fontSize="medium" />
//             {totalCartQuantity > 0 && (
//               <span className="absolute top-0 right-[-10px] bg-red-500 text-xs text-white rounded-full px-2">
//                 {totalCartQuantity}
//               </span>
//             )}
//           </Link>

//           {/* Authentication Section */}
//           <div className="relative">
//             {token ? (
//               <button
//                 onClick={() => setIsProfileOpen((prev) => !prev)}
//                 className="text-lg uppercase hover:text-white flex items-center"
//               >
//                 <AccountCircleIcon fontSize="large" className="text-gray-700 hover:text-white" />
//               </button>
//             ) : (
//               <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//                 Login
//               </Link>
//             )}

//             {isProfileOpen && <ProfileDropdown />}
//           </div>
//         </div>
//       </header>
//     </section>
//   );
// };

// export default Header;


"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setToken, setUser } from "../redux/slices/authSlice";
import ProfileDropdown from "./ProfileDropdown";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login"; // Import LoginIcon

const supplementCategories = [
  { name: "Whey Protein", slug: "whey-protein" },
  { name: "Mass Gainers", slug: "mass-gainers" },
  { name: "BCAA (Intra-workout)", slug: "bcaa-intra-workout" },
  { name: "Pre-Workout", slug: "pre-workout" },
  { name: "Creatine", slug: "creatine" },
];

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      if (savedUser && savedUser !== "undefined") {
        dispatch(setUser(JSON.parse(savedUser)));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="header">
      <header
        className={`w-full text-black font-bold flex justify-between items-center py-3 px-8 fixed top-0 left-0 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-blu/90 shadow-lg"
            : "bg-gradient-to-b from-blu via-blu/50 to-transparent"
        }`}
      >
        {/* Logo with Hover Animation */}
        <div>
          <Link href="/">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src="/images/logo/logoblack.png"
                alt="logo"
                width={150}
                height={150}
                className="cursor-pointer"
              />
            </motion.div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-lg uppercase tracking-wide hover:text-white transition-all">
            Home
          </Link>

          {["About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg uppercase tracking-wide hover:text-white transition-all"
            >
              {item}
            </Link>
          ))}

          {/* SHOP MENU with Animated Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
          >
            <button className="hover:text-white text-lg uppercase flex items-center gap-2">
              Shop <i className="fa-solid fa-chevron-down"></i>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isShopOpen ? 1 : 0, y: isShopOpen ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-full left-0 bg-white text-black shadow-lg rounded-lg w-52 z-50 ${
                isShopOpen ? "visible" : "invisible"
              }`}
            >
              <ul className="flex flex-col text-base">
                {supplementCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/supplements/${category.slug}`}
                    className="block px-4 py-2 rounded-lg hover:bg-blu hover:text-white"
                  >
                    {category.name}
                  </Link>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Wishlist, Cart & User Icons */}
        <div className="flex items-center gap-6">
          <Link href="/wishlist">
            <FavoriteBorderIcon fontSize="medium" />
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCartIcon fontSize="medium" />
            {totalCartQuantity > 0 && (
              <span className="absolute top-0 right-[-10px] bg-red-500 text-xs text-white rounded-full px-2">
                {totalCartQuantity}
              </span>
            )}
          </Link>

          {/* Authentication Section */}
          <div className="relative group">
            {token ? (
              <div
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
                className="text-lg uppercase hover:text-white flex items-center"
              >
                <AccountCircleIcon fontSize="large" className="text-gray-700 hover:text-white" />
                {isProfileOpen && <ProfileDropdown />}
              </div>
            ) : (
              <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                <LoginIcon />
              </Link>
            )}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
