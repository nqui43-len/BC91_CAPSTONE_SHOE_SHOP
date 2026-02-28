import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        padding: "15px",
        background: "#000",
        color: "white",
        display: "flex",
        gap: "20px",
        fontSize: "16px",
        flexWrap: "wrap",
      }}
    >
      <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
        🏠 Trang Chủ
      </NavLink>
      <NavLink to="/search" style={{ color: "white", textDecoration: "none" }}>
        🔍 Tìm kiếm
      </NavLink>
      <NavLink
        to="/detail/1"
        style={{ color: "white", textDecoration: "none" }}
      >
        👟 Chi tiết
      </NavLink>
      <NavLink to="/carts" style={{ color: "white", textDecoration: "none" }}>
        🛒 Giỏ hàng
      </NavLink>
      <NavLink to="/login" style={{ color: "white", textDecoration: "none" }}>
        🔐 Đăng Nhập
      </NavLink>
      <NavLink
        to="/register"
        style={{ color: "white", textDecoration: "none" }}
      >
        📝 Đăng ký
      </NavLink>
      <NavLink to="/profile" style={{ color: "white", textDecoration: "none" }}>
        👤 Profile
      </NavLink>
    </div>
  );
};

export default Header;
