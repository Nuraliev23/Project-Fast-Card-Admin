import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { TextField } from "@mui/material";
import {
  addNewBrand,
  deleteBrand,
  getBrands,
  updateBrand,
} from "../../entities/Brands/brandSlice";

const Brands = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((store) => store.brand);
  const [newbrand, setnewbrand] = useState("");
  const [editBrandName, setEditBrandName] = useState("");
  const [editBrandId, setEditBrandId] = useState(null);

  function getBrand(el) {
    setEditBrandName(el.brandName);
    setEditBrandId(el.id);
  }
const obj = {
    brandName:editBrandName,
    id:editBrandId
}

  useEffect(() => {
    dispatch(getBrands());
  }, []);

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
            {brands.map((el) => {
              return (
                <tr key={el.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{el.brandName}</td>
                  <td className="p-4">
                    <div className="p-4 font-medium text-blue-600 flex items-center gap-[8px]">
                      <button onClick={() => dispatch(deleteBrand(el.id))}>
                        <DeleteIcon className="text-[red] cursor-pointer" />
                      </button>
                      <BorderColorIcon onClick={()=>getBrand(el)} className="text-[#2563EB] cursor-pointer" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="md:w-[40%] w-full flex flex-col gap-[30px]">
          <div className=" w-[100%] h-[200px] text-end border-[1px] border-[#80808049] p-[20px]">
            <div className="mb-[24px]">
              <h1 className="text-start mb-[24px] font-bold">Add new brand</h1>
              <TextField

                className="w-full"
                label="Add Brand"
                variant="outlined"
                value={newbrand}
                onChange={(e) => setnewbrand(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                dispatch(addNewBrand(newbrand));
                setnewbrand("");
              }}
              className="bg-[#2563EB] text-white rounded-[5px] p-[5px_15px] cursor-pointer"
            >
              Create
            </button>
          </div>
          <div className=" md:w-[100%] w-full h-[200px] text-end border-[1px] border-[#80808049] p-[20px]">
            <div className="mb-[24px]">
              <h1 className="text-start mb-[24px] font-bold">
                Update Your Brand
              </h1>
              <TextField
                className="w-full"
                label="Edit Brand"
                variant="outlined"
                value={editBrandName}
                onChange={(e) => setEditBrandName(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                dispatch(updateBrand(obj));
                setEditBrandName("");
                setEditBrandId(null)
              }}
              className="bg-[#2563EB] text-white rounded-[5px] p-[5px_15px] cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
