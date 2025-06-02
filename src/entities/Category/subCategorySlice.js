import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let api = import.meta.env.VITE_API_URL;

export const getSubCategory = createAsyncThunk(
  "subcategory/getSubCategory",
  async () => {
    try {
      let { data } = await axios.get(`${api}/SubCategory/get-sub-category`);
      return data.data
    } catch (error) {
        console.error(error);
    }
  }
);


export const deleteSubCategory = createAsyncThunk(
    "subcategory/deleteSubCategory",
    async (id, { dispatch }) => {
      try {
        const token = localStorage.getItem("Token");
        let { data } = await axios.delete(`${api}/SubCategory/delete-sub-category?id=${id}`,{
          headers:{Authorization: `Bearer ${token}`}
        });
        dispatch(getSubCategory())
        dispatch(getBrands())
        return data.data
      } catch (error) {
        console.error(error);
      }
    }
  );
  

export const subCategorySlice = createSlice({
    name:"subcategory",
    initialState:{
        subcategorydata:[]
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getSubCategory.fulfilled,(state,action)=>{
            state.subcategorydata = action.payload
        })
    }
})
export default subCategorySlice.reducer