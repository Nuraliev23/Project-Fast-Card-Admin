import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBrands } from "../../entities/reducers/adminSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { TextField } from "@mui/material";

const Brands = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((store) => store.admin);
console.log(brands);

  useEffect(() => {
    dispatch(GetBrands());
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
                      <DeleteIcon className="text-[red] cursor-pointer" />
                      <BorderColorIcon className="text-[#2563EB] cursor-pointer" />
                    </div>
                  </td>
                </tr>
              );
            })}
            </tbody>
        </table>
        <div className="md:w-[40%] w-[100%] border-[1px] border-[#80808049] flex flex-col gap-[30px]">
          <h1>Add new brand</h1>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <button className="bg-[#2563EB] text-white rounded-[5px] p-[5px_15px]">
            Create
          </button>
        </div>
      </section>
    </div>
  );
};

export default Brands;
