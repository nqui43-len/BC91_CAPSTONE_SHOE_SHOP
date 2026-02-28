import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Chèn thêm thư viện gọi API

export const getAllProductsApi = createAsyncThunk(
  "product/getAllProductsApi",
  async () => {
    const response = await axios.get("https://shop.cyberlearn.vn/api/Product");
    return response.data.content;
  },
);

const initialState = {
  arrProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsApi.fulfilled, (state, action) => {
      state.arrProduct = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
