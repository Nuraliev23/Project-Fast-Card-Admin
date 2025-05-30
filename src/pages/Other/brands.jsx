import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { TextField } from "@mui/material";
import { addNewBrand, deleteBrand, getBrands } from "../../entities/Brands/brandSlice";

const Brands = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((store) => store.brand);
  const[newbrand,setnewbrand] = useState('')

  useEffect(() => {
    dispatch(getBrands());
  },[]);

  return (
    <div>
      <section className="flex justify-between flex-col md:flex-row gap-[32px]">
        <table className="md:w-[48%] w-full text-left rounded-lg shadow">
          <caption className="text-lg font-semibold mb-4 text-start">
            Top Products by Units Sold{" "}
          </caption>
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Brands</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody className="">
          { 
            brands.map((el) => {
              return (
                <tr key={el.id} className="border-b hover:bg-gray-50" >
                  <td className="p-4">{el.brandName}</td>
                  <td className="p-4">
                    <div className="p-4 font-medium text-blue-600 flex items-center gap-[8px]">
                      <button onClick={()=>dispatch(deleteBrand(el.id))}>
                      <DeleteIcon  className="text-[red] cursor-pointer" />
                      </button>
                      <BorderColorIcon className="text-[#2563EB] cursor-pointer" />
                    </div>
                  </td>
                </tr>
              );
            })}
            </tbody>
        </table>
        <div className="md:w-[40%] w-[100%] h-[200px] text-end border-[1px] border-[#80808049] p-[20px]">
            <div className="mb-[24px]">
                <h1 className="text-start mb-[24px]">Add new brand</h1>
                <TextField id="outlined-basic" className="w-full" label="Outlined" variant="outlined"  value={newbrand} onChange={(e)=>setnewbrand(e.target.value)}/>
            </div>
          <button onClick={()=>{dispatch(addNewBrand(newbrand)) 
            setnewbrand('')
          }} className="bg-[#2563EB] text-white rounded-[5px] p-[5px_15px] cursor-pointer">
            Create
          </button>
        </div>
      </section>
    </div>
  );
};

export default Brands;
