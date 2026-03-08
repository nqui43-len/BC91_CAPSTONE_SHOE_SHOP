import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsApi } from "../redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    dispatch(getAllProductsApi());
  }, []);

  return (
    <div style={{ paddingBottom: "50px" }}>
      <Carousel />
      <h1
        style={{
          fontWeight: "400",
          marginBottom: "40px",
          padding: "15px 30px",
          background: "linear-gradient(180deg, #F21299 0%, #1B02B5 100%)",
          color: "#fff",
          width: "50%",
          fontSize: "32px",
        }}
      >
        Product Feature
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          padding: "0 50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {arrProduct.slice(0, visibleCount).map((shoe) => {
          return <ProductCard key={shoe.id} prod={shoe} />;
        })}
      </div>
      {visibleCount < arrProduct.length && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={() => setVisibleCount(visibleCount + 6)} // Bấm vào thì cộng thêm 6 sản phẩm nữa
            style={{
              padding: "12px 40px",
              background: "#000",
              color: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              border: "none",
              fontWeight: "300",
            }}
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
