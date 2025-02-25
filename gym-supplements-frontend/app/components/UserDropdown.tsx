import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const UserDropdown = ({ user }: { user: { name: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-user-circle text-2xl"></i>
        <span>{user.name}</span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full right-0 bg-white shadow-lg rounded-lg w-48"
        >
          <ul className="flex flex-col text-sm text-gray-700">
            <li className="hover:bg-gray-200 px-4 py-2">
              <Link href="/orders">My Orders</Link>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2">
              <Link href="/profile">My Profile</Link>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2">
              <Link href="/addresses">My Addresses</Link>
            </li>
            <li className="hover:bg-red-500 hover:text-white px-4 py-2 cursor-pointer" onClick={() => dispatch(logout())}>
              Logout
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default UserDropdown;
