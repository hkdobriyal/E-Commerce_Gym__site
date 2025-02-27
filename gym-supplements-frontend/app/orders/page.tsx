import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Orders from "../components/Orders";

const OrdersPage = () => {
  return (
    <main className="bg-gray-100">
      <Header />
      <MobileNavbar />
      <Orders />
      <Footer />
    </main>
  );
};

export default OrdersPage;
