import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeTemplate = () => {
  return (
    <div>
      {/* Header luôn nằm trên cùng */}
      <Header />

      {/* Thẻ Outlet là nơi React Router sẽ "bơm" nội dung của từng trang vào đây */}
      <div style={{ minHeight: "70vh", padding: "20px" }}>
        <Outlet />
      </div>

      {/* Footer luôn nằm dưới cùng */}
      <Footer />
    </div>
  );
};

export default HomeTemplate;
