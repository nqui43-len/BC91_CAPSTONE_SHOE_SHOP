import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./assets/style/style.css";

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
import HomeTemplate from "./templates/HomeTemplate";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        {/*Khai báo Route cha sử dụng HomeTemplate */}
        <Route path="" element={<HomeTemplate />}>
        {/* Các Route con sẽ được bơm vào thẻ <Outlet /> của HomeTemplate */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="carts" element={<Carts />} />
          <Route path="search" element={<Search />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
