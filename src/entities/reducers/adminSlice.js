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

export const getProducts = createAsyncThunk("admin/getProducts", async () => {
  try {
    let { data } = await axios.get(`${api}/Product/get-products?PageSize=1000`);
    return data.data.products;
  } catch (error) {
    console.error(error);
  }
});

export const getCategory = createAsyncThunk("admin/getCategory", async () => {
  try {
    let { data } = await axios.get(`${api}/Category/get-categories`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const GetBrands = createAsyncThunk("admin/GetBrands", async () => {
  try {
    let { data } = await axios.get(`${api}/Brand/get-brands`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const DeleteProduct = createAsyncThunk(
    "admin/DeleteProduct",
    async (id, { dispatch }) => {
      try {
        const token = localStorage.getItem("Token");
        const { data } = await axios.delete(
          `${api}/Product/delete-product?id=${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(getProducts());
        return data.data;
      } catch (error) {
        console.error(error);
      }
    }
  );
export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: [],
    data2: [],
    brands: [],
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
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.data = state.data.filter((el) => el.id != action.payload);
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.data2 = action.payload;
      })
      .addCase(GetBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      });
  },
});

export default adminSlice.reducer;
