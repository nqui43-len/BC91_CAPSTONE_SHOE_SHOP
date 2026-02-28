import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./assets/CSS/style.css";

// Import Menu
import Header from "./components/Header";

// Import 7 Trang
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Carts from "./pages/Carts";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* Header nằm ngoài Routes để luôn hiển thị */}
      <Header />

      {/* Nội dung các trang */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Provider>
  </BrowserRouter>,
);
