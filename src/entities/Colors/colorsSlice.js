import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let api = import.meta.env.VITE_API_URL;

export const getColors = createAsyncThunk("color/getColors", async () => {
  try {
    let { data } = await axios.get(`${api}/Color/get-colors`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const addNewColor = createAsyncThunk(
  "color/addNewColor",
  async (newColor) => {
    try {
      const token = localStorage.getItem("Token");
      let { data } = await axios.post(
        `${api}/Color/add-color?ColorName=${newColor.colorName}`,{},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data.data
    } catch (error) {
        console.error(error);
        
    }
  }
);

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    colors: [],
  },
  extraReducers: (builder) => {
    builder
    .addCase(getColors.fulfilled, (state, action) => {
      state.colors = action.payload;
    })
    .addCase(addNewColor.fulfilled,(state,action)=>{
        state.colors.push(action.payload)
    })
  },
});

export default colorSlice.reducer;
