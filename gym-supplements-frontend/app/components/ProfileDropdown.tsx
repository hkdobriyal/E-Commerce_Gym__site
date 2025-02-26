"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logoutUser } from "../redux/slices/authSlice";
import { useRouter } from "next/navigation";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
      >
        <img src="/images/profile-icon.png" alt="Profile" className="w-10 h-10" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
          <ul className="py-2">
            <li className="px-4 py-2 text-gray-700 font-medium">{user?.uname}</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push("/profile")}>
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push("/orders")}>
              Orders
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
