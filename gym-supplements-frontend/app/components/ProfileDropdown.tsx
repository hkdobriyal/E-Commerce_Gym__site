// // E-Commerce_Gym__site/gym-supplements-frontend/app/components/ProfileDropdown.tsx
// // import { useRouter } from "next/navigation";
// // import { useDispatch } from "react-redux";
// // import { logout } from "../redux/slices/authSlice"; // Ensure correct import

// // const ProfileDropdown = () => {
// //   const dispatch = useDispatch();
// //   const router = useRouter();

// //   const handleLogout = () => {
// //     dispatch(logout()); // ✅ Correct function name
// //     localStorage.removeItem("token");
// //     router.push("/login");
// //   };

// //   return (
// //     <div className="profile-dropdown">
// //       <button onClick={handleLogout}>Logout</button>
// //     </div>
// //   );
// // };
// // export default ProfileDropdown;


// // E-Commerce_Gym__site/gym-supplements-frontend/app/components/ProfileDropdown.tsx
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { logout } from "../redux/slices/authSlice"; // Ensure correct import

// const ProfileDropdown = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("token");
//     router.push("/login");
//   };

//   const handleProfile = () => {
//     router.push("/profile");
//   };

//   const handleOrders = () => {
//     router.push("/orders");
//   };

//   return (
//     <div className="profile-dropdown bg-white shadow-md rounded-md p-4">
//       <button onClick={handleProfile} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
//         Profile
//       </button>
//       <button onClick={handleOrders} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
//         Orders
//       </button>
//       <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default ProfileDropdown;


import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice"; // Ensure correct import
import { motion } from "framer-motion";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LoginIcon from "@mui/icons-material/Login"; // Import LoginIcon


const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/login");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleOrders = () => {
    router.push("/orders");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full right-0 bg-white text-black shadow-lg rounded-lg w-52 z-50"
    >
      <ul className="flex flex-col text-base">
        <li
          onClick={handleProfile}
          className="block px-4 py-2 rounded-lg hover:bg-blu hover:text-white"
        >
          Profile
        </li>
        <li
          onClick={handleOrders}
          className="block px-4 py-2 rounded-lg hover:bg-blu hover:text-white"
        >
          Orders
        </li>
        <li
          onClick={handleLogout}
          className="block px-4 py-2 rounded-lg hover:bg-blu hover:text-white"
        >
          Logout
        </li>
      </ul>
    </motion.div>
  );
};

export default ProfileDropdown;
