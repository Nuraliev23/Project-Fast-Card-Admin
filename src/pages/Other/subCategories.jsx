import { useDialogs } from "@toolpad/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSubCategory, getSubCategory } from "../../entities/Category/subCategorySlice";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const SubCategories = () => {
  let dispatch = useDispatch();
  const { subcategorydata } = useSelector((store) => store.subcategory);

  useEffect(() => {
    dispatch(getSubCategory());
  }, []);

  return (
    <div>
      <table className="md:w-[48%] w-full text-left rounded-lg shadow">
        <caption className="text-lg font-semibold mb-4 text-start">
          Top Products by Units Sold{" "}
        </caption>
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-2">SubCategories</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {subcategorydata.map((el) => {
            return (
              <tr key={el.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{el.subCategoryName}</td>
                <td className="p-4">
                  <div className="p-4 font-medium text-blue-600 flex items-center gap-[8px]">
                    <button onClick={() => dispatch(deleteSubCategory(el.id))}>
                      <DeleteIcon className="text-[red] cursor-pointer" />
                    </button>
                    <BorderColorIcon
                      onClick={() => getBrand(el)}
                      className="text-[#2563EB] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategories;
