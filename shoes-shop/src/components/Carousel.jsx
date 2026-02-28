import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);

  const [currentIndex, setCurrentIndex] = useState(1);

  const [isTransitioning, setIsTransitioning] = useState(true);

  const carouselItems = arrProduct.slice(0, 3);
  const length = carouselItems.length;

  const extendedItems = [
    carouselItems[length - 1],
    ...carouselItems,
    carouselItems[0],
  ];

  useEffect(() => {
    if (length === 0) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(length);
    }
  };

  if (length === 0)
    return <div style={{ minHeight: "400px", backgroundColor: "#fff" }}></div>;

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        minHeight: "400px",
        marginBottom: "40px",
        overflow: "hidden",
      }}
    >
      <div
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          padding: "10px",
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>

      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          width: "100%",
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          transform: `translateX(-${currentIndex * 100}%)`,
          height: "400px",
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            style={{
              flex: "0 0 100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0 80px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "50%", maxWidth: "500px", objectFit: "contain" }}
            />
            <div style={{ textAlign: "left", maxWidth: "400px" }}>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "300",
                  marginBottom: "10px",
                }}
              >
                {item.name}
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  color: "#8d8d8d",
                  marginBottom: "20px",
                }}
              >
                {item.shortDescription}
              </p>
              <NavLink
                to={`/detail/${item.id}`}
                style={{
                  backgroundColor: "#EAA94F",
                  color: "#fff",
                  border: "none",
                  padding: "12px 35px",
                  fontSize: "20px",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Buy now
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          padding: "10px",
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "15px",
          zIndex: 10,
        }}
      >
        {carouselItems.map((_, index) => {
          let realIndex = currentIndex - 1;
          if (currentIndex === 0) realIndex = length - 1;
          if (currentIndex === length + 1) realIndex = 0;

          return (
            <div
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index + 1);
              }}
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                border: "2px solid #e0e0e0",
                backgroundColor:
                  realIndex === index ? "#EAA94F" : "transparent",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
