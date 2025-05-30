import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let api = import.meta.env.VITE_API_URL;

export const getColors = createAsyncThunk("color/getColors", async () => {
  try {
    let {data} = await axios.get(`${api}/Color/get-colors`)
    return data.data
  } catch (error) {
    console.error(error);
  }
});

export const colorSlice = createSlice({
    name:"color",
    initialState:{
        colors:[]
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getColors.fulfilled,(state, action)=>{
            state.colors = action.payload
        })
    }
})

export default colorSlice.reducer