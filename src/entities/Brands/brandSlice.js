import { NearMeTwoTone } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../../shared/ConfigJs/api"
let api = import.meta.env.VITE_API_URL;

export const getBrands = createAsyncThunk("brand/getBrands", async () => {
  try {
    let { data } = await axios.get(`${api}/Brand/get-brands`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const addNewBrand = createAsyncThunk(
  "brand/addNewBrand",
  async (name, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");

      let { data } = await axios.post(
        `${api}/Brand/add-brand?BrandName=${name}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getBrands());
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");
      let { data } = await axios.delete(`${api}/Brand/delete-brand?id=${id}`,{
        headers:{Authorization: `Bearer ${token}`}
      });
      dispatch(getBrands())
      return data.data
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async (name,{ dispatch }) => {
    try {
      const token = localStorage.getItem("Token");

      let { data } = await axios.put(
        `${api}/Brand/update-brand?Id=${name.id}&BrandName=${name.brandName}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getBrands());
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brands: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    })
   .addCase(addNewBrand.fulfilled, (state, action) => {
      state.brands.push(action.payload);
    })
   .addCase(updateBrand.fulfilled, (state, action) => {
      state.brands.push(action.payload);
    })
   .addCase(deleteBrand.fulfilled, (state, action) => {
    state.brands = state.brands.filter((el) => el.id != action.payload);

     })

  },
});

export default brandSlice.reducer;
