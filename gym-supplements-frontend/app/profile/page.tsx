import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const ProfilePage = () => {
  return (
    <main className="bg-gray-100">
      <Header />
      <MobileNavbar />
      <Profile />
      <Footer />
    </main>
  );
};

export default ProfilePage;
