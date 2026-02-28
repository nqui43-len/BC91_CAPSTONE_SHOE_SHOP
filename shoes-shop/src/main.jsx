import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Provider } from "react-redux";

// 1. Nhập (Import) nhà kho chúng ta vừa tạo ở Bước 1
import { store } from "./redux/store"; 

// 2. Nhập các trang giao diện
import Home from "./pages/Home";
import Login from "./pages/Login";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* 3. Dùng Provider bọc bên ngoài và truyền nhà kho (store) vào */}
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);