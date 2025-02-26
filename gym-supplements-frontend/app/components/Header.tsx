// // // // Gym__site\app\components\Header.tsx
// // // "use client";

// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import React, { useState, useEffect } from "react";
// // // import { useTogglerContext } from "../context/toggler";
// // // import { usePathname } from "next/navigation";
// // // import { motion } from "framer-motion";
// // // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// // // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // // import { useSelector } from "react-redux";
// // // import { RootState } from "../redux/store";
// // // import UserDropdown from "./UserDropdown";

// // // // Supplement categories
// // // const supplementCategories = [
// // //   { name: "Whey Protein", slug: "whey-protein" },
// // //   { name: "Mass Gainers", slug: "mass-gainers" },
// // //   { name: "BCAA (Intra-workout)", slug: "bcaa-intra-workout" },
// // //   { name: "Pre-Workout", slug: "pre-workout" },
// // //   { name: "Creatine", slug: "creatine" },
// // // ];

// // // function Header() {
// // //   const { setMobileNavbar } = useTogglerContext();
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [isShopOpen, setIsShopOpen] = useState(false);
// // //   const [isSticky, setIsSticky] = useState(false);

// // //   // Fetch cart items from Redux store
// // //   const cartItems = useSelector((state: RootState) => state.cart.items);
// // //   const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

// // //   // Fetch authentication status
// // //   const user = useSelector((state: RootState) => state.auth.user);

// // //   // Handle sticky header on scroll
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsSticky(window.scrollY > 50);
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   return (
// // //     <section id="header">
// // //       <header
// // //         className={`w-full text-black font-bold flex justify-between items-center py-3 px-8 fixed top-0 left-0 z-50 transition-all duration-300 ${
// // //           isSticky
// // //             ? "bg-blu/90 shadow-lg"
// // //             : "bg-gradient-to-b from-blu via-blu/50 to-transparent"
// // //         }`}
// // //       >
// // //         {/* Logo with Hover Animation */}
// // //         <div>
// // //           <Link href="/">
// // //             <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
// // //               <Image
// // //                 src="/images/logo/logoblack.png"
// // //                 alt="logo"
// // //                 width={150}
// // //                 height={150}
// // //                 className="cursor-pointer"
// // //               />
// // //             </motion.div>
// // //           </Link>
// // //         </div>

// // //         {/* Navigation Links */}
// // //         <div className="hidden lg:flex items-center gap-8">
// // //           <Link href="/" className="text-lg uppercase tracking-wide hover:text-white transition-all">
// // //             Home
// // //           </Link>

// // //           {["About", "Contact"].map((item) => (
// // //             <Link
// // //               key={item}
// // //               href={`/${item.toLowerCase()}`}
// // //               className="text-lg uppercase tracking-wide hover:text-white transition-all"
// // //             >
// // //               {item}
// // //             </Link>
// // //           ))}

// // //           {/* SHOP MENU with Animated Dropdown */}
// // //           <div
// // //             className="relative group"
// // //             onMouseEnter={() => setIsShopOpen(true)}
// // //             onMouseLeave={() => setIsShopOpen(false)}
// // //           >
// // //             <button className="hover:text-white text-lg uppercase flex items-center gap-2">
// // //               Shop <i className="fa-solid fa-chevron-down"></i>
// // //             </button>

// // //             <motion.div
// // //               initial={{ opacity: 0, y: -10 }}
// // //               animate={{ opacity: isShopOpen ? 1 : 0, y: isShopOpen ? 0 : -10 }}
// // //               transition={{ duration: 0.3 }}
// // //               className={`absolute top-full left-0 bg-white text-black shadow-lg rounded-lg w-52 z-50 ${
// // //                 isShopOpen ? "visible" : "invisible"
// // //               }`}
// // //             >
// // //               <ul className="flex flex-col text-base">
// // //                 {supplementCategories.map((category) => (
// // //                   <Link
// // //                     key={category.slug}
// // //                     href={`/supplements/${category.slug}`}
// // //                     className="block px-4 py-2 rounded-lg hover:bg-blu hover:text-white"
// // //                   >
// // //                     {category.name}
// // //                   </Link>
// // //                 ))}
// // //               </ul>
// // //             </motion.div>
// // //           </div>
// // //         </div>

// // //         {/* Wishlist, Cart & User Icons */}
// // //         <div className="flex items-center gap-6">
// // //           <Link href="/wishlist">
// // //             <FavoriteBorderIcon fontSize="medium" />
// // //           </Link>

// // //           <Link href="/cart" className="relative">
// // //             <ShoppingCartIcon fontSize="medium" />
// // //             {totalCartQuantity > 0 && (
// // //               <span className="absolute top-0 right-[-10px] bg-red-500 text-xs text-white rounded-full px-2">
// // //                 {totalCartQuantity}
// // //               </span>
// // //             )}
// // //           </Link>

// // //           {/* Authentication Section */}
// // //           {user ? <UserDropdown user={user} /> : <Link href="/login">Login</Link>}
// // //         </div>
// // //       </header>
// // //     </section>
// // //   );
// // // }

// // // export default Header;

// // // gym-supplements-frontend\app\components\Header.tsx
// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState, useEffect } from "react";
// // import { useTogglerContext } from "../context/toggler";
// // import { usePathname } from "next/navigation";
// // import { motion } from "framer-motion";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import { useSelector } from "react-redux";
// // import { RootState } from "../redux/store";
// // import UserDropdown from "./UserDropdown";

// // // Supplement categories
// // const supplementCategories = [
// //   { name: "Whey Protein", slug: "whey-protein" },
// //   { name: "Mass Gainers", slug: "mass-gainers" },
// //   { name: "BCAA (Intra-workout)", slug: "bcaa-intra-workout" },
// //   { name: "Pre-Workout", slug: "pre-workout" },
// //   { name: "Creatine", slug: "creatine" },
// // ];

// // function Header() {
// //   const { setMobileNavbar } = useTogglerContext();
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [isShopOpen, setIsShopOpen] = useState(false);
// //   const [isSticky, setIsSticky] = useState(false);

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
// //           {user ? <UserDropdown user={user} /> : <Link href="/login">Login</Link>}
// //         </div>
// //       </header>
// //     </section>
// //   );
// // }

// // export default Header;


// // -------------------------------------------------------below code is somewaht working for lgoin state mgnt ------------------------------------
// // gym-supplements-frontend\app\components\Header.tsx
// 'use client'
// import React, { useState } from "react";
// import Link from "next/link";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { logout } from "../redux/slices/authSlice";
// import { useRouter } from "next/navigation";
// import { FaUserCircle } from "react-icons/fa";

// const Header = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const token = useSelector((state: RootState) => state.auth.token);
//   const user = useSelector((state: RootState) => state.auth.user);
//   const [showDropdown, setShowDropdown] = useState(false);
  
//   const handleLogout = () => {
//     dispatch(logout());
//     router.push("/login"); // Redirect to login page after logout
//   };

//   return (
//     <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//       <Link href="/" className="text-xl font-bold text-blue-600">
//         Muscle&Health
//       </Link>

//       <nav className="flex items-center space-x-6">
//         {token ? (
//           <div className="relative">
//             <button
//               onClick={() => setShowDropdown(!showDropdown)}
//               className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-600"
//             >
//               <FaUserCircle size={28} />
//               <span>{user?.uname || "Profile"}</span>
//             </button>

//             {showDropdown && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
//                 <ul className="py-2">
//                   <li>
//                     <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       My Profile
//                     </Link>
//                   </li>
//                   <li>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link
//             href="/login"
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//             Login
//           </Link>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// // -------------------------------------------------------above code is somewaht working for lgoin state mgnt ------------------------------------

"use client"
import ProfileDropdown from "./ProfileDropdown";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Gym Supplements</h1>

      <nav>
        <ul className="flex items-center space-x-6">
          <li><a href="/" className="text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="/shop" className="text-gray-700 hover:text-gray-900">Shop</a></li>
          <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>

          {/* Toggle between Login and Profile Dropdown */}
          {token ? <ProfileDropdown /> : <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</a>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
