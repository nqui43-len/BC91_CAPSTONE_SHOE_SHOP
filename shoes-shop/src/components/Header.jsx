import React from "react";

const Header = () => {
  return (
    <div
      style={{
        padding: "15px",
        background: "#000",
        color: "white",
        display: "flex",
        gap: "30px",
        fontSize: "18px",
      }}
    >
      {/* Thẻ NavLink có thuộc tính "to" để chỉ định đường link sẽ tới */}
      <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
        🏠 Trang Chủ
      </NavLink>

      <NavLink to="/login" style={{ color: "white", textDecoration: "none" }}>
        🔐 Đăng Nhập
      </NavLink>
    </div>
  );
};

export default Header;
