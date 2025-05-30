import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../../shared/ConfigJs/api"
let api = import.meta.env.VITE_API_URL;

export const getCategories = createAsyncThunk("category/getCategories", async () => {
  try {
    let { data } = await axios.get(`${api}/Category/get-categories`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    getDataCategory: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.getDataCategory = action.payload;
    });
  },
});
export default categorySlice.reducer;
