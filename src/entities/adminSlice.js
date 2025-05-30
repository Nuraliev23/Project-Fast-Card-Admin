import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let api = import.meta.env.VITE_API_URL;

export const login = createAsyncThunk("admin/login", async (user, thunkAPI) => {
  try {
    const { data } = await axios.post(`${api}/Account/login`, user);
    localStorage.setItem("Token", data.data);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Wrong Username or Password");
  }
});



export const adminSlice = createSlice({
  name: "admin",
  initialState: {

    loginError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const token = action.payload;
        state.token = token;
        state.loginError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = action.payload || "Login failed"; // из rejectWithValue
        state.token = null;
      })


  },
});

export default adminSlice.reducer;
