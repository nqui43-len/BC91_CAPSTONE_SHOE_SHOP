import React from "react";

const Footer = () => {
  return (
    <footer style={{ marginTop: "50px" }}>
      {/* Khối liên kết */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px 0",
          borderTop: "1px solid #e8e8e8",
          borderBottom: "1px solid #e8e8e8",
        }}
      >
        <div>
          <h3>GET HELP</h3>
          <ul style={{ listStyle: "none", lineHeight: "2", marginTop: "10px" }}>
            <li>Home</li>
            <li>Nike</li>
            <li>Adidas</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3>SUPPORT</h3>
          <ul style={{ listStyle: "none", lineHeight: "2", marginTop: "10px" }}>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Phone</li>
          </ul>
        </div>
        <div>
          <h3>REGISTER</h3>
          <ul style={{ listStyle: "none", lineHeight: "2", marginTop: "10px" }}>
            <li>Register</li>
            <li>Login</li>
          </ul>
        </div>
      </div>

      {/* Khối bản quyền */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          background: "#f8f8f8",
          fontSize: "14px",
        }}
      >
        © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải
      </div>
    </footer>
  );
};

export default Footer;
