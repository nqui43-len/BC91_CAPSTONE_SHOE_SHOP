import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
    // Hiện tại nhà kho đang trống. 
    // Sau này chúng ta sẽ thêm dữ liệu User, Giỏ hàng (Cart) vào đây.
  },
})