import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../../shared/ConfigJs/api"
let api = import.meta.env.VITE_API_URL;

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      let { data } = await axios.get(
        `${api}/Product/get-products?PageSize=1000`
      );

      return data.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
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

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (formData, {}) => {
    try {
      const token = localStorage.getItem("Token");
      const response = await axios.post(
        `${api}/Product/add-product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.error(error.response?.data);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    try {
      let { data } = await axios.get(
        `${api}/Product/get-product-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (obj) => {
    console.log(obj);
    
    try {
      const token = localStorage.getItem("Token");

    let response =   await axios.put(
        `${api}/Product/update-product?Id=${obj.id}&BrandId=${obj.brand}&ColorId=${obj.color}&ProductName=${obj.productName}&Description=${obj.description}&Quantity=${obj.quantity}&Code=${obj.code}&Price=${obj.price}&HasDiscount=${obj.hasDiscount}&DiscountPrice=${obj.discountPrice}&SubCategoryId=${obj.subCategoryId}`,{},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data
    } catch (error) {
      console.error(error);
    }
 
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    getData: [],
    getdataid: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.getData = action.payload;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.getdataid = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.getData = state.getData.filter((el) => el.id != action.payload);
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.getData.push(action.payload);
      });
  },
});
export default productSlice.reducer;
