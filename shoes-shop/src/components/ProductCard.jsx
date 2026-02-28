import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({prod}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div
      style={{
        width: "330px",
        background: "#F8F8F8",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Phần hình ảnh */}
      <div style={{ padding: "20px", position: "relative" }}>
        <img
          src={prod.image}
          alt={prod.name}
          style={{ width: "100%", objectFit: "cover" }}
        />
        <div
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            position: "absolute",
            top: "25px",
            right: "25px",
            cursor: "pointer",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill={isFavorite ? "red" : "white"}
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      </div>

      {/* Phần thông tin */}
      <div style={{ padding: "0 20px 20px", textAlign: "left" }}>
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "300",
            fontStyle: "Light",
            marginBottom: "10px",
          }}
        >
          {prod.name}
        </h3>
        <p
          style={{
            color: "#CBC9C9",
            fontSize: "20px",
            fontStyle: "Light",
            marginBottom: "15px",
          }}
        >
          {prod.shortDescription}
        </p>
      </div>

      {/* Phần nút bấm mua và giá tiền */}
      <div style={{ display: "flex", borderTop: "1px solid #E8E8E8" }}>
        <NavLink
          to={`/detail/${prod.id}`}
          style={{
            flex: 1,
            background:
              "var(--bg-button-buy)" /* Lấy màu từ file css toàn cục */,
            color: "var(--color-button-buy)",
            padding: "15px 0",
            textDecoration: "none",
            fontStyle: "Regular",
            fontSize: "24px",
            fontWeight: "300",
          }}
        >
          Buy now
        </NavLink>

        <div
          style={{
            flex: 1,
            background: "var(--bg-button-price)" /* Lấy màu vàng từ file css */,
            color: "var(--text-dark)",
            padding: "15px 0",
            fontStyle: "semiBold",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          {prod.price}$
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
