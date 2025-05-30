
import { configureStore } from '@reduxjs/toolkit'
import adminSlice  from '../entities/adminSlice'
import productSlice  from '../entities/Product/productSlice'
import  brandSlice  from '../entities/Brands/brandSlice'
import  categorySlice  from '../entities/Category/categorySlice'
import  colorSlice  from '../entities/Colors/colorsSlice'
import  subCategorySlice  from '../entities/Category/subCategorySlice'

export const store  = configureStore({
    reducer:{
        admin:adminSlice,
        products:productSlice,
        brand:brandSlice,
        category:categorySlice,
        color:colorSlice,
        subcategory:subCategorySlice

    }
})