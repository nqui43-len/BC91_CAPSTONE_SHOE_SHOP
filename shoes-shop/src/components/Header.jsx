import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* TẦNG 1: Thanh màu đen chứa Logo và công cụ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#000",
          padding: "10px 30px",
          color: "#fff",
        }}
      >
        {/* Bên trái: Logo bấm vào sẽ về trang chủ */}
        <NavLink to="/">
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="CyberLearn Logo"
            style={{ height: "40px" }}
          />
        </NavLink>

        {/* Bên phải: Các nút chức năng */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "16px",
            fontWeight: "300",
          }}
        >
          <NavLink
            to="/search"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            🔍 Search
          </NavLink>

          <NavLink
            to="/carts"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            🛒 (1)
          </NavLink>

          {/* Sau này khi có chức năng đăng nhập, ta sẽ ẩn 2 nút này đi và hiện tên User */}
          <NavLink
            to="/login"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Register
          </NavLink>
        </div>
      </div>

      {/* TẦNG 2: Thanh menu danh mục màu trắng */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          padding: "15px 30px",
          fontSize: "18px",
        }}
      >
        {/* Sử dụng thuộc tính isActive của NavLink để đổi màu nút nào đang được chọn */}
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#8d8d8d",
            textDecoration: "none",
            fontWeight: isActive ? "500" : "300",
            borderBottom: isActive ? "2px solid #000" : "none",
            paddingBottom: "5px",
          })}
        >
          Home
        </NavLink>

        {/* Các danh mục này hiện tại chỉ làm giao diện tĩnh theo Figma */}
        <span
          style={{ color: "#8d8d8d", fontWeight: "300", cursor: "pointer" }}
        >
          Men
        </span>
        <span
          style={{ color: "#8d8d8d", fontWeight: "300", cursor: "pointer" }}
        >
          Woman
        </span>
        <span
          style={{ color: "#8d8d8d", fontWeight: "300", cursor: "pointer" }}
        >
          Kid
        </span>
        <span
          style={{ color: "#8d8d8d", fontWeight: "300", cursor: "pointer" }}
        >
          Sport
        </span>
      </div>
    </header>
  );
};

export default Header;
