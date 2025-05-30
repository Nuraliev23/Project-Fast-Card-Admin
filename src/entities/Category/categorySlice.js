import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../../shared/ConfigJs/api"
let api = import.meta.env.VITE_API_URL;

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    try {
      let { data } = await axios.get(`${api}/Category/get-categories`);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addNewCategory = createAsyncThunk(
  "category/addNewCategory",
  async (formData, {}) => {
    try {
      const token = localStorage.getItem("Token");

      let { data } = await axios.post(`${api}/Category/add-category`, formData,{
        headers:{
          "Content-Type":"multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      });
      return data.data
    } catch (error) {}
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    getDataCategory: [],
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCategories.fulfilled, (state, action) => {
      state.getDataCategory = action.payload;
    })
    .addCase(addNewCategory.fulfilled,(state,action)=>{
      state.getDataCategory.push(action.payload)
    })
  },
});
export default categorySlice.reducer;
