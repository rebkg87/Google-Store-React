import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import WatchIndex from "../indexWatch/IndexWatch";
import IndexEarbuds from "../index-earbuds/IndexEarbuds";
import { CartPage } from "../cart-page/CartPage";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexEarbuds />} />
        <Route path="/watches" element={<WatchIndex />} />
        <Route path="/earbuds" element={<IndexEarbuds />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default Dashboard;
